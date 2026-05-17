/**
 * ③ 講座用マンガ コマ定義（20ページ以上）
 */
import type { MangaPanel } from './manga-salon';

export const academyMangaPanels: MangaPanel[] = [
  { id: 1, page: 1, scene: '課題', character: '20代オーナー', dialogue: '売上が上がらない…', imagePath: '/manga/academy/page-01.webp', altText: '売上に悩む20代サロンオーナー' },
  { id: 2, page: 2, scene: '課題', character: '20代オーナー', dialogue: '単価アップが怖い…', imagePath: '/manga/academy/page-02.webp', altText: '単価アップへの恐怖' },
  { id: 3, page: 3, scene: '課題', character: '20代オーナー', dialogue: 'リピートもつかないし、どうすれば…', imagePath: '/manga/academy/page-03.webp', altText: 'リピート率に悩む' },
  { id: 4, page: 4, scene: '課題', character: 'ナレーション', dialogue: 'そんな時、一人の女性と出会った——', imagePath: '/manga/academy/page-04.webp', altText: '運命の出会い' },
  { id: 5, page: 5, scene: '介入', character: 'マキ', dialogue: '3万円受け取るのに罪悪感持ってたら、お客様に失礼だろ！', imagePath: '/manga/academy/page-05.webp', altText: 'マキが男気全開で一喝' },
  { id: 6, page: 6, scene: '介入', character: 'マキ', dialogue: 'あなたの技術には、その価値がある', imagePath: '/manga/academy/page-06.webp', altText: 'マキが真剣に語る' },
  { id: 7, page: 7, scene: '介入', character: '20代オーナー', dialogue: 'この人…本気で言ってる', imagePath: '/manga/academy/page-07.webp', altText: 'オーナーが心を動かされる' },
  { id: 8, page: 8, scene: '介入', character: 'マキ', dialogue: '私は23歳で月商270万円を達成した', imagePath: '/manga/academy/page-08.webp', altText: 'マキの実績紹介' },
  { id: 9, page: 9, scene: '実績提示', character: 'ナレーション', dialogue: 'タレント・モデル専属20年の実績——', imagePath: '/manga/academy/page-09.webp', altText: '20年の実績を視覚化' },
  { id: 10, page: 10, scene: '実績提示', character: 'マキ', dialogue: '顔もカラダも足も、全部できるようになった', imagePath: '/manga/academy/page-10.webp', altText: '全方位施術の実績' },
  { id: 11, page: 11, scene: '実績提示', character: 'マキ', dialogue: '大事なのは「見せ方」と「仕組み」', imagePath: '/manga/academy/page-11.webp', altText: 'ブランディングの重要性' },
  { id: 12, page: 12, scene: '実績提示', character: 'ナレーション', dialogue: '高級感のあるWebサイト×診断ツールの力', imagePath: '/manga/academy/page-12.webp', altText: 'デジタルファネルの図解' },
  { id: 13, page: 13, scene: '解決策', character: 'マキ', dialogue: '最新のAIエージェントで集客を自動化できる', imagePath: '/manga/academy/page-13.webp', altText: 'AI自動集客の解説' },
  { id: 14, page: 14, scene: '解決策', character: 'マキ', dialogue: '診断ツール→LINE登録→自動教育→成約', imagePath: '/manga/academy/page-14.webp', altText: 'ファネル全体像' },
  { id: 15, page: 15, scene: '解決策', character: '20代オーナー', dialogue: 'すごい…こんな仕組みがあるんだ', imagePath: '/manga/academy/page-15.webp', altText: 'オーナーが仕組みに感動' },
  { id: 16, page: 16, scene: '解決策', character: 'マキ', dialogue: '3ヶ月で全部教える。一緒にやろう', imagePath: '/manga/academy/page-16.webp', altText: 'マキが手を差し伸べる' },
  { id: 17, page: 17, scene: '解決策', character: '20代オーナー', dialogue: 'これなら私にもできる！', imagePath: '/manga/academy/page-17.webp', altText: 'オーナーが希望を持つ' },
  { id: 18, page: 18, scene: '結び', character: 'ナレーション', dialogue: '講座の3ヶ月で、サロンは生まれ変わった——', imagePath: '/manga/academy/page-18.webp', altText: 'サロンの変革ビフォーアフター' },
  { id: 19, page: 19, scene: '結び', character: '20代オーナー', dialogue: '月商100万円、達成しました！', imagePath: '/manga/academy/page-19.webp', altText: '成功を喜ぶオーナー' },
  { id: 20, page: 20, scene: '結び', character: 'CTA', dialogue: 'あなたも、まずは無料個別相談から始めよう', imagePath: '/manga/academy/page-20.webp', altText: 'コンサルLINE誘導' },
];
