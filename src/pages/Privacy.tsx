import { companyInfo } from '../config/company';

const Privacy = () => {
    const sections = [
        { title: '第1条（個人情報の取得）', body: '当社は、適法かつ公正な手段によって、個人情報を取得いたします。お客様から頂戴する情報には、氏名、住所、電話番号、メールアドレス、ご来店履歴、お悩みや身体に関する情報などが含まれます。' },
        { title: '第2条（個人情報の利用目的）', body: '当社は、取得した個人情報を以下の目的で利用いたします。\n1. エステティックサロンにおける施術・サービスの提供と、それに関連する業務\n2. ご予約の確認、お問い合わせへの対応\n3. 新商品・新サービス、キャンペーン、イベント等のご案内（DM、メール、LINE等）\n4. サービス向上のためのアンケート、マーケティング調査\n5. コンサルティング講座・オンラインコンテンツの提供および連絡' },
        { title: '第3条（個人情報の第三者提供）', body: '当社は、法令に定める場合を除き、個人情報を事前に本人の同意を得ることなく第三者に提供いたしません。' },
        { title: '第4条（個人情報の安全管理）', body: '当社は、個人情報の正確性を保ち、これを安全に管理いたします。個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、厳重なセキュリティ対策を実施します。' },
        { title: '第5条（個人情報の開示・訂正など）', body: 'お客様がご自身の個人情報の開示、訂正、利用停止、消去などを希望される場合には、当社所定の手続きに基づき速やかに対応いたします。' },
        { title: 'お問い合わせ窓口', body: `本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。\n\n${companyInfo.name}\n${companyInfo.address.full}\nTEL: ${companyInfo.phone}` },
    ];

    return (
        <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl bg-cream-50 min-h-screen">
            <h1 className="text-3xl font-serif text-charcoal-800 mb-12 text-center tracking-widest">プライバシーポリシー</h1>
            <div className="bg-white p-8 md:p-12 rounded-sm border border-gold-200 space-y-8 text-charcoal-700 font-light leading-relaxed">
                <p>{companyInfo.name}（以下、「当社」といいます。）は、お客様の個人情報の保護を最も重要な責務と認識し、以下の通りプライバシーポリシーを定めます。</p>
                {sections.map((s, i) => (
                    <section key={i}>
                        <h2 className="text-xl font-serif text-gold-700 mb-4 tracking-widest border-l-4 border-gold-500 pl-4">{s.title}</h2>
                        <p className="whitespace-pre-line">{s.body}</p>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Privacy;
