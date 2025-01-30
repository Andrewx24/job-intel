// lib/config.ts

// Define the navigation item structure
interface NavItem {
    title: string;
    href: string;
    external?: boolean;
  }
  
  // Define the site configuration structure
  interface SiteConfig {
    // Basic site information
    appName: string;
    appDescription: string;
    domainName: string;
  
    // Contact information
    supportEmail: string;
    adminEmail: string;
  
    // Social media profiles
    social: {
      twitter: string;
      github: string;
      linkedin: string;
    };
  
    // Navigation structure
    mainNav: NavItem[];
    footerNav: {
      title: string;
      items: NavItem[];
    }[];
  
    // Feature flags and limits
    features: {
      maxSearchResults: number;
      enableInsights: boolean;
      enableDirectMessaging: boolean;
    };
  
    // Theme configuration
    theme: {
      main: string;
    };
  
    // Authentication paths
    auth: {
      loginUrl: string;
      callbackUrl: string;
    };
  }
  
  // Create and export the configuration
  const config: SiteConfig = {
    appName: "Job Intel",
    appDescription: "Discover growing US companies and connect with decision-makers directly. Stop applying, start connecting.",
    domainName: "job-intel.vercel.app",
  
    supportEmail: "support@jobintel.com",
    adminEmail: "admin@jobintel.com",
  
    social: {
      twitter: "@jobintel",
      github: "jobintel",
      linkedin: "company/jobintel",
    },
  
    mainNav: [
      {
        title: "Companies",
        href: "/companies",
      },
      {
        title: "People",
        href: "/people",
      },
      {
        title: "Insights",
        href: "/insights",
      },
    ],
  
    footerNav: [
      {
        title: "Product",
        items: [
          { title: "Companies", href: "/companies" },
          { title: "People", href: "/people" },
          { title: "Insights", href: "/insights" },
        ],
      },
      {
        title: "Company",
        items: [
          { title: "About", href: "/about" },
          { title: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        items: [
          { title: "Privacy", href: "/privacy" },
          { title: "Terms", href: "/terms" },
        ],
      },
    ],
  
    features: {
      maxSearchResults: 100,
      enableInsights: true,
      enableDirectMessaging: true,
    },
  
    theme: {
      main: "#2563eb", // Primary blue color
    },
  
    auth: {
      loginUrl: "/signin",
      callbackUrl: "/dashboard",
    },
  };
  
  // Export the configuration
  export default config;
  
  // Export type for use in other files if needed
  export type { SiteConfig, NavItem };