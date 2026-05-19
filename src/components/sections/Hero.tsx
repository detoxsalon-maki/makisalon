import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { salonContent } from '../../config/salon-content';

const Hero = () => {
    const { hero } = salonContent;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* ── 背景: サロン公式画像 + Ken Burns ── */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-charcoal-900/40 mix-blend-multiply z-10"></div>
                <motion.img
                    src={hero.backgroundImage}
                    alt="デトックスサロン MAKI 施術ルーム"
                    animate={{ scale: [1.0, 1.08] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="w-full h-full object-cover object-center md:object-left"
                />
            </div>

            {/* ── 装飾: ゴールド＋アイスブルー グロー ── */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/8 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-ice-300/10 rounded-full blur-[100px]"></div>
            </div>

            {/* ── 中央テキストエリア ── */}
            <div className="relative z-10 w-full max-w-3xl mx-auto px-8 text-center pt-24 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 tracking-wider leading-snug whitespace-pre-line drop-shadow-lg">
                        {hero.catchcopy}
                    </h1>
                    <div className="w-20 h-[2px] bg-gradient-to-r from-ice-300 via-gold-400 to-gold-600 mx-auto mb-8"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white/90 text-sm md:text-base font-light tracking-wider max-w-xl mx-auto leading-loose whitespace-pre-line drop-shadow-md"
                >
                    {hero.subcopy}
                </motion.p>

                {/* ── 信頼バッジ ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-gold-800/90 to-gold-600/90 text-cream-50 px-6 py-3 rounded-full shadow-xl shadow-gold-900/30 backdrop-blur-sm border border-gold-500/20"
                >
                    <Crown size={16} className="text-gold-300" />
                    <span className="text-xs font-serif tracking-[0.15em]">サロン経営20年以上 ｜ 延べ10,000人以上</span>
                </motion.div>

                {/* ── CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-10 flex flex-wrap gap-4 justify-center"
                >
                    <a
                        href={hero.ctaLink}
                        className="inline-flex items-center justify-center px-10 py-4 text-sm font-serif tracking-[0.15em] bg-gold-600 text-cream-50 rounded-full hover:bg-gold-500 transition-colors duration-300 shadow-xl shadow-gold-700/30"
                    >
                        {hero.ctaText}
                    </a>
                    <a
                        href={salonContent.line.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 text-sm font-serif tracking-[0.15em] border-2 border-cream-100/40 text-cream-50 rounded-full hover:bg-cream-50/10 transition-colors duration-300 backdrop-blur-sm"
                    >
                        LINE予約
                    </a>
                </motion.div>
            </div>

            {/* ── 下部グラデーション ── */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent z-10"></div>

            {/* ── Scroll Indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
            >
                <span className="text-cream-100/60 text-xs tracking-[0.3em] mb-2 font-display uppercase">Scroll</span>
                <div className="w-[1px] h-16 bg-cream-100/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-ice-300 absolute top-0"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
