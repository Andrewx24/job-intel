// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Intel | Stop Applying, Start Connecting",
  description: "Transform your job search by connecting directly with growing companies and decision-makers. Find opportunities before they hit job boards.",
  keywords: [
    "company research",
    "job search",
    "career opportunities",
    "hiring insights",
    "company growth",
    "decision makers",
    "professional networking"
  ],
  openGraph: {
    title: "Job Intel | Intelligence-Driven Job Search",
    description: "Connect directly with growing companies and decision-makers. Discover opportunities before they become public.",
    url: "https://job-intel.vercel.app",
    siteName: "Job Intel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          data-website-id="679aa15abd3ba6a340f22681"
          data-domain="job-intel.vercel.app"
          src="https://datafa.st/js/script.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}