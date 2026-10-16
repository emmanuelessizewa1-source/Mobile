import { AUTHORS } from '../data/authors';
import { ARTICLES } from '../data/articles';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArticleCard } from '../components/ArticleCard';
import { SeoHead } from '../components/SeoHead';
import { Users, Award, MapPin } from 'lucide-react';

interface AuthorPageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export function AuthorPage({ onNavigate, onSelectArticle }: AuthorPageProps) {
  const authorList = Object.values(AUTHORS);

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      <SeoHead
        title="L’Équipe Éditoriale | Aide Mobile Afrique"
        description="Découvrez les journalistes et ingénieurs télécoms qui rédigent et vérifient les guides pratiques d’Aide Mobile Afrique."
        canonicalPath="/auteurs"
      />

      <Breadcrumb
        items={[{ label: 'Équipe éditoriale' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 uppercase tracking-wider mb-2">
          <Users className="w-4 h-4" />
          <span>Rédaction & Experts</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          L’équipe éditoriale d’Aide Mobile Afrique
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Nos tutoriels sont écrits par des professionnels des télécommunications et de la cybersécurité basés en Côte d’Ivoire, au Bénin et au Sénégal.
        </p>
      </div>

      {/* Authors Profiles */}
      <div className="space-y-8">
        {authorList.map((author) => {
          const authorArticles = ARTICLES.filter((a) => a.author.id === author.id);

          return (
            <div key={author.id} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500 shadow-sm shrink-0"
                />
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h2 className="text-xl font-bold text-slate-900">{author.name}</h2>
                    <span className="flex items-center justify-center sm:justify-start gap-1 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                      Basé en {author.country}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-cyan-700">{author.role}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </div>

              {/* Author's Articles */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Guides publiés par {author.name} ({authorArticles.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {authorArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => onSelectArticle(art.slug)}
                      className="p-3 rounded-lg border border-slate-200 hover:border-cyan-500 hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2">
                        {art.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {art.readingTimeMinutes} min de lecture · {art.viewsCount.toLocaleString('fr-FR')} vues
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
