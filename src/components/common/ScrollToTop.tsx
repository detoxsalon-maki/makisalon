import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ページ遷移時にスクロール位置を先頭にリセットする
 * ハッシュリンク（#diagnostic 等）の場合はそのセクションへスクロール
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
