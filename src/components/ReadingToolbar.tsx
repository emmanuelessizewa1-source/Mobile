import { useState, useEffect } from 'react';
import { Type, Printer, BookOpen, RotateCcw } from 'lucide-react';

interface ReadingToolbarProps {
  fontSizeClass: string;
  onChangeFontSize: (size: string) => void;
  isReadingMode: boolean;
  onToggleReadingMode: () => void;
}

export function ReadingToolbar({
  fontSizeClass,
  onChangeFontSize,
  isReadingMode,
  onToggleReadingMode
}: ReadingToolbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Top sticky scroll progress line */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-cyan-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating or inline reading toolbar */}
      <div className="py-2.5 px-3 bg-white rounded-lg border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Type className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-700">Taille du texte :</span>
          <div className="inline-flex rounded-md border border-slate-200 p-0.5 bg-slate-50">
            <button
              onClick={() => onChangeFontSize('prose-sm')}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold cursor-pointer ${
                fontSizeClass === 'prose-sm' ? 'bg-white shadow-xs text-cyan-700' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Petit texte"
            >
              A-
            </button>
            <button
              onClick={() => onChangeFontSize('prose-base')}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold cursor-pointer ${
                fontSizeClass === 'prose-base' ? 'bg-white shadow-xs text-cyan-700' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Taille normale"
            >
              A
            </button>
            <button
              onClick={() => onChangeFontSize('prose-lg')}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold cursor-pointer ${
                fontSizeClass === 'prose-lg' ? 'bg-white shadow-xs text-cyan-700' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Grand texte pour petits écrans"
            >
              A+
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleReadingMode}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
              isReadingMode
                ? 'bg-cyan-50 border-cyan-300 text-cyan-800'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
            title="Activer le mode lecture épuré"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isReadingMode ? 'Mode normal' : 'Mode lecture zen'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
            title="Imprimer ou enregistrer en PDF hors ligne"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PDF / Hors-ligne</span>
          </button>
        </div>
      </div>
    </>
  );
}
