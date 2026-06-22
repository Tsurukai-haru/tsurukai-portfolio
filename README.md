# Tsurukai Haru — Engineering Portfolio

月の溶岩洞窟探査を目標とした小型2輪ローバーの研究と、関連スキル・実績をまとめた個人ポートフォリオサイトです。
Next.js（静的書き出し）+ TypeScript + Tailwind CSS で構築し、GitHub Pages で公開する想定で作られています。

「青写室（ブループリント）」をモチーフにしたデザインで、ナビゲーションは図面の表題欄（タイトルブロック）、
スキル一覧は部品表（BOM）、各セクションは図面のシート番号のように構成しています。

---

## 1. ローカルで動かす

```bash
npm install
npm run dev
```

`http://localhost:3000` を開くと確認できます。右上の「JA / EN」ボタンで言語を切り替えられます。

---

## 2. 内容を編集する

すべての文言（日本語・英語の両方）は `src/data/content.ts` の1ファイルに集約しています。
コンポーネント側（`src/components/*.tsx`）は基本的に触らず、まずこのファイルの該当箇所を編集してください。

| セクション | 編集対象 |
|---|---|
| ヒーロー（トップ） | `hero` |
| About Me | `about` |
| Skills | `skills` |
| Research | `research` |
| Featured Projects | `projects` |
| Achievements | `achievements` |
| Experience & Education | `experience` |
| Contact | `contact`（**email・github は必ず差し替えてください**） |

---

## 3. 公開前チェックリスト（要確認・要修正）

以下は，今回の対話で確認できた事実をもとに作成しましたが，**確信度が高くない項目**や，
**意図的に伏せた／一般化した項目**があります．公開前に必ず確認・修正してください．

| 項目 | 現状 | 確認・対応してほしいこと |
|---|---|---|
| 連絡先メール | `contact.email` に `your.email@example.com`（仮値） | 実際に企業からの連絡を受けたいメールアドレスに差し替え |
| GitHub / LinkedIn リンク | `contact.github` に仮のURL | 実際のURLに差し替え，不要なら空文字 `""` に |
| 連携機関の数 | 「複数の研究機関」と一般化（具体的な機関数は記載していません） | 過去のやり取りで「6機関」「7機関」と異なる数字が出ており，確信度が低いため，正確な数字が分かれば `research.context` / `achievements` に追記可能 |
| 指導教員名 | サイト本文には記載していません | 中央大学の公式サイトでは「國井康晴」教授と確認できました（確信度：高，公式サイト記載）。一方，以前の記憶には「國井康博」という記載があり，表記が異なっています。研究室名・教員名を本文に追加する場合は，正しい表記をご確認ください |
| 内部コードネーム「RED」 | 一切使用していません | 既存の方針（外部ES・面接で使用不可）に合わせ，本文・README含め記載していません |
| ハンドボールチームでの立場 | 「創設初期メンバーの一人」と記載（リーダーではない） | 事実と異なる場合は `experience` を修正 |
| 各活動の開始時期（年） | 不明な部分は「在学中」等の相対表現にとどめています | 正確な年月が分かる場合は `experience` の `period` に反映可能 |
| 就職活動の選考状況 | 一切記載していません（意図的） | ポートフォリオは閲覧する企業を限定できないため，他社の選考状況は載せていません |

---

## 4. GitHub での管理・公開方法

この環境にはあなたのGitHubアカウントへの認証情報がないため，リポジトリへの push はお手元で行ってください．
このプロジェクトはすでに `git init` ＋ 初回コミット済みです．

### 4-1. リポジトリを作成して push する

GitHub 上で新しいリポジトリを作成したのち（README等は追加しない），以下を実行してください．

```bash
cd tsurukai-portfolio
git remote add origin https://github.com/<あなたのユーザー名>/<リポジトリ名>.git
git branch -M main
git push -u origin main
```

### 4-2. GitHub Pages を有効化する

1. リポジトリの **Settings → Pages** を開く
2. **Source** を `GitHub Actions` に設定する

push すると `.github/workflows/deploy.yml` が自動的にビルド・公開します．
数分後，`https://<あなたのユーザー名>.github.io/<リポジトリ名>/` で公開されます．

> **補足（basePath について）**：リポジトリ名を `<あなたのユーザー名>.github.io` にする場合（GitHubアカウントのトップページとして公開する場合）は，
> URLが `https://<あなたのユーザー名>.github.io/` となり，サブパスが不要なため `next.config.ts` が自動でそれを検出し，
> 余分な basePath を付与しません．通常のリポジトリ名（例：`portfolio`）の場合は，自動的に `/portfolio` が付与されます．

### 4-3. ローカルでビルドだけ確認したい場合

```bash
npm run build
npx serve out
```

---

## 5. 技術スタック

- Next.js 16（App Router, 静的書き出し `output: "export"`）
- TypeScript
- Tailwind CSS v4
- 外部UIライブラリ不使用（フォントは Google Fonts を `<link>` 経由で読み込み）
- 多言語対応：自作の軽量Contextによる JA/EN 切り替え（ページ遷移なし，`localStorage`に保存）

---

## 6. ディレクトリ構成（主要部分）

```
src/
├─ app/
│  ├─ layout.tsx     # 全体レイアウト・フォント読み込み
│  ├─ page.tsx        # 全セクションを並べるトップページ
│  └─ globals.css     # デザイントークン（色・フォント・グリッド背景など）
├─ components/        # セクションごとのUIコンポーネント
├─ data/
│  └─ content.ts      # ★ 文言はすべてここに集約（JA/EN）
└─ lib/
   └─ language-context.tsx  # 言語切り替えの状態管理
```
