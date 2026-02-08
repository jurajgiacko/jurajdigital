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
  metadataBase: new URL("https://juraj.digital"),
  title: "Juraj Giacko | Business × AI × Sport",
  description:
    "Transformujem biznisy. Budujem efektívne tímy. Staviam veci s AI. CEO VITAR Sport, ENERVIT CZ&SK. 12+ AI projektov — interné nástroje, hry, dashboardy.",
  keywords: [
    "Juraj Giacko",
    "VITAR Sport",
    "ENERVIT",
    "CEO",
    "AI builder",
    "vibe coding",
    "e-commerce",
    "sport business",
    "digital transformation",
    "Cursor",
    "AI projekty",
    "business operator",
  ],
  authors: [{ name: "Juraj Giacko", url: "https://juraj.digital" }],
  creator: "Juraj Giacko",
  alternates: {
    canonical: "https://juraj.digital",
  },
  openGraph: {
    title: "Juraj Giacko | Business × AI × Sport",
    description:
      "Transformujem biznisy. Budujem efektívne tímy. Staviam veci s AI. CEO s builder mindsetom.",
    url: "https://juraj.digital",
    siteName: "Juraj Giacko",
    locale: "sk_SK",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Juraj Giacko — Business × AI × Sport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juraj Giacko | Business × AI × Sport",
    description:
      "Transformujem biznisy. Budujem efektívne tímy. Staviam veci s AI. CEO s builder mindsetom.",
    images: ["/og-image.png"],
  },
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
  verification: {
    // Add Google Search Console verification when available
    // google: "verification-token",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juraj Giacko",
  url: "https://juraj.digital",
  jobTitle: "CEO",
  worksFor: {
    "@type": "Organization",
    name: "VITAR Sport",
  },
  knowsAbout: [
    "E-commerce",
    "AI",
    "Sport Business",
    "Digital Transformation",
    "Team Management",
    "Vibe Coding",
  ],
  sameAs: ["https://www.linkedin.com/in/jurajgiacko/"],
  image: "https://juraj.digital/images/juraj-giacko.png",
  description:
    "CEO VITAR Sport. Transformujem biznisy, budujem efektívne tímy a staviam veci s AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
