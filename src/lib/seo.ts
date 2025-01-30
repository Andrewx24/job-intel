// lib/seo.ts
import { Metadata } from "next";
import config from "./config";

// Define specific types for extra metadata tags
type MetadataValue = string | number | boolean | null | undefined;
type ExtraMetadataTags = Record<string, MetadataValue | MetadataValue[]>;

interface OpenGraphConfig {
  title?: string;
  description?: string;
  url?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: OpenGraphConfig;
  canonicalUrlRelative?: string;
  extraTags?: ExtraMetadataTags;
}

export function getSEOTags({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: SEOProps = {}): Metadata {
  // Determine base URL based on environment
  const baseUrl = process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${config.domainName}`;

  // Construct metadata object
  const metadata: Metadata = {
    // Basic metadata
    title: {
      default: title || config.appName,
      template: `%s | ${config.appName}`,
    },
    description: description || config.appDescription,
    keywords: keywords || [config.appName],
    
    // Set the base URL for metadata that requires absolute URLs
    metadataBase: new URL(baseUrl),

    // OpenGraph metadata
    openGraph: {
      title: openGraph?.title || title || config.appName,
      description: openGraph?.description || description || config.appDescription,
      url: openGraph?.url || `${baseUrl}${canonicalUrlRelative || ''}`,
      siteName: config.appName,
      locale: 'en_US',
      type: 'website',
      images: openGraph?.images || [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title || config.appName,
        },
      ],
    },

    // Twitter metadata
    twitter: {
      card: 'summary_large_image',
      title: title || config.appName,
      description: description || config.appDescription,
      creator: config.social.twitter,
      images: openGraph?.images || ['/og-image.jpg'],
    },

    // Robots directives
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Icons and other metadata
    icons: {
      icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },

    manifest: '/site.webmanifest',

    // Add canonical URL if provided
    ...(canonicalUrlRelative && {
      alternates: {
        canonical: canonicalUrlRelative,
      },
    }),

    // Add any extra tags with type safety
    ...(extraTags as Metadata),
  };

  return metadata;
}

// Type for schema data
interface SchemaData {
  "@context": "http://schema.org";
  "@type": "WebApplication";
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  author: {
    "@type": "Organization";
    name: string;
    url: string;
  };
}

// Schema data generator with proper typing
export function getSchemaData(): SchemaData {
  return {
    "@context": "http://schema.org",
    "@type": "WebApplication",
    name: config.appName,
    description: config.appDescription,
    url: `https://${config.domainName}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    author: {
      "@type": "Organization",
      name: config.appName,
      url: `https://${config.domainName}`,
    },
  };
}

// Example usage in a page:
/*
// app/companies/page.tsx
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Find Companies",
  description: "Discover growing US companies and connect with decision-makers.",
  canonicalUrlRelative: "/companies",
  openGraph: {
    images: [{
      url: '/companies-og.jpg',
      width: 1200,
      height: 630,
      alt: "Find Companies on Job Intel"
    }],
  },
});
*/