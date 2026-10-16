import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (slug: string) => void;
}

export function SearchModal({ isOpen, onClose, onSelectArticle }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedCategory('all');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter articles
  const cleanQuery = query.toLowerCase().trim();
  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!cleanQuery) return true;

    const inTitle = art.title.toLowerCase().includes(cleanQuery);
    const inSummary = art.summary.toLowerCase().includes(cleanQuery);
    const inSteps = art.steps.some(
      (s) => s.title.toLowerCase().includes(cleanQuery) || s.description.toLowerCase().includes(cleanQuery)
    );
    const inCountries = art.targetCountries?.some((c) => c.toLowerCase().includes(cleanQuery));

    return inTitle || inSummary || inSteps || inCountries;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 sm:pt-16 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search header with input */}
        <div className="p-3.5 sm:p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-cyan-600 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher : libérer espace, code Wave, bloquer WhatsApp, pass internet..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg border border-slate-200 bg-white text-xs font-medium cursor-pointer"
          >
            Fermer
          </button>
        </div>

        {/* Category filter pills */}
        <div className="px-4 py-2 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar bg-white">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Tous les thèmes
          </button>
          {CATEGORIES.slice(0, 5).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search results list */}
        <div className="overflow-y-auto p-3 sm:p-4 divide-y divide-slate-100 flex-1">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => {
              const categoryObj = CATEGORIES.find((c) => c.id === article.category);
              return (
                <div
                  key={article.id}
                  onClick={() => {
                    onSelectArticle(article.slug);
                    onClose();
                  }}
                  className="py-3 px-2 sm:px-3 hover:bg-cyan-50/50 rounded-lg cursor-pointer transition-colors group flex items-start justify-between gap-4"
                >
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="text-cyan-700 font-semibold">{categoryObj?.name || article.category}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {article.readingTimeMinutes} min de lecture
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-transform shrink-0 mt-2" />
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 px-4">
              <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">Aucun tutoriel correspondant</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Essayez d'autres mots-clés comme « stockage », « WhatsApp », « Wave » ou « batterie ».
              </p>
            </div>
          )}
        </div>

        {/* Footer with suggestions */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span className="truncate">Suggestions rapides : vider le cache, arnaque MoMo, pass nuit</span>
          <span className="shrink-0 text-slate-400">{filteredArticles.length} guides trouvés</span>
        </div>
      </div>
    </div>
  );
}
