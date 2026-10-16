import { useState } from 'react';
import {
  Clock,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Smartphone,
  ShieldCheck,
  User,
  List
} from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { Breadcrumb } from '../components/Breadcrumb';
import { ShareButtons } from '../components/ShareButtons';
import { ReadingToolbar } from '../components/ReadingToolbar';
import { AdSlot } from '../components/AdSlot';
import { ArticleCard } from '../components/ArticleCard';
import { SeoHead } from '../components/SeoHead';
import { useDataSaver } from '../context/DataSaverContext';

interface ArticleDetailPageProps {
  article: Article;
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export function ArticleDetailPage({
  article,
  onNavigate,
  onSelectArticle
}: ArticleDetailPageProps) {
  const [fontSizeClass, setFontSizeClass] = useState<string>('prose-base');
  const [isReadingMode, setIsReadingMode] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { isDataSaver } = useDataSaver();

  const categoryObj = CATEGORIES.find((c) => c.id === article.category);

  // Find previous and next articles for pagination navigation
  const currentIndex = ARTICLES.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  // Related articles
  const relatedArticles = ARTICLES.filter(
    (a) => article.relatedArticleIds?.includes(a.id) || (a.category === article.category && a.id !== article.id)
  ).slice(0, 3);

  // Schema.org Article / HowTo structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.metaDescription,
    image: `https://aidemobileafrique.com${article.featuredImage}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aide Mobile Afrique',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aidemobileafrique.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://aidemobileafrique.com/#/articles/${article.slug}`
    },
    about: {
      '@type': 'Thing',
      name: categoryObj?.name || 'Technologie mobile'
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="space-y-8 pb-16">
      <SeoHead
        title={article.metaTitle}
        description={article.metaDescription}
        canonicalPath={`/articles/${article.slug}`}
        ogType="article"
        publishedTime={article.publishedAt}
        modifiedTime={article.updatedAt}
        authorName={article.author.name}
        imageUrl={`https://aidemobileafrique.com${article.featuredImage}`}
        schemaJson={articleSchema}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: categoryObj?.name || 'Catégorie', path: `/categories/${categoryObj?.slug || ''}` },
          { label: article.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Article Header */}
      <header className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <button
            onClick={() => onNavigate(`/categories/${categoryObj?.slug || ''}`)}
            className="text-cyan-700 font-bold hover:underline cursor-pointer"
          >
            {categoryObj?.name}
          </button>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            Mis à jour le {article.updatedAt}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 font-mono tabular-nums">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {article.readingTimeMinutes} min de lecture
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          {article.summary}
        </p>

        {/* Author Bio Banner & Trust badge */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">{article.author.name}</span>
                <span className="text-[10px] text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded font-medium">
                  {article.author.country}
                </span>
              </div>
              <p className="text-[11px] text-slate-500">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-semibold">Guide vérifié · Android 10 à 15</span>
          </div>
        </div>
      </header>

      {/* Reading accessibility toolbar */}
      <ReadingToolbar
        fontSizeClass={fontSizeClass}
        onChangeFontSize={setFontSizeClass}
        isReadingMode={isReadingMode}
        onToggleReadingMode={() => setIsReadingMode(!isReadingMode)}
      />

      {/* Featured Image */}
      {!isDataSaver ? (
        <figure className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs max-w-4xl">
          <img
            src={article.featuredImage}
            alt={article.imageAlt}
            className="w-full aspect-16/9 sm:aspect-21/9 object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <figcaption className="p-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 text-center">
            {article.imageAlt} · Photographie éditoriale Aide Mobile Afrique
          </figcaption>
        </figure>
      ) : (
        <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <span>Mode économie de mégaoctets actif : image illustrative masquée.</span>
        </div>
      )}

      {/* TOP AD PLACEMENT (Haut de contenu) */}
      <div className="max-w-4xl">
        <AdSlot placement="leaderboard_top" />
      </div>

      {/* Main Grid: Content + Sticky Table of Contents */}
      <div className={`grid grid-cols-1 ${isReadingMode ? 'max-w-3xl mx-auto' : 'lg:grid-cols-12'} gap-8 items-start`}>
        {/* Left Column: Article Body */}
        <div className={`${isReadingMode ? 'w-full' : 'lg:col-span-8'} space-y-8`}>
          {/* Prerequisites Callout */}
          {article.prerequisites && article.prerequisites.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-cyan-600" />
                <span>Prérequis indispensables</span>
              </h4>
              <ul className="space-y-1 text-xs text-slate-600">
                {article.prerequisites.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile Table of Contents for quick jumps */}
          <div className="lg:hidden p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              <List className="w-4 h-4 text-cyan-600" />
              <span>Sommaire du guide</span>
            </div>
            <ol className="space-y-1.5 text-xs">
              {article.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <button
                    onClick={() => scrollToSection(toc.id)}
                    className="text-cyan-800 hover:underline text-left block w-full py-0.5"
                  >
                    {toc.title}
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* STEP BY STEP NUMBERED SECTIONS */}
          <section className={`space-y-8 text-slate-800 ${fontSizeClass} leading-relaxed`}>
            {article.steps.map((step, idx) => (
              <div
                key={step.number}
                id={`step-${step.number}`}
                className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4 scroll-mt-20"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-700 text-white font-extrabold flex items-center justify-center shrink-0 font-mono text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Sub-steps / bullet points */}
                {step.detailPoints && (
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
                    {step.detailPoints.map((dp, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
                        <span>{dp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Device-Specific Nuances (Tecno, Infinix, Samsung) */}
                {step.deviceSpecificNotes && step.deviceSpecificNotes.length > 0 && (
                  <div className="mt-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                      Spécificités selon les marques :
                    </span>
                    {step.deviceSpecificNotes.map((dn, dIdx) => (
                      <div key={dIdx} className="text-xs text-slate-700">
                        <strong className="text-slate-900">{dn.device} : </strong>
                        <span>{dn.note}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Warning callout */}
                {step.warning && (
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{step.warning}</span>
                  </div>
                )}

                {/* Mid-Content Ad Placement after Step 2 */}
                {idx === 1 && (
                  <div className="pt-2">
                    <AdSlot placement="in_article_mid" />
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* PRECAUTIONS ET LIMITES SECTION */}
          <section id="precautions" className="p-5 sm:p-6 rounded-xl bg-amber-50/60 border border-amber-200 space-y-3 scroll-mt-20">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h3>Attention : Limites et précautions importantes</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              {article.precautions.map((pre, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">!</span>
                  <span>{pre}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* PRO TIPS SECTION */}
          <section className="p-5 sm:p-6 rounded-xl bg-cyan-50/60 border border-cyan-200 space-y-3">
            <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm">
              <Lightbulb className="w-5 h-5 text-cyan-700" />
              <h3>Conseils d’expert Aide Mobile Afrique</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              {article.proTips.map((tip, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2">
                  <span className="text-cyan-700 font-bold">★</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* BOTTOM AD PLACEMENT (Fin d'article) */}
          <AdSlot placement="in_article_bottom" />

          {/* FAQ SECTION */}
          <section id="faq" className="space-y-4 pt-4 scroll-mt-20">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              <h3 className="text-lg font-bold text-slate-900">
                Foire aux questions (FAQ)
              </h3>
            </div>

            <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white overflow-hidden">
              {article.faq.map((item, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div key={fIdx} className="p-4 transition-colors">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full flex items-center justify-between gap-4 text-left font-semibold text-xs sm:text-sm text-slate-900 hover:text-cyan-700 cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <span className="text-cyan-600 font-bold shrink-0">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Share Buttons Strip */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <ShareButtons title={article.title} url={`/articles/${article.slug}`} />
          </div>

          {/* Author Box Full */}
          <div className="p-6 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 shrink-0"
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h4 className="text-base font-bold text-white">{article.author.name}</h4>
                <span className="text-xs text-cyan-400">{article.author.role}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {article.author.bio}
              </p>
              <button
                onClick={() => onNavigate('/auteurs')}
                className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Voir toutes les publications de {article.author.name}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pagination Navigation (Previous / Next Article) */}
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" aria-label="Navigation entre articles">
            {prevArticle ? (
              <button
                onClick={() => onSelectArticle(prevArticle.slug)}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-left flex flex-col justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Guide Précédent</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2">
                  {prevArticle.title}
                </span>
              </button>
            ) : <div />}

            {nextArticle ? (
              <button
                onClick={() => onSelectArticle(nextArticle.slug)}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-right flex flex-col justify-between cursor-pointer group sm:text-right"
              >
                <div className="flex items-center justify-end gap-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  <span>Guide Suivant</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2">
                  {nextArticle.title}
                </span>
              </button>
            ) : <div />}
          </nav>
        </div>

        {/* Right Sticky Sidebar (Desktop Table of Contents & Sticky Ad) */}
        {!isReadingMode && (
          <aside className="hidden lg:block lg:col-span-4 space-y-6 sticky top-20">
            {/* Table of Contents */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <List className="w-4 h-4 text-cyan-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Sommaire du tutoriel
                </h3>
              </div>

              <ol className="space-y-2 text-xs">
                {article.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <button
                      onClick={() => scrollToSection(toc.id)}
                      className="text-slate-600 hover:text-cyan-700 hover:translate-x-0.5 transition-all text-left block w-full py-1 leading-snug cursor-pointer"
                    >
                      {toc.title}
                    </button>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sticky Sidebar Ad */}
            <AdSlot placement="sidebar_sticky" />

            {/* Quick Country Help */}
            <div className="p-4 rounded-xl bg-slate-900 text-white text-xs space-y-2">
              <p className="font-semibold text-cyan-400">Besoin d’aide par pays ?</p>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Retrouvez les codes USSD pour vérifier votre solde ou contacter le régulateur télécom au Togo, Bénin, CI, Sénégal, Cameroun et RDC.
              </p>
              <button
                onClick={() => onNavigate('/guides-pays')}
                className="text-cyan-400 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>Accéder aux guides pays</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </aside>
        )}
      </div>

      {/* RELATED ARTICLES SECTION */}
      {relatedArticles.length > 0 && (
        <section className="pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              Articles recommandés dans la même thématique
            </h3>
            <button
              onClick={() => onNavigate(`/categories/${categoryObj?.slug || ''}`)}
              className="text-xs font-semibold text-cyan-700 hover:underline cursor-pointer"
            >
              Voir toute la rubrique
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedArticles.map((relArt) => (
              <ArticleCard
                key={relArt.id}
                article={relArt}
                onSelect={onSelectArticle}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
