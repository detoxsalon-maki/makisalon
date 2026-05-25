/**
 * ② 店舗LP用コンテンツデータ
 * ────────────────────────────────────────
 * 【編集ガイド】
 * - キャッチコピーやメニュー説明を変えたい場合、該当のテキストを書き換えてください。
 * - LINE URLやQR画像パスを変えたい場合、該当のURLを書き換えてください。
 * - 保存後、Vercelが自動デプロイします。
 */

export const salonContent = {
  meta: {
    title: 'デトックスサロン MAKI | 浜松市のエステ・デトックスケア',
    description:
      '静岡県浜松市の本格デトックスサロンMAKI。20年以上の実績を持つ代表・小倉真樹によるオールハンド施術で、顔・カラダ・足の全方位からあなたの美と健康を引き出します。',
  },

  hero: {
    catchcopy: '巡りを整え、\nため込まないカラダへ',
    subcopy:
      'ボディもフェイスも、私に合わせて整える\n浜松で17年、延べ10,000人以上が実感した\n東洋学デトックスサロン',
    ctaText: '無料診断へ進む',
    ctaLink: 'https://makisalon.vercel.app/#diagnostic',
    backgroundImage: '/images/hero-main.jpg',
    backgroundImageMobile: '/images/salon-header.jpg',
  },

  booking: {
    url: 'https://tol-app.jp/s/detxsalon-maki',
    ctaText: '24時間予約ページ',
    ctaTextLong: '24時間予約ページへ',
  },

  about: {
    label: 'About MAKI',
    heading: 'いらないものを手放し、\n肌も心も軽くなる。\nMAKIの排毒ケア。',
    paragraphs: [
      '17年かけて見てきたのは、体型だけではありません。冷え、むくみ、疲れ、気持ちの重さまで、女性の不調は身体の巡りに表れます。',
      '横浜・東京での経験、店長としての現場、タレント・モデル施術で磨いた手技。そのすべてを、今は一人ひとりの悩みに寄り添うために使っています。',
      '無理に変えるのではなく、ため込んだものを少しずつ手放す。顔も身体もゆるみ、呼吸まで深くなるような時間を通して、鏡を見る自分をもう一度好きになってほしいと願っています。',
    ],
    highlight:
      '「排毒は、キレイになる前の深呼吸」\n無理なく、心地よく、今のあなたに合わせて整えます。',
    images: {
      main: '/images/about_左_salon.jpg',
      sub: '/images/about_右_salon.jpg',
    },
  },

  services: [
    {
      category: '顔 / FACIAL',
      title: 'フェイシャル・美顔・若返り',
      description:
        'シワ消し・シミ消し・美白・小顔など、年齢に負けない極上の透明感とハリを取り戻す至高のフェイシャルケア。',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    },
    {
      category: 'カラダ / BODY',
      title: 'ボディトリートメント・痩身',
      description:
        '排毒リンパドレナージュやアロママッサージで、不要なものを落とし理想のサイズダウンを実現。ブライダルエステや姿勢矯正・脱毛にも対応。',
      image:
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    },
    {
      category: '足 / FOOT',
      title: 'フットケア・足つぼ',
      description:
        '東洋医術の粋を集めた足つぼ・フットケア。第二の心臓と呼ばれる足裏から全身の巡りを整え、深いリラクゼーションへ導きます。',
      image: '/images/service_foot_salon.jpg',
    },
  ],

  line: {
    url: 'https://lin.ee/hZjjsCT',
    deepLink: 'https://line.me/R/ti/p/@335pckre?ts=01031548&oat_content=url',
    qrImage: '/qr/line-salon.png',
    ctaText: 'LINE登録して結果の続きを見る',
  },

  instagram: {
    url: 'https://www.instagram.com/aisare_salon?igsh=cDlhdTVmdWFicjN0',
    detoxUrl: 'https://www.instagram.com/detxsalon_maki?igsh=MXVqdGdiajY1bjR1MQ%3D%3D&utm_source=qr',
    qrImage: '/qr/instagram QR.png',
    images: ['/images/insta1.png', '/images/insta2.png', '/images/insta3.png'],
  },

  diagnostic: {
    title: 'あなたに最適な極上ケア診断',
    subtitle:
      '3つの質問に答えるだけで、あなたの本来の美しさを引き出す最適なアプローチをご提案します。',
    questions: [
      {
        id: 1,
        text: '現在、最も解消したいお悩みはどれですか？',
        options: [
          '顔のシワ・たるみ・くすみ',
          '肩こり・全身の疲労感',
          'ボディラインの崩れ・ダイエット',
          '足のむくみ・冷え',
        ],
      },
      {
        id: 2,
        text: 'エステやマッサージに行く頻度はどのくらいですか？',
        options: [
          '月に1回以上',
          '2〜3ヶ月に1回',
          '年に数回程度',
          'ほとんど行かない',
        ],
      },
      {
        id: 3,
        text: '施術を選ぶ際、最も重視するポイントは何ですか？',
        options: [
          '即効性と結果',
          'リラクゼーション・癒し',
          'スタッフの技術と信頼感',
          '通いやすさと価格',
        ],
      },
    ],
  },
} as const;
