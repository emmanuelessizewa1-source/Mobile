import { useState } from 'react';
import { CATEGORIES } from '../data/categories';
import { ARTICLES } from '../data/articles';
import { COUNTRIES } from '../data/countries';
import { CategoryId } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArticleCard } from '../components/ArticleCard';
import { AdSlot } from '../components/AdSlot';
import { SeoHead } from '../components/SeoHead';
import { Layers, ArrowUpDown, Filter } from 'lucide-react';

interface CategoryPageProps {
  categorySlug: string;
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export function CategoryPage({ categorySlug, onNavigate, onSelectArticle }: CategoryPageProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');

  const category = CATEGORIES.find((c) => c.slug === categorySlug) || CATEGORIES[0];

  // Articles for this category
  let categoryArticles = ARTICLES.filter((a) => a.category === category.id);

  // Country filter
  if (selectedCountry !== 'all') {
    const countryObj = COUNTRIES.find((c) => c.code === selectedCountry);
    if (countryObj) {
      categoryArticles = categoryArticles.filter((a) =>
        a.targetCountries?.some((tc) => tc.includes(countryObj.name))
      );
    }
  }

  // Sorting
  if (sortBy === 'popular') {
    categoryArticles = [...categoryArticles].sort((a, b) => b.viewsCount - a.viewsCount);
  } else {
    categoryArticles = [...categoryArticles].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  return (
    <div className="space-y-8 pb-16">
      <SeoHead
        title={`${category.name} | Tutoriels et Guides Aide Mobile Afrique`}
        description={category.description}
        canonicalPath={`/categories/${category.slug}`}
      />

      <Breadcrumb
        items={[{ label: category.name }]}
        onNavigate={onNavigate}
      />

      {/* Category Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" />
          <span>Rubrique Thématique</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {category.name}
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          {category.description} Retrouvez nos dossiers d’experts, fiches de dépannage et guides testés sur le terrain.
        </p>

        {/* Filters and sorting bar */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-semibold text-slate-600">Pays :</span>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              <option value="all">Tous les pays</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-semibold text-slate-600">Trier par :</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-xs">
              <button
                onClick={() => setSortBy('recent')}
                className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                  sortBy === 'recent' ? 'bg-white shadow-xs text-cyan-700 font-semibold' : 'text-slate-600'
                }`}
              >
                Plus récents
              </button>
              <button
                onClick={() => setSortBy('popular')}
                className={`px-2.5 py-1 rounded-md font-medium cursor-pointer transition-colors ${
                  sortBy === 'popular' ? 'bg-white shadow-xs text-cyan-700 font-semibold' : 'text-slate-600'
                }`}
              >
                Plus consultés
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdSlot placement="leaderboard_top" />

      {/* Articles Grid */}
      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onSelect={onSelectArticle}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-xl border border-slate-200">
          <p className="text-sm font-semibold text-slate-700">Aucun tutoriel pour cette sélection géographique.</p>
          <button
            onClick={() => setSelectedCountry('all')}
            className="mt-3 text-xs font-semibold text-cyan-700 hover:underline cursor-pointer"
          >
            Afficher tous les tutoriels de la rubrique
          </button>
        </div>
      )}
    </div>
  );
}
