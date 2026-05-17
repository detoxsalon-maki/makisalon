import { motion } from 'framer-motion';

interface QRBlockProps {
  qrImage: string;
  label: string;
  linkUrl: string;
  linkText?: string;
  size?: 'sm' | 'md' | 'lg';
}

const QRBlock = ({ qrImage, label, linkUrl, linkText = 'タップして開く', size = 'md' }: QRBlockProps) => {
  const sizeMap = { sm: 'w-28 h-28', md: 'w-40 h-40', lg: 'w-52 h-52' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-3"
    >
      <p className="text-xs font-medium tracking-[0.2em] text-gold-400">{label}</p>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="group">
        <div className={`${sizeMap[size]} bg-white rounded-lg p-2 shadow-lg border border-gold-200/50 group-hover:shadow-gold-500/20 transition-shadow duration-300`}>
          <img
            src={qrImage}
            alt={`${label} QRコード`}
            className="w-full h-full object-contain"
          />
        </div>
      </a>
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gold-500 hover:text-gold-400 tracking-widest underline underline-offset-4 transition-colors"
      >
        {linkText}
      </a>
    </motion.div>
  );
};

export default QRBlock;
