import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  imageUrl?: string;
  schemaJson?: object;
}

export function SeoHead({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  authorName,
  imageUrl,
  schemaJson
}: SeoProps) {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title.includes('Aide Mobile Afrique')
      ? title
      : `${title} | Aide Mobile Afrique`;
    document.title = formattedTitle;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. OpenGraph tags
    const currentUrl = `${window.location.origin}${canonicalPath ? `#${canonicalPath}` : window.location.hash || ''}`;
    
    const setMetaProperty = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaProperty('og:title', formattedTitle);
    setMetaProperty('og:description', description);
    setMetaProperty('og:url', currentUrl);
    setMetaProperty('og:type', ogType);
    if (imageUrl) {
      setMetaProperty('og:image', imageUrl);
    }

    // 4. Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // 5. Schema.org JSON-LD
    let scriptTag = document.getElementById('dynamic-json-ld') as HTMLScriptElement | null;
    if (schemaJson) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-json-ld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaJson);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalPath, ogType, publishedTime, modifiedTime, authorName, imageUrl, schemaJson]);

  return null;
}
