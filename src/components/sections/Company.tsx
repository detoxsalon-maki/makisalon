import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { companyInfo } from '../../config/company';

const Company = () => {
    const rows: Array<{ label: string; value: string; highlight?: boolean; note?: string }> = [
        { label: '運営会社', value: companyInfo.name },
        { label: '代表者', value: companyInfo.representative },
        { label: '所在地', value: `${companyInfo.address.postalCode}\n${companyInfo.address.full}` },
        { label: '電話番号\n直通', value: `${companyInfo.phone}\n${companyInfo.directPhone}`, highlight: true, note: companyInfo.phoneNote },
        { label: '営業時間', value: companyInfo.businessHours },
        { label: '定休日', value: `${companyInfo.closedDay}（駐車場：${companyInfo.parking}）` },
    ];

    return (
        <section id="company" className="py-24 bg-cream-50 relative">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/2"
                    >
                        <SectionHeading label="Company & Access" heading="店舗情報" align="left" />

                        <div className="space-y-6 text-charcoal-700 font-light tracking-wider text-sm md:text-base">
                            {rows.map((row, i) => (
                                <div key={i} className={`grid grid-cols-12 ${i < rows.length - 1 ? 'border-b border-gold-200' : ''} pb-4`}>
                                    <div className="col-span-4 text-gold-700 font-medium whitespace-pre-line leading-relaxed">{row.label}</div>
                                    <div className={`col-span-8 whitespace-pre-line ${row.highlight ? 'text-charcoal-800 text-lg' : ''}`}>
                                        {row.value}
                                        {row.note && (
                                            <p className="text-sm text-charcoal-500 mt-2 leading-relaxed font-normal">{row.note}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 min-h-[400px]"
                    >
                        <div className="w-full h-full rounded-sm overflow-hidden border border-gold-200 shadow-2xl relative">
                            <div className="absolute inset-0 bg-gold-50/10 mix-blend-overlay pointer-events-none z-10"></div>
                            <iframe
                                src={companyInfo.googleMapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px', filter: 'grayscale(20%) sepia(10%)' }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 z-0"
                                title="MAKI サロンの地図"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Company;
