import { useState } from 'react';
import { Smartphone, Zap, Flame, Shield, ArrowRight, BookOpen, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { COUNTRIES } from '../data/countries';
import { ArticleCard } from '../components/ArticleCard';
import { AdSlot } from '../components/AdSlot';
import { DataSavingsCalculator } from '../components/DataSavingsCalculator';
import { SeoHead } from '../components/SeoHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export function HomePage({ onNavigate, onSelectArticle }: HomePageProps) {
  const [selectedFilterCategory, setSelectedFilterCategory] = useState<string>('all');
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('all');

  // Featured lead article
  const leadArticle = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0];

  // Filtered latest tutorials
  const filteredArticles = ARTICLES.filter((a) => {
    if (a.id === leadArticle.id) return false; // Exclude lead story from secondary grid
    const matchCat = selectedFilterCategory === 'all' || a.category === selectedFilterCategory;
    const matchCountry =
      selectedCountryCode === 'all' ||
      !a.targetCountries ||
      a.targetCountries.some((c) => {
        const countryObj = COUNTRIES.find((co) => co.code === selectedCountryCode);
        return countryObj && c.includes(countryObj.name);
      });
    return matchCat && matchCountry;
  });

  // Trending / Most consulted articles
  const trendingArticles = [...ARTICLES]
    .sort((a, b) => b.viewsCount - a.viewsCount)
    .slice(0, 4);

  return (
    <div className="space-y-10 pb-16">
      <SeoHead
        title="Aide Mobile Afrique | Tutoriels Android, Forfaits & Mobile Money"
        description="Média technologique pratique de référence pour smartphones Android, forfaits internet, WhatsApp et Mobile Money au Togo, Bénin, Côte d'Ivoire, Sénégal, Cameroun et RDC."
        canonicalPath="/"
      />

      {/* Top Welcome & Country Quick Selector Strip */}
      <section className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Le guide pratique des utilisateurs de smartphones en Afrique
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Tutoriels pas-à-pas, astuces d’économie de mégaoctets et sécurité Mobile Money testés sur les téléphones réels (Tecno, Infinix, Samsung, Xiaomi, itel).
            </p>
          </div>

          {/* Quick country switcher */}
          <div className="flex items-center gap-1.5 flex-wrap shrink-0">
            <span className="text-xs font-semibold text-slate-500 mr-1">Votre pays :</span>
            <button
              onClick={() => setSelectedCountryCode('all')}
              className={`px-2 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                selectedCountryCode === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tous
            </button>
            {COUNTRIES.map((country) => (
              <button
                key={country.code}
                onClick={() => setSelectedCountryCode(country.code)}
                className={`px-2 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors flex items-center gap-1 ${
                  selectedCountryCode === country.code
                    ? 'bg-cyan-700 text-white font-semibold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                title={`Filtrer pour ${country.name}`}
              >
                <span>{country.flag}</span>
                <span className="hidden sm:inline">{country.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Top Leaderboard Ad Slot */}
      <AdSlot placement="leaderboard_top" />

      {/* SECTION 1: ARTICLE PRINCIPAL / LEAD STORY */}
      <section aria-labelledby="featured-heading">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-600"></div>
            <h2 id="featured-heading" className="text-sm font-bold uppercase tracking-wider text-slate-800">
              Guide à la Une
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Recommandé cette semaine</span>
        </div>

        <ArticleCard
          article={leadArticle}
          onSelect={onSelectArticle}
          featured={true}
        />
      </section>

      {/* SECTION 2: 2-COLUMN MAIN CONTENT (LATEST TUTORIALS + TRENDING SIDEBAR) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 Cols: Latest Tutorials with Category Filter */}
        <section className="lg:col-span-8 space-y-6" aria-labelledby="latest-tutorials-heading">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <h2 id="latest-tutorials-heading" className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-600" />
              <span>Derniers Tutoriels Pratiques</span>
            </h2>

            {/* Interactive Category Filter Tabs (Single-line controls) */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <button
                onClick={() => setSelectedFilterCategory('all')}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilterCategory === 'all'
                    ? 'bg-cyan-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                Tous ({ARTICLES.length})
              </button>
              <button
                onClick={() => setSelectedFilterCategory('android-smartphones')}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilterCategory === 'android-smartphones'
                    ? 'bg-cyan-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                Android
              </button>
              <button
                onClick={() => setSelectedFilterCategory('internet-economies')}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilterCategory === 'internet-economies'
                    ? 'bg-cyan-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                Économie Mo
              </button>
              <button
                onClick={() => setSelectedFilterCategory('mobile-money')}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilterCategory === 'mobile-money'
                    ? 'bg-cyan-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                Mobile Money
              </button>
            </div>
          </div>

          {/* Grid of Articles */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filteredArticles.map((art) => (
                <ArticleCard
                  key={art.id}
                  article={art}
                  onSelect={onSelectArticle}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600">Aucun guide ne correspond à ce filtre.</p>
              <button
                onClick={() => {
                  setSelectedFilterCategory('all');
                  setSelectedCountryCode('all');
                }}
                className="mt-2 text-xs font-semibold text-cyan-600 hover:underline cursor-pointer"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* Data Savings Interactive Simulator */}
          <div className="pt-4">
            <DataSavingsCalculator onOpenTutorial={onSelectArticle} />
          </div>
        </section>

        {/* Right 4 Cols: Most Read (Trending) + Categories Showcase + Sticky Sidebar Ad */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Most Consulted Box */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Les plus consultés
              </h3>
            </div>

            <ol className="divide-y divide-slate-100">
              {trendingArticles.map((article, idx) => (
                <li
                  key={article.id}
                  onClick={() => onSelectArticle(article.slug)}
                  className="py-3 first:pt-0 last:pb-0 flex items-start gap-3 cursor-pointer group"
                >
                  <span className="text-base font-extrabold text-cyan-600/70 group-hover:text-cyan-600 font-mono tabular-nums shrink-0 w-5">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </p>
                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <span className="font-mono tabular-nums">{article.viewsCount.toLocaleString('fr-FR')} lectures</span>
                      <span>·</span>
                      <span>{article.readingTimeMinutes} min</span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Sidebar Ad Placement */}
          <AdSlot placement="sidebar_sticky" />

          {/* Security Alert Callout */}
          <div className="bg-gradient-to-br from-slate-900 to-[#0a1128] text-white rounded-xl p-5 shadow-xs">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4" />
              <span>Alerte Sécurité Fraude</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">
              Faux SMS Wave et Orange Money
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Ne composez aucun code USSD dicté au téléphone par un inconnu. Les opérateurs ne demandent jamais votre code PIN.
            </p>
            <button
              onClick={() => onSelectArticle('eviter-arnaques-faux-depots-mobile-money')}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Lire le guide anti-arnaque</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      </div>

      {/* SECTION 3: POPULAR CATEGORIES GRID */}
      <section aria-labelledby="categories-heading" className="pt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 id="categories-heading" className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-600" />
            <span>Explorer par Thématique</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">7 rubriques spécialisées</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate(`/categories/${cat.slug}`)}
              className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-500/50 hover:shadow-md transition-all text-left flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                    {cat.name.split(' ')[0]}
                  </span>
                  <span className="text-[11px] font-mono tabular-nums text-slate-400">
                    {cat.articleCount} articles
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-cyan-700">
                <span>Voir les guides</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 4: COUNTRY GUIDES STRIP */}
      <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Spécificités Opérateurs & Régulateurs
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Guides pratiques par pays
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Retrouvez les codes USSD officiels, les numéros d'urgence de lutte contre la cybercriminalité et les particularités de chaque réseau local.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/guides-pays')}
            className="px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer shrink-0"
          >
            Consulter l’annuaire complet
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              onClick={() => onNavigate(`/guides-pays#${c.code.toLowerCase()}`)}
              className="p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-center transition-colors cursor-pointer group"
            >
              <div className="text-2xl mb-1">{c.flag}</div>
              <div className="text-xs font-semibold text-white group-hover:text-cyan-300 truncate">
                {c.name}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                {c.popularOperators[0]?.split(' ')[0]}
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
