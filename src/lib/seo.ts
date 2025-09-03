export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  keywords?: string;
  noindex?: boolean;
}

const DEFAULT_SEO: SEOData = {
  title: 'Semtex Technologies - Modern Learning Management Systems',
  description: 'Semtex Technologies helps teams launch clean, powerful LMS platforms in days. Based in Johannesburg, South Africa with global quality standards.',
  canonical: 'https://semtex.co.za',
  ogTitle: 'Semtex Technologies',
  ogDescription: 'Modern learning management systems built in Johannesburg',
  ogImage: '/og-default.jpg',
  ogUrl: 'https://semtex.co.za',
  twitterTitle: 'Semtex Technologies',
  twitterDescription: 'Modern learning management systems built in Johannesburg',
  twitterImage: '/og-default.jpg',
  keywords: 'LMS, learning management system, e-learning, education technology, South Africa, Johannesburg, course management, online learning',
};

/**
 * Updates the document head with SEO metadata
 */
export function updateSEO(seoData: Partial<SEOData> = {}) {
  const data = { ...DEFAULT_SEO, ...seoData };
  
  // Update title
  document.title = data.title;
  
  // Update or create meta tags
  updateMetaTag('description', data.description);
  updateMetaTag('keywords', data.keywords || DEFAULT_SEO.keywords!);
  
  // Canonical URL
  updateLinkTag('canonical', data.canonical || DEFAULT_SEO.canonical!);
  
  // Open Graph tags
  updateMetaProperty('og:title', data.ogTitle || data.title);
  updateMetaProperty('og:description', data.ogDescription || data.description);
  updateMetaProperty('og:image', data.ogImage || DEFAULT_SEO.ogImage!);
  updateMetaProperty('og:url', data.ogUrl || data.canonical || DEFAULT_SEO.canonical!);
  updateMetaProperty('og:type', 'website');
  updateMetaProperty('og:site_name', 'Semtex Technologies');
  
  // Twitter Card tags
  updateMetaName('twitter:card', 'summary_large_image');
  updateMetaName('twitter:title', data.twitterTitle || data.ogTitle || data.title);
  updateMetaName('twitter:description', data.twitterDescription || data.ogDescription || data.description);
  updateMetaName('twitter:image', data.twitterImage || data.ogImage || DEFAULT_SEO.ogImage!);
  
  // Robots meta tag
  if (data.noindex) {
    updateMetaName('robots', 'noindex, nofollow');
  } else {
    updateMetaName('robots', 'index, follow');
  }
}

function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function updateMetaProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function updateMetaName(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function updateLinkTag(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
}

/**
 * Hook to use SEO functionality in React components
 */
export function useSEO(seoData?: Partial<SEOData>) {
  if (typeof window !== 'undefined' && seoData) {
    updateSEO(seoData);
  }
  
  return { updateSEO };
}