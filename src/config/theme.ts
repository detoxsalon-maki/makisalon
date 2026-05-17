/**
 * テーマ設定 — カラーパレット・フォント定義
 * ────────────────────────────────────────
 * 【配色根拠】電子書籍表紙デザインから完全抽出
 * - クリーム系ベース: 表紙背景グラデーション
 * - チャコール: 表紙メイン文字色
 * - シャンパンゴールド: 表紙アクセント（括弧・バッジ・装飾線）
 */

export const colors = {
  /** ─── チャコール（テキスト主色） ─── */
  charcoal: {
    50: '#F5F3F2',
    100: '#E0DCDA',
    200: '#C0B8B4',
    300: '#968B85',
    400: '#6B5E56',
    500: '#4A3F38',
    600: '#3A322C',
    700: '#2C2420',   // メインテキスト
    800: '#201A17',
    900: '#15100E',
  },

  /** ─── シャンパンゴールド（アクセントカラー） ─── */
  gold: {
    50: '#FCF8F1',
    100: '#F5EBDA',
    200: '#EDDCC0',
    300: '#D4B896',
    400: '#C4A265',
    500: '#B8956A',   // メインゴールド
    600: '#A07C4E',
    700: '#8B6B3E',
    800: '#6E5430',
    900: '#4A3820',
  },

  /** ─── ベースカラー ─── */
  base: {
    white: '#FDFCFA',
    cream: '#F5EDE3',
    light: '#F8F3EC',
    dark: '#2C2420',
    black: '#15100E',
  },
} as const;

export const fonts = {
  sans: '"Noto Sans JP", sans-serif',
  serif: '"Noto Serif JP", serif',
  display: '"Cormorant Garamond", "Noto Serif JP", serif',
} as const;

export const cssVarMap = {
  '--color-accent': colors.gold[500],
  '--color-primary': colors.charcoal[700],
  '--color-base-cream': colors.base.cream,
  '--color-base-dark': colors.base.dark,
  '--color-base-black': colors.base.black,
} as const;
