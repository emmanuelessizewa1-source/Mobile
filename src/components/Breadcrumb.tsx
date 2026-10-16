import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  // Generate Schema.org BreadcrumbList structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://aidemobileafrique.com/'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.path ? `https://aidemobileafrique.com/#${item.path}` : undefined
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Fil d’Ariane" className="py-2.5 px-1 text-xs text-slate-500 overflow-x-auto no-scrollbar">
        <ol className="flex items-center gap-1.5 whitespace-nowrap">
          <li className="flex items-center">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-1 text-slate-500 hover:text-cyan-700 transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only">Accueil</span>
            </button>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                {item.path && !isLast ? (
                  <button
                    onClick={() => onNavigate(item.path!)}
                    className="text-slate-500 hover:text-cyan-700 transition-colors cursor-pointer truncate max-w-[200px]"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className="text-slate-800 font-medium truncate max-w-[280px]" aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
