import { useState, useEffect } from 'react';
import { DataSaverProvider } from './context/DataSaverContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { CountryGuidePage } from './pages/CountryGuidePage';
import { AboutPage } from './pages/AboutPage';
import { AuthorPage } from './pages/AuthorPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ARTICLES } from './data/articles';

export default function App() {
  // Current route parsed from hash (e.g. '#/articles/mon-slug' -> '/articles/mon-slug')
  const getRouteFromHash = () => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getRouteFromHash());
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Listen to hash changes (back/forward browser buttons, direct links)
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getRouteFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut '/' to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation function
  const navigate = (path: string) => {
    if (window.location.hash === `#${path}`) {
      window.scrollTo(0, 0);
    } else {
      window.location.hash = path;
    }
    setCurrentPath(path);
  };

  const handleSelectArticle = (slug: string) => {
    navigate(`/articles/${slug}`);
  };

  // Render the matching route
  const renderContent = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onSelectArticle={handleSelectArticle}
        />
      );
    }

    // 2. Article Detail: /articles/:slug
    if (currentPath.startsWith('/articles/')) {
      const slug = currentPath.replace('/articles/', '').split(/[?#]/)[0];
      const article = ARTICLES.find((a) => a.slug === slug);
      if (article) {
        return (
          <ArticleDetailPage
            article={article}
            onNavigate={navigate}
            onSelectArticle={handleSelectArticle}
          />
        );
      }
      return (
        <NotFoundPage
          onNavigate={navigate}
          onOpenSearch={() => setIsSearchOpen(true)}
          onSelectArticle={handleSelectArticle}
        />
      );
    }

    // 3. Category Page: /categories/:slug
    if (currentPath.startsWith('/categories/')) {
      const categorySlug = currentPath.replace('/categories/', '').split(/[?#]/)[0];
      return (
        <CategoryPage
          categorySlug={categorySlug}
          onNavigate={navigate}
          onSelectArticle={handleSelectArticle}
        />
      );
    }

    // 4. Country Guides Page: /guides-pays
    if (currentPath.startsWith('/guides-pays')) {
      return (
        <CountryGuidePage
          onNavigate={navigate}
          onSelectArticle={handleSelectArticle}
        />
      );
    }

    // 5. About Page: /a-propos
    if (currentPath === '/a-propos') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 6. Authors Page: /auteurs
    if (currentPath === '/auteurs') {
      return (
        <AuthorPage
          onNavigate={navigate}
          onSelectArticle={handleSelectArticle}
        />
      );
    }

    // 7. Contact Page: /contact
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 8. Privacy Page: /politique-confidentialite
    if (currentPath === '/politique-confidentialite') {
      return <PrivacyPage onNavigate={navigate} />;
    }

    // 9. Legal Page: /mentions-legales
    if (currentPath === '/mentions-legales') {
      return <LegalPage onNavigate={navigate} />;
    }

    // 10. Default 404 Fallback
    return (
      <NotFoundPage
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectArticle={handleSelectArticle}
      />
    );
  };

  return (
    <DataSaverProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
        {/* Global Navigation Bar */}
        <Navbar
          currentPath={currentPath}
          onNavigate={navigate}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
          {renderContent()}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={navigate} />

        {/* Interactive Floating Utilities */}
        <BackToTop />
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectArticle={handleSelectArticle}
        />
      </div>
    </DataSaverProvider>
  );
}
