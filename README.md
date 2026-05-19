# デトックスサロン MAKI — 公式LP & 集客講座ページ

静岡県浜松市「デトックスサロン MAKI」の公式ランディングページです。

## 🌐 公開URL

| 環境 | URL |
|------|-----|
| **本番 (Vercel)** | https://makisalon.vercel.app |
| **ミラー (GitHub Pages)** | https://harry-n2.github.io/makisalon/ |

## 📄 ページ構成

| パス | 内容 |
|------|------|
| `/` | サロンTOP（Hero・About・Service・診断・Instagram） |
| `/academy` | 一人サロン集客講座LP |
| `/law` | 特定商取引法に基づく表記 |
| `/privacy` | プライバシーポリシー |
| `/contact` | お問い合わせフォーム |

## 🛠 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite 6
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **ホスティング**: Vercel（メイン）/ GitHub Pages（ミラー）

## 🚀 セットアップ手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/harry-n2/makisalon.git
cd makisalon
```

### 2. 依存パッケージのインストール

```bash
npm install
```

### 3. ローカル開発サーバー起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

### 4. 本番ビルド

```bash
npm run build
```

`dist/` フォルダに本番用ファイルが出力されます。

## 📁 ディレクトリ構成

```
makisalon/
├── public/              # 静的アセット（画像・QRコード・マンガ）
│   ├── images/          # ヘッダー画像・サロン写真
│   ├── logos/           # サロンロゴ
│   ├── manga/           # マンガストーリー画像
│   └── qr/              # LINE・Instagram QRコード
├── src/
│   ├── components/      # UIコンポーネント
│   │   ├── common/      # 共通（CTA・マンガビューア・QR等）
│   │   ├── layout/      # ヘッダー・フッター
│   │   └── sections/    # 各セクション（Hero・About等）
│   ├── config/          # コンテンツデータ（テキスト・画像パス）
│   ├── pages/           # ページコンポーネント
│   ├── styles/          # グローバルCSS
│   └── utils/           # ユーティリティ関数
├── vercel.json          # Vercel SPA設定
├── vite.config.ts       # Vite設定
└── index.html           # エントリーポイント
```

## 🔧 Vercelでのデプロイ方法

1. [Vercel](https://vercel.com) にサインアップ/ログイン
2. 「New Project」→ GitHubリポジトリを連携
3. このリポジトリ (`makisalon`) を選択
4. 設定はそのままで「Deploy」をクリック
5. カスタムドメインを設定する場合は Settings → Domains から追加

> **自動デプロイ**: `main` ブランチにプッシュするたびに自動で再デプロイされます。

## 📝 コンテンツの編集

テキストや画像パスは `src/config/` 内のファイルで一括管理されています。

| ファイル | 内容 |
|----------|------|
| `salon-content.ts` | サロンTOPのテキスト・画像 |
| `academy-content.ts` | 集客講座ページのテキスト |
| `company.ts` | 会社情報・住所・電話番号 |
| `manga-salon.ts` | サロンマンガのパネルデータ |
| `manga-academy.ts` | 講座マンガのパネルデータ |

## ⚠️ 注意事項

- LINE URLやInstagram URLは `src/config/salon-content.ts` と `src/config/academy-content.ts` に記載されています
- QRコード画像は `public/qr/` フォルダに格納されています
- 画像を差し替える場合は同じファイル名で上書きしてください

## 📞 技術サポート

開発に関するご質問は開発担当者にお問い合わせください。
