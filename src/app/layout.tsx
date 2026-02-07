import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juraj Giacko | Business \u00d7 Sport \u00d7 AI",
  description:
    "Executive Director & Investor. Transformujem biznisy, riadim \u0161portov\u00e9 zna\u010dky a budujem s AI. CEO VITAR Sport.",
  keywords: [
    "Juraj Giacko",
    "VITAR Sport",
    "ENERVIT",
    "CEO",
    "AI",
    "e-commerce",
    "sport business",
    "digital transformation",
  ],
  authors: [{ name: "Juraj Giacko" }],
  openGraph: {
    title: "Juraj Giacko | Business \u00d7 Sport \u00d7 AI",
    description:
      "Executive Director & Investor. I transform businesses, lead sports brands, and build with AI.",
    url: "https://juraj.digital",
    siteName: "Juraj Giacko",
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juraj Giacko | Business \u00d7 Sport \u00d7 AI",
    description:
      "Executive Director & Investor. I transform businesses, lead sports brands, and build with AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
