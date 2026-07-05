# 介護のキ コンテンツ自動運用パイプライン

「介護のキ」(kaigonoki.com) の記事制作を、リサーチ → KW選定 → 構成 → 執筆 → WordPress入稿 → Slack通知 → 分析 → 次戦略、まで自動で回すための仕組み一式。

ローカルPCの `kaigo_no_ki_pkg` で行っていた運用を、Claude Code のクラウド環境(Routine による定期実行)へ移植したもの。

## 全体フロー

```
keywords.md(KWキュー)
   │  Routine が「執筆待ち」の先頭KWを取得
   ▼
/kaigo-write ── リサーチ・構成・執筆・パッケージ生成
   │            content-ops/articles/<slug>/ に出力
   ▼
/kaigo-wp-import ── scripts/wp_import.py で WordPress に下書き入稿
   │                (アイキャッチ・インフォグラフィックのアップロード込み)
   ▼
Slack #kaigonoki-claude へ完了通知
   ▼
人間がプレビュー確認 → 公開(フェーズ2で予約公開を自動化)
```

## ディレクトリ構成

| パス | 内容 |
|---|---|
| `keywords.md` | KWキュー(ステータス管理台帳)。Google Driveの編集シートの後継 |
| `editorial-guidelines.md` | 執筆ルール(文字数・見出し・NGワード・出典・メタ情報) |
| `articles/<slug>/` | 記事パッケージ(本文HTML・メタ情報・画像) |
| `scripts/wp_import.py` | WordPress REST API 入稿スクリプト(Python標準ライブラリのみ) |
| `routine-prompt.md` | 定期実行(Routine)に設定するプロンプトの原本 |

## セットアップ(初回のみ)

1. kaigonoki.com の WordPress 管理画面 → ユーザー → プロフィール → 「アプリケーションパスワード」を発行
2. Claude Code の環境設定に以下の環境変数を登録する(チャットには貼らないこと):
   - `WP_BASE_URL` … 例: `https://kaigonoki.com`
   - `WP_USERNAME` … WordPressのユーザー名
   - `WP_APP_PASSWORD` … 発行したアプリケーションパスワード
3. 接続テスト: `python3 content-ops/scripts/wp_import.py --check`

## 記事パッケージの形式

`articles/<slug>/` に以下を置く:

- `meta.json` … タイトル・スラッグ・メタディスクリプション・カテゴリ等
- `article.html` … 本文(WordPressブロックに変換されるHTML)
- `eyecatch.png` … アイキャッチ(あれば featured image に設定)
- `infographic.png` … インフォグラフィック(あれば本文中の `{{INFOGRAPHIC_URL}}` を置換)

`_sample/` が形式の見本。`--dry-run` の動作確認にも使える。

## 運用コスト

- 記事生成・入稿: Claudeプランの利用枠内(追加費用なし)
- Routine定期実行: 無料
- WordPress / Search Console / GA4: 既存契約・無料枠のみ
