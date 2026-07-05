#!/usr/bin/env python3
"""介護のキ WordPress入稿スクリプト。

記事パッケージ(content-ops/articles/<slug>/)を WordPress REST API で
下書き入稿する。Python標準ライブラリのみで動く。

使い方:
    python3 wp_import.py --check                 # 接続テスト
    python3 wp_import.py <パッケージdir> --dry-run  # 送信内容の確認のみ
    python3 wp_import.py <パッケージdir>            # 下書き入稿
    python3 wp_import.py <パッケージdir> --publish-at "2026-07-10T09:00:00"  # 予約公開

必要な環境変数:
    WP_BASE_URL      例: https://kaigonoki.com
    WP_USERNAME      WordPressユーザー名
    WP_APP_PASSWORD  アプリケーションパスワード
"""

import argparse
import base64
import json
import mimetypes
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path


def env(name: str) -> str:
    value = os.environ.get(name, "").strip()
    if not value:
        sys.exit(f"環境変数 {name} が未設定です。content-ops/README.md のセットアップ手順を参照。")
    return value


def api_request(path: str, data: bytes | None = None, headers: dict | None = None, method: str = "GET"):
    base = env("WP_BASE_URL").rstrip("/")
    auth = base64.b64encode(f"{env('WP_USERNAME')}:{env('WP_APP_PASSWORD')}".encode()).decode()
    req = urllib.request.Request(
        f"{base}/wp-json/wp/v2/{path}",
        data=data,
        method=method,
        headers={"Authorization": f"Basic {auth}", **(headers or {})},
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as res:
            return json.loads(res.read().decode())
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")[:500]
        sys.exit(f"WordPress APIエラー {e.code} ({path}): {body}")


def upload_media(image_path: Path) -> dict:
    mime = mimetypes.guess_type(image_path.name)[0] or "application/octet-stream"
    result = api_request(
        "media",
        data=image_path.read_bytes(),
        headers={
            "Content-Type": mime,
            "Content-Disposition": f'attachment; filename="{image_path.name}"',
        },
        method="POST",
    )
    return {"id": result["id"], "url": result["source_url"]}


def load_package(package_dir: Path) -> dict:
    meta_path = package_dir / "meta.json"
    html_path = package_dir / "article.html"
    if not meta_path.exists() or not html_path.exists():
        sys.exit(f"{package_dir} に meta.json / article.html が必要です。")
    meta = json.loads(meta_path.read_text(encoding="utf-8"))
    for key in ("title", "slug", "meta_description"):
        if not meta.get(key):
            sys.exit(f"meta.json に {key} がありません。")
    return {"meta": meta, "html": html_path.read_text(encoding="utf-8")}


def main() -> None:
    parser = argparse.ArgumentParser(description="介護のキ WordPress入稿")
    parser.add_argument("package", nargs="?", help="記事パッケージのディレクトリ")
    parser.add_argument("--check", action="store_true", help="接続テストのみ")
    parser.add_argument("--dry-run", action="store_true", help="送信せず内容を表示")
    parser.add_argument("--publish-at", help="予約公開日時 (ISO形式、サイトのタイムゾーン)")
    args = parser.parse_args()

    if args.check:
        me = api_request("users/me?context=edit")
        print(f"接続OK: {me['name']} (roles: {', '.join(me.get('roles', []))})")
        return

    if not args.package:
        parser.error("記事パッケージのディレクトリを指定してください(または --check)。")

    package_dir = Path(args.package)
    pkg = load_package(package_dir)
    meta, html = pkg["meta"], pkg["html"]

    post = {
        "title": meta["title"],
        "slug": meta["slug"],
        "excerpt": meta["meta_description"],
        "status": "draft",
    }
    if args.publish_at:
        post["status"] = "future"
        post["date"] = args.publish_at

    eyecatch = package_dir / "eyecatch.png"
    infographic = package_dir / "infographic.png"

    if args.dry_run:
        post["content"] = f"(本文 {len(html)} 文字)"
        print("=== dry-run: 送信内容 ===")
        print(json.dumps(post, ensure_ascii=False, indent=2))
        print(f"アイキャッチ: {'あり' if eyecatch.exists() else 'なし'}")
        print(f"インフォグラフィック: {'あり' if infographic.exists() else 'なし'}")
        if "{{INFOGRAPHIC_URL}}" in html and not infographic.exists():
            print("警告: 本文に {{INFOGRAPHIC_URL}} がありますが画像ファイルがありません。")
        return

    media_report = []
    if eyecatch.exists():
        uploaded = upload_media(eyecatch)
        post["featured_media"] = uploaded["id"]
        media_report.append(f"アイキャッチ: Media ID {uploaded['id']}")
    if infographic.exists():
        uploaded = upload_media(infographic)
        html = html.replace("{{INFOGRAPHIC_URL}}", uploaded["url"])
        media_report.append(f"インフォグラフィック: Media ID {uploaded['id']}")

    post["content"] = html
    result = api_request("posts", data=json.dumps(post).encode(), headers={"Content-Type": "application/json"}, method="POST")

    base = env("WP_BASE_URL").rstrip("/")
    print(f"入稿完了: {meta['title']}")
    print(f"WP Post ID: {result['id']} ({result['status']})")
    for line in media_report:
        print(line)
    print(f"プレビュー: {base}/?p={result['id']}&preview=true")
    print(f"編集: {base}/wp-admin/post.php?post={result['id']}&action=edit")


if __name__ == "__main__":
    main()
