/**
 * 会社情報データ（共通）
 * ────────────────────────────────────────
 * 【編集ガイド】
 * - 住所・電話番号・営業時間などを変更したい場合、このファイルを編集してください。
 * - Company, Law, Privacy, Footer で共通参照されます。
 */

export const companyInfo = {
  name: '株式会社 MAKI',
  representative: '小倉 真樹',
  address: {
    postalCode: '〒433-8122',
    prefecture: '静岡県',
    city: '浜松市中央区',
    street: '上島5-4-48',
    building: '美容室SOLO 2F',
    full: '静岡県浜松市中央区上島5-4-48 美容室SOLO 2F',
  },
  phone: '053-472-3683',
  directPhone: '08041820727',
  phoneDisplay: '053-472-3683\n直通：08041820727',
  phoneNote: '※施術中は電話に出られません。留守番電話に入れていただけたらおりかえします。',
  businessHours: '9:30〜16:00',
  closedDay: '日曜',
  parking: 'あり・3台',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=静岡県浜松市中央区上島5-4-48+美容室SOLO&hl=ja&output=embed',
  instagram: {
    url: 'https://www.instagram.com/aisare_salon?igsh=cDlhdTVmdWFicjN0',
    handle: '@aisare_salon',
    qrImage: '/qr/instagram QR.png',
  },
} as const;
