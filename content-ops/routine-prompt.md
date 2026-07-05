# Routine設定メモ

WordPress認証情報の設定後、以下のRoutineを登録する(登録はClaudeに依頼すればよい)。

## Routine 1: 週次の記事制作(フェーズ1)

- スケジュール例: 毎週 月・木 09:00 JST (`0 0 * * 1,4` UTC)
- モード: 新規セッション起動(create_new_session_on_fire)
- プロンプト:

```
kaigonoki リポジトリの介護のキ記事制作を1本実行してください。

1. ブランチ claude/care-content-automation-8hwmux を最新化して作業する
2. /kaigo-write を実行して記事パッケージを生成する
3. /kaigo-wp-import を実行してWordPressに下書き入稿し、Slack #kaigonoki-claude に通知する
4. keywords.md の「執筆待ち」が残り2件以下になったら、「候補」から検索意図を確認のうえ繰り上げ、
   さらに新規候補KWを3件リサーチして追加する
5. 途中で失敗した場合は、失敗内容をSlackに報告して終了する(リトライで暴走しない)
```

## Routine 2: 週次の分析→戦略(フェーズ3、Search Console接続後)

- スケジュール例: 毎週 月曜 08:00 JST
- 内容: Search Console から直近28日の表示回数・CTR・平均順位を取得し、
  伸びているKWクラスタ/順位10〜20位のリライト候補を特定、
  keywords.md に新規候補KWとリライトタスクを追記して Slack にレポートする
- 前提: GSC APIのサービスアカウント設定(無料)が必要
