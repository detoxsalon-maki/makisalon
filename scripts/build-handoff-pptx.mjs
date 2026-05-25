/**
 * マキサロン LP 共有運用マニュアル PowerPoint 生成スクリプト
 * ─────────────────────────────────────────────────
 * 使い方:
 *   cd maki-luxury-lp
 *   node scripts/build-handoff-pptx.mjs
 *   （初回 or pptxgenjs が未インストールの場合は npm install してから）
 *
 * 出力先: handoff/maki-onboarding/handoff_manual.pptx
 *
 * 設計方針:
 * - mdファイル群（README, 01〜05）の要点をスライド化
 * - 文字中心・装飾は最小限（口頭説明の補助ツールとして）
 * - 16:9ワイドスクリーン
 */

import pptxgen from 'pptxgenjs';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputDir = path.join(projectRoot, 'handoff', 'maki-onboarding');
const outputPath = path.join(outputDir, 'handoff_manual.pptx');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const C = {
  primary: '0A1F44',
  accent: 'C9A961',
  bg: 'FAF7F0',
  text: '1A1A1A',
  muted: '666666',
  ok: '2E7D32',
  warn: 'C62828',
};

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.title = 'マキサロン LP 共有運用マニュアル';
pptx.author = 'ハリー';
pptx.company = '';
pptx.subject = 'GitHub + Vercel 引渡しマニュアル';

function addTitleSlide() {
  const s = pptx.addSlide();
  s.background = { color: C.primary };
  s.addText('マキサロン LP\n共有運用マニュアル', {
    x: 0.7, y: 1.8, w: 11.6, h: 2.6,
    fontFace: 'Yu Gothic UI', fontSize: 54, bold: true,
    color: 'FFFFFF', align: 'left', valign: 'middle',
  });
  s.addText('GitHub + Vercel 引渡し / 受取り / 日々の更新', {
    x: 0.7, y: 4.4, w: 11.6, h: 0.7,
    fontFace: 'Yu Gothic UI', fontSize: 22,
    color: C.accent, align: 'left',
  });
  s.addText('対象LP: makisalon.vercel.app / makisalon.vercel.app/academy', {
    x: 0.7, y: 5.6, w: 11.6, h: 0.5,
    fontFace: 'Yu Gothic UI', fontSize: 14,
    color: 'CCCCCC', align: 'left',
  });
  s.addText('2026-05-26 / ハリー → マキ', {
    x: 0.7, y: 6.4, w: 11.6, h: 0.5,
    fontFace: 'Yu Gothic UI', fontSize: 14,
    color: 'CCCCCC', align: 'left',
  });
}

function addSectionTitle(label, title, subtitle) {
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  s.addText(label, {
    x: 0.7, y: 0.5, w: 11.6, h: 0.4,
    fontFace: 'Yu Gothic UI', fontSize: 12, bold: true,
    color: C.accent, charSpacing: 8,
  });
  s.addText(title, {
    x: 0.7, y: 1.0, w: 11.6, h: 1.5,
    fontFace: 'Yu Gothic UI', fontSize: 36, bold: true,
    color: C.primary, valign: 'middle',
  });
  if (subtitle) {
    s.addText(subtitle, {
      x: 0.7, y: 2.7, w: 11.6, h: 0.8,
      fontFace: 'Yu Gothic UI', fontSize: 16,
      color: C.muted,
    });
  }
  return s;
}

function addOverview() {
  const s = addSectionTitle('OVERVIEW', '全体像：2人共有体制', 'GitHub 経由で共有 / Vercel は片側自動デプロイ');
  const diagram = [
    '          GitHub（無料・共有）',
    '       harry-n2/makisalon',
    '              ↕',
    '   ┌──────┴──────┐',
    '   │              │',
    ' ハリー         マキ',
    '   │              │',
    '   └──────┬──────┘',
    '          ↓ git push → 自動デプロイ',
    '   Vercel Hobby（ハリー側）',
    '          ↓',
    '   https://makisalon.vercel.app/',
  ].join('\n');
  s.addText(diagram, {
    x: 0.7, y: 3.6, w: 11.6, h: 3.5,
    fontFace: 'Consolas', fontSize: 16,
    color: C.text, align: 'left',
  });
}

function addRoleSplit() {
  const s = addSectionTitle('ROLES', '役割分担', '誰が何をできて、何をできないか');
  const rows = [
    [{ text: '項目', options: { bold: true, fill: C.primary, color: 'FFFFFF' } },
     { text: 'ハリー', options: { bold: true, fill: C.primary, color: 'FFFFFF' } },
     { text: 'マキ', options: { bold: true, fill: C.primary, color: 'FFFFFF' } }],
    ['GitHubのコード編集', '✅', '✅'],
    ['PR作成・レビュー', '✅', '✅(レビュー受ける側)'],
    ['main マージ', '✅', '✅(または依頼)'],
    ['Vercel ダッシュボード', '✅', '❌ → ハリーに依頼'],
    ['本番ドメイン設定変更', '✅', '❌'],
    ['緊急時 Rollback', '✅', '❌ → ハリーに依頼'],
    ['ローカルプレビュー(npm)', '✅', '任意(中級者向け)'],
  ];
  s.addTable(rows, {
    x: 0.7, y: 3.6, w: 11.6, h: 3.5,
    fontFace: 'Yu Gothic UI', fontSize: 14,
    border: { type: 'solid', pt: 1, color: 'CCCCCC' },
    rowH: 0.4,
  });
}

function addMakiReceiveSteps() {
  const s = addSectionTitle('FOR MAKI', 'マキ側 受け取り5ステップ', '所要時間 30〜60分・コマンド不要');
  const steps = [
    '1. GitHubアカウント作成 (5分)\n   https://github.com/signup',
    '2. ハリーからの招待を Accept (2分)\n   メール内の View invitation → Accept',
    '3. GitHub Desktop インストール (10分)\n   https://desktop.github.com/',
    '4. リポジトリを Clone (5分)\n   harry-n2/makisalon を選んで Clone',
    '5. VS Code インストール&日本語化 (10分)\n   https://code.visualstudio.com/',
  ];
  steps.forEach((txt, i) => {
    s.addText(txt, {
      x: 0.7, y: 3.6 + i * 0.65, w: 11.6, h: 0.6,
      fontFace: 'Yu Gothic UI', fontSize: 15,
      color: C.text,
    });
  });
}

function addDailyFlow() {
  const s = addSectionTitle('DAILY FLOW', '日々の更新フロー(マキ側)', '毎回この8ステップで完結');
  const flow = [
    '1. main を pull (最新化)',
    '2. 新しいブランチを作る (例: fix/header-text)',
    '3. VS Code でファイルを編集',
    '4. GitHub Desktop で Commit',
    '5. Push origin',
    '6. ブラウザで PR (Pull Request) 作成 → Reviewers: harry-n2',
    '7. Vercel Preview URL で確認 (PR画面に自動表示)',
    '8. ハリー承認 → main マージ → 本番自動反映',
  ];
  flow.forEach((txt, i) => {
    s.addText(txt, {
      x: 0.7, y: 3.6 + i * 0.42, w: 11.6, h: 0.4,
      fontFace: 'Yu Gothic UI', fontSize: 15,
      color: C.text,
    });
  });
}

function addEmergency() {
  const s = addSectionTitle('EMERGENCY', '緊急時の対処', '症状別フローチャート');
  const cases = [
    { sym: '🆘 本番サイトが壊れた', act: 'ハリーに連絡 → Vercel Rollback で1分復旧' },
    { sym: '🆘 ローカル変更で詰まった', act: 'GitHub Desktop: Discard changes でファイル単位 or 一括取消' },
    { sym: '🆘 環境が完全におかしくなった', act: 'GitHub Desktop から Remove → 再 Clone (Step 4)' },
    { sym: '🆘 コンフリクト発生', act: 'GitHub Desktop の Update from main → VS Code で解決' },
    { sym: '🆘 Push が rejected', act: '正常動作: main 直 push禁止 → 新ブランチで作業' },
  ];
  cases.forEach((c, i) => {
    s.addText(c.sym, {
      x: 0.7, y: 3.5 + i * 0.7, w: 4.5, h: 0.6,
      fontFace: 'Yu Gothic UI', fontSize: 15, bold: true, color: C.warn,
    });
    s.addText(c.act, {
      x: 5.3, y: 3.5 + i * 0.7, w: 7.0, h: 0.6,
      fontFace: 'Yu Gothic UI', fontSize: 14, color: C.text,
    });
  });
}

function addFutureTransfer() {
  const s = addSectionTitle('FUTURE', '将来の完全移管 (5ステップ)', 'マキが運用に慣れたら段階移行');
  const steps = [
    '1. GitHub repo を harry-n2 → <MAKI_USERNAME> に Transfer ownership',
    '2. マキのVercelアカウントで新規プロジェクトとして接続',
    '3. マキが取得した独自ドメインを Vercel に設定 (例: www.makisalon.jp)',
    '4. DNS設定で Vercel に向ける (CNAME / A record)',
    '5. 旧 makisalon.vercel.app を削除 or リダイレクト設定',
  ];
  steps.forEach((txt, i) => {
    s.addText(txt, {
      x: 0.7, y: 3.6 + i * 0.55, w: 11.6, h: 0.5,
      fontFace: 'Yu Gothic UI', fontSize: 15,
      color: C.text,
    });
  });
  s.addText('実施時期の目安: マキが日々の更新フローに3ヶ月以上慣れてから', {
    x: 0.7, y: 6.6, w: 11.6, h: 0.5,
    fontFace: 'Yu Gothic UI', fontSize: 13, italic: true, color: C.muted,
  });
}

function addContactClosing() {
  const s = pptx.addSlide();
  s.background = { color: C.primary };
  s.addText('困ったら、まず連絡。', {
    x: 0.7, y: 2.0, w: 11.6, h: 1.2,
    fontFace: 'Yu Gothic UI', fontSize: 44, bold: true,
    color: 'FFFFFF', align: 'center',
  });
  s.addText('スクショ + 何をしたか + 焦り度', {
    x: 0.7, y: 3.4, w: 11.6, h: 0.8,
    fontFace: 'Yu Gothic UI', fontSize: 22,
    color: C.accent, align: 'center',
  });
  s.addText('30分悩むより、一言聞いたほうが10倍速い。', {
    x: 0.7, y: 4.4, w: 11.6, h: 0.6,
    fontFace: 'Yu Gothic UI', fontSize: 16,
    color: 'CCCCCC', align: 'center',
  });
  s.addText('詳細は handoff/maki-onboarding/ の md ファイル群を参照', {
    x: 0.7, y: 6.4, w: 11.6, h: 0.5,
    fontFace: 'Yu Gothic UI', fontSize: 12,
    color: '888888', align: 'center',
  });
}

addTitleSlide();
addOverview();
addRoleSplit();
addMakiReceiveSteps();
addDailyFlow();
addEmergency();
addFutureTransfer();
addContactClosing();

await pptx.writeFile({ fileName: outputPath });
console.log(`✅ Generated: ${outputPath}`);
