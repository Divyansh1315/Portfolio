import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/StructuredData";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getSiteSettings } from "@/sanity/lib/fetch";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  const siteUrl = settings?.siteUrl || "https://divyanshsingh.com";
  const title = settings?.defaultSeoTitle || "Divyansh Singh | Data Analytics, AI, Automation & PMO";
  const description = settings?.defaultSeoDescription || "Portfolio of Divyansh Singh showcasing practical work across data analytics, artificial intelligence, workflow automation, PMO, and business-focused technology solutions.";
  const author = settings?.name || "Divyansh Singh";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${author}`,
    },
    description,
    keywords: [
      "Data Analytics",
      "Artificial Intelligence",
      "Automation",
      "PMO",
      "Power BI",
      "Python",
      "Portfolio",
      "Business Technology",
    ],
    authors: [{ name: author }],
    creator: author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: `${author} Portfolio`,
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${author} — Data Analytics · AI · Automation · PMO`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  const resumeUrl = settings?.showResumeCta
    ? settings.resumeFile?.asset?.url
    : undefined;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <StructuredData />
          <Navbar name={settings?.name} resumeUrl={resumeUrl} />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
