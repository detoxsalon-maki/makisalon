/**
 * ② 店舗用マンガ コマ定義
 */
export interface MangaPanel {
  id: number;
  page: number;
  scene: string;
  character: string;
  dialogue: string;
  imagePath: string;
  altText: string;
}

export const salonMangaPanels: MangaPanel[] = [
  { id: 1, page: 1, scene: '導入', character: '顧客', dialogue: '最近、鏡を見るのがツラい…', imagePath: '/manga/salon/page-01.webp', altText: '40代女性が鏡の前で悩む' },
  { id: 2, page: 2, scene: '導入', character: '顧客', dialogue: '安売りサロンじゃ変わらない…', imagePath: '/manga/salon/page-02.webp', altText: '安売りサロンに不満を感じる女性' },
  { id: 3, page: 3, scene: '導入', character: 'ナレーション', dialogue: 'そんなある日、あるサロンに出会った——', imagePath: '/manga/salon/page-03.webp', altText: 'サロンMAKIの外観' },
  { id: 4, page: 4, scene: '出会い', character: 'マキ', dialogue: 'ぶっちゃけ、いらないもの外に出さないと何やってもムダだよ！', imagePath: '/manga/salon/page-04.webp', altText: 'マキが笑いながらアドバイス' },
  { id: 5, page: 5, scene: '出会い', character: 'マキ', dialogue: '私はね、20年間ずっと「排毒」にこだわってきたの', imagePath: '/manga/salon/page-05.webp', altText: 'マキが施術説明' },
  { id: 6, page: 6, scene: '出会い', character: '顧客', dialogue: 'この人…信頼できるかも', imagePath: '/manga/salon/page-06.webp', altText: '顧客が期待を抱く' },
  { id: 7, page: 7, scene: '転換', character: 'ナレーション', dialogue: 'オールハンド×最新機器の施術が始まった', imagePath: '/manga/salon/page-07.webp', altText: 'オールハンド施術シーン' },
  { id: 8, page: 8, scene: '転換', character: '顧客', dialogue: 'えっ、一回でこれ！？', imagePath: '/manga/salon/page-08.webp', altText: 'ビフォーアフターに驚く顧客' },
  { id: 9, page: 9, scene: '転換', character: 'マキ', dialogue: 'タレントさんも同じ施術を20年受けてるよ', imagePath: '/manga/salon/page-09.webp', altText: 'マキが実績を語る' },
  { id: 10, page: 10, scene: '確信', character: '顧客', dialogue: '顔もカラダも足も全部ケアしてくれる！', imagePath: '/manga/salon/page-10.webp', altText: '全方位施術に感動' },
  { id: 11, page: 11, scene: '確信', character: '顧客', dialogue: 'こんなに変われるなんて…！', imagePath: '/manga/salon/page-11.webp', altText: '輝く笑顔の顧客' },
  { id: 12, page: 12, scene: '結び', character: 'マキ', dialogue: 'コツコツ、自分らしく綺麗になろ！', imagePath: '/manga/salon/page-12.webp', altText: 'マキのメッセージ' },
  { id: 13, page: 13, scene: '結び', character: 'CTA', dialogue: '公式LINE登録で無料診断を受けよう！', imagePath: '/manga/salon/page-13.webp', altText: 'LINE登録誘導' },
];
