---
name: kaigo-wp-import
description: 記事パッケージを kaigonoki.com のWordPressに下書き入稿し、Slackに完了通知する。引数でパッケージdir指定、なければ keywords.md の「執筆中」を対象にする。
---

# 介護のキ WordPress入稿

## 手順

1. **対象の決定**: 引数があればそのパッケージdir。なければ `content-ops/keywords.md` で「執筆中」のKWに対応する `content-ops/articles/<slug>/` を対象にする。
2. **事前確認**: `python3 content-ops/scripts/wp_import.py <dir> --dry-run` で送信内容を確認する。meta.json の必須項目・NGワード・`{{INFOGRAPHIC_URL}}` と画像の整合をチェック。
3. **入稿**: `python3 content-ops/scripts/wp_import.py <dir>` を実行(下書き入稿)。予約公開の指示があるときのみ `--publish-at` を使う。
4. **台帳更新**: `keywords.md` の該当行を「WP下書き」にし、WP Post ID と更新日を記入。コミットしてpushする。
5. **Slack通知**: #kaigonoki-claude に以下の形式で通知する。

```
✅ 介護のキ 記事入稿完了

タイトル: <タイトル>
KW: <対策KW>
文字数: 約<N>字(H2×<n>、H3×<m>)
WP Post ID: <ID>(下書き)
アイキャッチ: <Media ID or 未添付>
インフォグラフィック: <Media ID or 未添付>
プレビュー: <URL>
```

## 注意

- 環境変数(`WP_BASE_URL` / `WP_USERNAME` / `WP_APP_PASSWORD`)が未設定なら入稿を試みず、その旨をSlackとチャットで報告して終了する
- 自動での「公開」はしない。公開判断は人間(下書き or 明示された予約公開のみ)
