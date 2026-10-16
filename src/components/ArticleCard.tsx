import { Clock, Eye, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Article } from '../types';
import { CATEGORIES } from '../data/categories';
import { useDataSaver } from '../context/DataSaverContext';

interface ArticleCardProps {
  article: Article;
  onSelect: (slug: string) => void;
  featured?: boolean;
}

export function ArticleCard({ article, onSelect, featured = false }: ArticleCardProps) {
  const { isDataSaver } = useDataSaver();
  const categoryObj = CATEGORIES.find((c) => c.id === article.category);

  if (featured) {
    return (
      <article
        onClick={() => onSelect(article.slug)}
        className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col lg:flex-row"
      >
        {/* Visual focal anchor */}
        <div className="lg:w-7/12 relative aspect-16/9 lg:aspect-auto overflow-hidden bg-slate-100">
          {!isDataSaver ? (
            <img
              src={article.featuredImage}
              alt={article.imageAlt}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Resilient CSS Fallback
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full min-h-[220px] bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-slate-300">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Mode Éco Mo Actif
              </span>
              <p className="text-xs text-slate-400">Image masquée pour économiser ~1.2 Mo de data</p>
            </div>
          )}
          <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-cyan-400 text-[11px] font-semibold px-2.5 py-1 rounded">
            À la Une · Guide Vérifié
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Unboxed Metadata (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="text-cyan-700 font-semibold">{categoryObj?.name || 'Android'}</span>
              <span aria-hidden="true">·</span>
              <span>{article.publishedAt}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-mono tabular-nums">
                <Clock className="w-3 h-3 text-slate-400" />
                {article.readingTimeMinutes} min
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug">
              {article.title}
            </h2>

            <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {article.summary}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-7 h-7 rounded-full object-cover border border-slate-200"
              />
              <div className="text-xs">
                <p className="font-semibold text-slate-900 leading-none">{article.author.name}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{article.author.role.split('&')[0].trim()}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold text-cyan-700 group-hover:translate-x-1 transition-transform">
              <span>Lire le guide</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Standard Editorial Card
  return (
    <article
      onClick={() => onSelect(article.slug)}
      className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col h-full"
    >
      {/* Thumbnail */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        {!isDataSaver ? (
          <img
            src={article.featuredImage}
            alt={article.imageAlt}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full bg-slate-900/90 flex flex-col items-center justify-center p-4 text-center">
            <span className="text-cyan-400 text-[10px] font-semibold uppercase tracking-wider">
              Mode Économie Mo
            </span>
          </div>
        )}

        {article.targetCountries && article.targetCountries.length > 0 && (
          <div className="absolute bottom-2 left-2 text-[10px] bg-slate-900/80 backdrop-blur-xs text-white px-2 py-0.5 rounded font-medium">
            Testé en Afrique de l’Ouest & Centrale
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div className="space-y-2">
          {/* Unboxed Metadata (Zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-cyan-700 font-semibold">{categoryObj?.name || 'Tutoriel'}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono tabular-nums">
              <Clock className="w-3 h-3 text-slate-400" />
              {article.readingTimeMinutes} min
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {article.summary}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="truncate max-w-[130px] font-medium text-slate-700">Par {article.author.name}</span>
          <span className="flex items-center gap-1 font-mono tabular-nums text-[11px] text-slate-400">
            <Eye className="w-3 h-3" />
            {article.viewsCount.toLocaleString('fr-FR')} vues
          </span>
        </div>
      </div>
    </article>
  );
}
