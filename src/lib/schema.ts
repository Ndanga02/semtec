/**
 * Schema.org JSON-LD structured data for SEO
 */

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  address: {
    "@type": string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  founder: Array<{
    "@type": string;
    name: string;
    jobTitle: string;
  }>;
  sameAs: string[];
  contactPoint: {
    "@type": string;
    contactType: string;
    url: string;
  };
}

export interface ProductSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  brand: {
    "@type": string;
    name: string;
  };
  manufacturer: {
    "@type": string;
    name: string;
  };
  category: string;
  url: string;
  offers: {
    "@type": string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
}

/**
 * Generate Organization schema for Semtex Technologies
 */
export function getOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Semtex Technologies",
    description: "Modern learning management systems and educational technology solutions built in Johannesburg, South Africa.",
    url: "https://semtex.co.za",
    logo: "https://semtex.co.za/logo.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressRegion: "Gauteng",
      addressCountry: "ZA"
    },
    founder: [
      {
        "@type": "Person",
        name: "Ndanganeni Nedzamba",
        jobTitle: "Co-founder & CTO"
      },
      {
        "@type": "Person",
        name: "Prince Makhesha",
        jobTitle: "Co-founder & CEO"
      }
    ],
    sameAs: [
      "https://linkedin.com/company/semtex-technologies",
      "https://twitter.com/semtextech"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://semtex.co.za/contact"
    }
  };
}

/**
 * Generate Product schema for LMS
 */
export function getLMSProductSchema(): ProductSchema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Semtex LMS",
    description: "Modern learning management system with course builder, assessments, analytics, and SSO integration.",
    brand: {
      "@type": "Organization",
      name: "Semtex Technologies"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Semtex Technologies"
    },
    category: "Learning Management System",
    url: "https://semtex.co.za/products/lms",
    offers: {
      "@type": "Offer",
      priceCurrency: "ZAR",
      availability: "https://schema.org/InStock",
      url: "https://semtex.co.za/pricing"
    }
  };
}

/**
 * Inject JSON-LD schema into document head
 */
export function injectSchema(schema: OrganizationSchema | ProductSchema, id: string) {
  if (typeof window === 'undefined') return;
  
  // Remove existing schema with same ID
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }
  
  // Create and inject new schema
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
}

/**
 * Remove schema from document head
 */
export function removeSchema(id: string) {
  if (typeof window === 'undefined') return;
  
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }
}