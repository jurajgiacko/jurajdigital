import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "fitness-tracker",
    name: "2026 Fitness Goals",
    description: {
      sk: "Osobná fitness aplikácia na sledovanie cvičenia, alkoholu, streak-ov a ročného progresu. Kalendárový prehľad, OCR na screenshoty, Supabase backend.",
      en: "Personal fitness app tracking workouts, alcohol intake, streaks, and yearly progress. Calendar overview, OCR for screenshots, Supabase backend.",
    },
    category: "app",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
    level: 4,
    status: "live",
  },
  {
    id: "family-sync",
    name: "Rodinný Sync 2026",
    description: {
      sk: "Rodinný kalendár s CalDAV integráciou pre synchronizáciu udalostí. Deploynuté na Vercel s vlastným API.",
      en: "Family calendar with CalDAV integration for event synchronization. Deployed on Vercel with custom API.",
    },
    category: "internal-tool",
    tech: ["JavaScript", "CalDAV", "Vercel"],
    level: 4,
    link: "https://2026rodinnysync.vercel.app",
    status: "live",
  },
  {
    id: "real-estate-calc",
    name: "Hypotečná Kalkulačka",
    description: {
      sk: "Interaktívna kalkulačka na porovnanie scenárov kúpy vs prenájmu nehnuteľnosti. Cash flow analýza, LTV výpočty, vizualizácia splátok.",
      en: "Interactive calculator comparing buy vs rent real estate scenarios. Cash flow analysis, LTV calculations, mortgage payment visualization.",
    },
    category: "utility",
    tech: ["HTML", "CSS", "JavaScript"],
    level: 2,
    status: "internal",
  },
  {
    id: "ai-operations-dashboard",
    name: "AI Operations Dashboard",
    description: {
      sk: "Interný KPI dashboard pre sledovanie obchodných metrík s AI-powered insightmi. WBR/MBR reporting automatizácia.",
      en: "Internal KPI dashboard for tracking business metrics with AI-powered insights. WBR/MBR reporting automation.",
    },
    category: "internal-tool",
    tech: ["React", "TypeScript", "n8n", "Make"],
    level: 4,
    status: "internal",
  },
  {
    id: "brand-content-engine",
    name: "Content Engine",
    description: {
      sk: "Systém na generovanie a plánovanie social media obsahu s AI. Analýza štýlu, generovanie postov, bilingválny output SK/EN.",
      en: "AI-powered system for generating and planning social media content. Style analysis, post generation, bilingual SK/EN output.",
    },
    category: "utility",
    tech: ["Claude", "ChatGPT", "Markdown", "Automation"],
    level: 3,
    status: "live",
  },
  {
    id: "pact-system",
    name: "PACT System",
    description: {
      sk: "Personal AI Command Terminal - multi-agent systém pre osobnú produktivitu. Agenti pre kód, výskum, obsah a nehnuteľnosti.",
      en: "Personal AI Command Terminal - multi-agent system for personal productivity. Agents for code, research, content, and real estate.",
    },
    category: "internal-tool",
    tech: ["AI Agents", "Markdown", "Cursor"],
    level: 3,
    status: "live",
  },
];
