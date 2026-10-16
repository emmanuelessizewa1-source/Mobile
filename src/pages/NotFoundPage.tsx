import { Smartphone, Home, Search, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { SeoHead } from '../components/SeoHead';

interface NotFoundProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onSelectArticle: (slug: string) => void;
}

export function NotFoundPage({ onNavigate, onOpenSearch, onSelectArticle }: NotFoundProps) {
  const suggestedArticles = ARTICLES.slice(0, 3);

  return (
    <div className="py-12 sm:py-16 text-center space-y-8 max-w-2xl mx-auto">
      <SeoHead
        title="Page non trouvée (Erreur 404) | Aide Mobile Afrique"
        description="La page ou le tutoriel que vous recherchez semble introuvable ou a été déplacé."
      />

      <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-700 mx-auto flex items-center justify-center font-extrabold text-2xl font-mono">
        404
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Page ou tutoriel introuvable
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Le lien que vous avez suivi est peut-être erroné ou l’article a été mis à jour avec une nouvelle adresse.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Retourner à l’accueil</span>
        </button>

        <button
          onClick={onOpenSearch}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
        >
          <Search className="w-4 h-4 text-cyan-600" />
          <span>Lancer une recherche</span>
        </button>
      </div>

      {/* Suggested tutorials */}
      <div className="pt-8 border-t border-slate-200 text-left space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
          Ces tutoriels populaires pourraient vous intéresser :
        </h3>
        <div className="space-y-2">
          {suggestedArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art.slug)}
              className="p-3.5 bg-white rounded-lg border border-slate-200 hover:border-cyan-500 transition-colors flex items-center justify-between cursor-pointer group"
            >
              <div className="text-xs font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors pr-4 truncate">
                {art.title}
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
