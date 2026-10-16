import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
      className="fixed bottom-5 right-5 z-40 p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-900 text-white shadow-lg border border-slate-700/80 backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center group"
    >
      <ArrowUp className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
    </button>
  );
}
