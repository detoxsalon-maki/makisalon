import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { MangaPanel } from '../../config/manga-salon';

interface MangaViewerProps {
  panels: MangaPanel[];
  title?: string;
  /** compact: セクション間の小さなインターバル  |  full: 独立セクション */
  variant?: 'full' | 'compact';
}

const MangaViewer = ({
  panels,
  title = 'ストーリーで知る',
  variant = 'full',
}: MangaViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const panel = panels[currentIndex];

  const goNext = () => setCurrentIndex((p) => Math.min(p + 1, panels.length - 1));
  const goPrev = () => setCurrentIndex((p) => Math.max(p - 1, 0));

  const isCompact = variant === 'compact';
  const sectionPadding = isCompact ? 'py-12' : 'py-24';
  const imageAspect = isCompact
    ? 'aspect-[4/3] md:aspect-[16/9]'
    : 'aspect-[3/4] md:aspect-[4/3]';
  const maxWidth = isCompact ? 'max-w-2xl' : 'max-w-4xl';

  return (
    <section className={`${sectionPadding} bg-cream-100 border-t border-gold-100`}>
      <div className={`container mx-auto px-6 lg:px-12 ${maxWidth}`}>
        {/* ─── ヘッダー ─── */}
        <div className={`text-center ${isCompact ? 'mb-6' : 'mb-12'}`}>
          <h2 className="text-xs text-gold-600 tracking-[0.4em] uppercase mb-2 font-display">
            Manga Story
          </h2>
          <div className="w-8 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 mx-auto mb-3"></div>
          <h3
            className={`${
              isCompact ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'
            } font-serif text-charcoal-800 tracking-widest`}
          >
            {title}
          </h3>
        </div>

        {/* ─── ビューア ─── */}
        <div className="relative bg-white rounded-sm border border-gold-100 overflow-hidden shadow-lg">
          {/* ページ番号 */}
          <div className="absolute top-3 right-3 z-30 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gold-700 border border-gold-200">
            {currentIndex + 1} / {panels.length}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              {/* 画像エリア */}
              <div className={`${imageAspect} relative bg-cream-100`}>
                <img
                  src={panel.imagePath}
                  alt={panel.altText}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    img.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-cream-200 text-charcoal-300 font-light tracking-widest text-sm">
                        <div class="text-center"><p class="text-4xl mb-4">📖</p><p>マンガ画像準備中</p><p class="text-xs mt-2 text-charcoal-200">Page ${panel.page}</p></div>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* セリフ */}
              <div className={`${isCompact ? 'p-4 md:p-5' : 'p-6 md:p-8'} border-t border-gold-100`}>
                <div className="flex items-start gap-3">
                  <span className="text-xs text-gold-700 tracking-widest bg-gold-50 px-2 py-1 rounded-full border border-gold-200 whitespace-nowrap">
                    {panel.character}
                  </span>
                  <p
                    className={`text-charcoal-800 font-light tracking-wider leading-relaxed ${
                      isCompact ? 'text-sm' : 'text-base'
                    }`}
                  >
                    「{panel.dialogue}」
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ナビゲーション */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none z-20">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="pointer-events-auto w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gold-200 flex items-center justify-center text-charcoal-600 disabled:opacity-30 hover:bg-gold-50 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex === panels.length - 1}
              className="pointer-events-auto w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gold-200 flex items-center justify-center text-charcoal-600 disabled:opacity-30 hover:bg-gold-50 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ドットナビ */}
        <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
          {panels.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-gold-500 scale-125' : 'bg-gold-200 hover:bg-gold-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MangaViewer;
