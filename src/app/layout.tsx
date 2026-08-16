import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Divyansh Singh | Data Analytics, AI, Automation & PMO",
  description:
    "Portfolio of Divyansh Singh showcasing work across Data Analytics, Artificial Intelligence, Automation, and PMO.",
  keywords: [
    "Data Analytics",
    "Artificial Intelligence",
    "Automation",
    "PMO",
    "Power BI",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Divyansh Singh" }],
  metadataBase: new URL("https://divyanshsingh.com"),
  openGraph: {
    title: "Divyansh Singh | Data Analytics, AI, Automation & PMO",
    description:
      "Portfolio of Divyansh Singh showcasing work across Data Analytics, Artificial Intelligence, Automation, and PMO.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
