import { companyInfo } from '../config/company';

const Law = () => {
    const rows = [
        { label: '販売事業者（屋号）', value: companyInfo.name },
        { label: '運営統括責任者', value: `代表 ${companyInfo.representative}` },
        { label: '所在地', value: `${companyInfo.address.postalCode}\n${companyInfo.address.full}` },
        { label: '電話番号', value: companyInfo.phone },
        { label: '販売価格帯', value: '各サービス・商品ごとにウェブサイト、またはカウンセリング時にご案内いたします。' },
        { label: '商品代金以外の料金', value: '銀行振込の場合の振込手数料、または消費税はご購入者様のご負担となります。' },
        { label: 'お支払い方法', value: 'クレジットカード決済、銀行振込、現金決済' },
        { label: 'お支払い時期', value: 'サービス提供前（前払い）、またはご予約時の事前決済' },
        { label: 'キャンセル・返金について', value: 'サービスの性質上、施術提供後の返金はお受けできかねます。\nご予約のキャンセルについては、予約日の前日までにご連絡ください。\n情報商材・講座等のデジタルコンテンツに関しても、提供後のキャンセル・返金は原則としてお受けいたしません。' },
    ];

    return (
        <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl bg-cream-50 min-h-screen">
            <h1 className="text-3xl font-serif text-charcoal-800 mb-12 text-center tracking-widest">特定商取引法に基づく表記</h1>
            <div className="bg-white p-8 md:p-12 rounded-sm border border-gold-200">
                <table className="w-full text-left border-collapse">
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i} className={i < rows.length - 1 ? 'border-b border-gold-100' : ''}>
                                <th className="py-6 w-1/3 font-medium text-gold-700 align-top">{row.label}</th>
                                <td className="py-6 text-charcoal-700 font-light whitespace-pre-line">{row.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Law;
