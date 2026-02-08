import { Project } from "@/types";

export const projects: Project[] = [
  // === GAMES ===
  {
    id: "enervit-jiz50",
    name: "ENERVIT x Jizersk\u00e1 50",
    description: {
      sk: "Eduka\u010dn\u00e1 retro hra ako marketingov\u00e1 kampa\u0148 pre ENERVIT a Jizersk\u00fa 50. '90s feel, 7 v\u00fd\u017eivov\u00fdch stan\u00edc, mobile-ready. Fuel the Race.",
      en: "Retro educational game as a marketing campaign for ENERVIT x Jizersk\u00e1 50. '90s feel, 7 nutrition stations, mobile-ready. Fuel the Race.",
    },
    category: "game",
    tech: ["HTML", "CSS", "JavaScript", "Canvas"],
    level: 2,
    link: "https://jiz50.enervit.online/",
    status: "live",
  },
  {
    id: "hawkins-labs",
    name: "Hawkins Labs '91",
    description: {
      sk: "Stranger Things arcade hra ako viano\u010dn\u00fd d\u00e1r\u010dek. Leaderboard, combo syst\u00e9m, CRT efekt. Insert coin.",
      en: "Stranger Things arcade game built as a Christmas gift. Leaderboard, combo system, CRT effect. Insert coin.",
    },
    category: "game",
    tech: ["HTML", "CSS", "JavaScript"],
    level: 2,
    link: "https://hawkinslab.juraj.digital/",
    status: "live",
  },
  {
    id: "pivni-secese",
    name: "Pivn\u00ed Secese",
    description: {
      sk: "Mucha-style hra ako viano\u010dn\u00fd d\u00e1r\u010dek. Chytaj padaj\u00face pivsn\u00e9 poh\u00e1re, odkr\u00fdvaj secesn\u00fd obraz. Download tapety na konci.",
      en: "Mucha-style game built as a Christmas gift. Catch falling beer glasses, uncover an Art Nouveau painting. Wallpaper download at the end.",
    },
    category: "game",
    tech: ["HTML", "CSS", "JavaScript"],
    level: 2,
    link: "https://mucha.juraj.digital/",
    status: "live",
  },
  {
    id: "vedici-focus",
    name: "VEDICI Focus Challenge",
    description: {
      sk: "Interakt\u00edvna reak\u010dn\u00e1 hra ako go-to-market strat\u00e9gia pre zna\u010dku VEDICI. Leaderboard, email capture, gamifikovan\u00fd onboarding.",
      en: "Interactive reaction speed game as a go-to-market strategy for VEDICI brand. Leaderboard, email capture, gamified onboarding.",
    },
    category: "game",
    tech: ["HTML", "CSS", "JavaScript"],
    level: 3,
    link: "https://focus.vedici.gg/",
    status: "live",
  },

  // === INTERNAL TOOLS ===
  {
    id: "performance-hub",
    name: "VITAR Performance Hub",
    description: {
      sk: "Intern\u00fd analytick\u00fd dashboard. Napojen\u00fd na Pohoda, E1, Analytics cez API. Realtime firemn\u00e9 d\u00e1ta v dashboardoch. KPI, WBR, reporting.",
      en: "Internal analytics dashboard. Connected to Pohoda, E1, Analytics via API. Real-time company data in dashboards. KPIs, WBR, reporting.",
    },
    category: "internal-tool",
    tech: ["React", "TypeScript", "API", "Vercel"],
    level: 5,
    link: "https://vytrvalci-pro.digital/",
    status: "live",
  },
  {
    id: "qr-generator",
    name: "QR Gener\u00e1tor",
    description: {
      sk: "Intern\u00fd QR k\u00f3d gener\u00e1tor s analytikou pre VITAR Sport. Trackovan\u00e9 QR k\u00f3dy na produkty, eventy, kampane.",
      en: "Internal QR code generator with analytics for VITAR Sport. Tracked QR codes for products, events, campaigns.",
    },
    category: "internal-tool",
    tech: ["HTML", "JavaScript", "Analytics"],
    level: 2,
    link: "https://qrkod.enervit.online/",
    status: "live",
  },
  {
    id: "family-sync",
    name: "Rodinn\u00fd Sync",
    description: {
      sk: "Rodinn\u00fd kalend\u00e1r s CalDAV integr\u00e1ciou. Synchroniz\u00e1cia udalost\u00ed, vlastn\u00e9 API. Postaven\u00e9 za jeden ve\u010der.",
      en: "Family calendar with CalDAV integration. Event sync, custom API. Built in one evening.",
    },
    category: "internal-tool",
    tech: ["JavaScript", "CalDAV", "Vercel"],
    level: 4,
    link: "https://2026rodinnysync.vercel.app",
    status: "live",
  },
  {
    id: "pact-system",
    name: "PACT System",
    description: {
      sk: "Personal AI Command Terminal \u2014 multi-agent syst\u00e9m pre osobn\u00fa produktivitu. K\u00f3d, v\u00fdskum, obsah, nehnute\u013enosti.",
      en: "Personal AI Command Terminal \u2014 multi-agent system for personal productivity. Code, research, content, real estate.",
    },
    category: "internal-tool",
    tech: ["AI Agents", "Markdown", "Cursor"],
    level: 3,
    status: "live",
  },

  // === APPS ===
  {
    id: "fitness-tracker",
    name: "2026 Fitness Goals",
    description: {
      sk: "Osobn\u00e1 fitness appka. Sledovanie cvi\u010denia, alkoholu, streak-ov, ro\u010dn\u00fd progres. OCR, Supabase backend.",
      en: "Personal fitness app. Tracking workouts, alcohol, streaks, yearly progress. OCR, Supabase backend.",
    },
    category: "app",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind"],
    level: 4,
    status: "live",
  },
  {
    id: "real-estate-calc",
    name: "Hypote\u010dn\u00e1 Kalkula\u010dka",
    description: {
      sk: "Interakt\u00edvna kalkula\u010dka k\u00fapa vs pren\u00e1jom. Cash flow anal\u00fdza, LTV v\u00fdpo\u010dty, vizualiz\u00e1cia spl\u00e1tok.",
      en: "Interactive buy vs rent calculator. Cash flow analysis, LTV calculations, mortgage visualization.",
    },
    category: "utility",
    tech: ["HTML", "CSS", "JavaScript"],
    level: 2,
    status: "internal",
  },
  {
    id: "brand-content-engine",
    name: "Content Engine",
    description: {
      sk: "AI syst\u00e9m na generovanie social media obsahu. Anal\u00fdza \u0161t\u00fdlu, bilingv\u00e1lny output SK/EN.",
      en: "AI system for generating social media content. Style analysis, bilingual SK/EN output.",
    },
    category: "utility",
    tech: ["Claude", "ChatGPT", "Automation"],
    level: 3,
    status: "live",
  },
  {
    id: "juraj-digital",
    name: "juraj.digital",
    description: {
      sk: "T\u00e1to webovka. Osobn\u00fd brand, portfolio, bilingv\u00e1lne. Postaven\u00e9 za jedno poobedie.",
      en: "This website. Personal brand, portfolio, bilingual. Built in one afternoon.",
    },
    category: "web",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    level: 2,
    link: "https://juraj.digital",
    status: "live",
  },
];
