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
  title: "Job Intel - Company Intelligence Platform",
  description: "Find and analyze companies and their key decision makers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
      <script
  defer
  data-website-id="679aa15abd3ba6a340f22681"
  data-domain="job-intel.vercel.app"
  src="https://datafa.st/js/script.js">
</script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class"  defaultTheme="system"   enableSystem  disableTransitionOnChange >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}