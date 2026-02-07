import { Translations } from "@/types";

export const translations: Record<"sk" | "en", Translations> = {
  sk: {
    nav: {
      about: "O mne",
      experience: "Skúsenosti",
      projects: "Projekty",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Ahoj, som",
      name: "Juraj Giacko",
      tagline: "Business \u00d7 Sport \u00d7 AI",
      subtitle:
        "Transformujem biznisy, riadim športové značky a budujem s AI. CEO VITAR Sport | 15+ rokov v e-commerce a leadershipe.",
      cta_projects: "Moje projekty",
      cta_contact: "Kontakt",
    },
    about: {
      title: "Tri piliere",
      bio: "Som executive director so zázemím v e-commerce, FMCG a športovom priemysle. Verím v jednoduchý princíp: Turnaround first. Scale second. Technológie nasadzujem tam, kde reálne hýbu výsledkami.",
      pillars: {
        business: {
          title: "Business & Management",
          description:
            "Full P&L zodpovednosť, vedenie tímov 10-15+ ľudí, turnaround a škálovanie biznisovcez finance, sales a operations.",
        },
        sport: {
          title: "Šport",
          description:
            "CEO VITAR Sport, škálovanie ENERVIT na CZ&SK trhoch. Predtým Alza Sport, GymBeam, EXIsport. Šport je nielen práca, ale aj životný štýl.",
        },
        ai: {
          title: "AI & Tech",
          description:
            "AI-enabled operations v praxi. Automatizácie, dashboardy, vibe coding interných nástrojov. DONE > PERFECT.",
        },
      },
      stats: {
        years: "rokov v leadershipe",
        projects: "AI projektov",
        brands: "značiek v porte",
      },
    },
    experience: {
      title: "Kariéra",
      present: "súčasnosť",
    },
    projects: {
      title: "Čo som postavil s AI",
      subtitle:
        "Interné nástroje, aplikácie a utility, ktoré reálne používam. Žiadne demo projekty \u2014 každý rieši konkrétny problém.",
      filter_all: "Všetko",
      categories: {
        "internal-tool": "Interné nástroje",
        app: "Aplikácie",
        game: "Hry",
        utility: "Utility",
        web: "Weby",
      },
      status: {
        live: "Live",
        prototype: "Prototyp",
        internal: "Interné",
        archived: "Archív",
      },
      view_project: "Otvoriť",
      view_code: "Kód",
    },
    contact: {
      title: "Spojme sa",
      subtitle:
        "Či už ide o spoluprácu, konzultáciu, alebo len výmenu nápadov \u2014 ozvite sa.",
      email_label: "Email",
      connect: "Napíšte mi",
    },
    footer: {
      built_with: "Postavené s AI pomocou",
      rights: "Všetky práva vyhradené.",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Juraj Giacko",
      tagline: "Business \u00d7 Sport \u00d7 AI",
      subtitle:
        "I transform businesses, lead sports brands, and build with AI. CEO of VITAR Sport | 15+ years in e-commerce & leadership.",
      cta_projects: "My Projects",
      cta_contact: "Contact",
    },
    about: {
      title: "Three Pillars",
      bio: "I'm an executive director with a background in e-commerce, FMCG, and the sports industry. I believe in a simple principle: Turnaround first. Scale second. I deploy technology where it actually moves the needle.",
      pillars: {
        business: {
          title: "Business & Management",
          description:
            "Full P&L accountability, leading teams of 10-15+ people, turning around and scaling businesses across finance, sales, and operations.",
        },
        sport: {
          title: "Sport",
          description:
            "CEO of VITAR Sport, scaling ENERVIT across CZ&SK markets. Previously Alza Sport, GymBeam, EXIsport. Sport is not just work \u2014 it's a lifestyle.",
        },
        ai: {
          title: "AI & Tech",
          description:
            "AI-enabled operations in practice. Automations, dashboards, vibe coding internal tools. DONE > PERFECT.",
        },
      },
      stats: {
        years: "years in leadership",
        projects: "AI projects",
        brands: "brands managed",
      },
    },
    experience: {
      title: "Career",
      present: "present",
    },
    projects: {
      title: "What I\u2019ve Built with AI",
      subtitle:
        "Internal tools, apps, and utilities I actually use. No demo projects \u2014 every single one solves a real problem.",
      filter_all: "All",
      categories: {
        "internal-tool": "Internal Tools",
        app: "Apps",
        game: "Games",
        utility: "Utilities",
        web: "Websites",
      },
      status: {
        live: "Live",
        prototype: "Prototype",
        internal: "Internal",
        archived: "Archived",
      },
      view_project: "Open",
      view_code: "Code",
    },
    contact: {
      title: "Let\u2019s Connect",
      subtitle:
        "Whether it's a collaboration, consultation, or just exchanging ideas \u2014 reach out.",
      email_label: "Email",
      connect: "Get in touch",
    },
    footer: {
      built_with: "Built with AI using",
      rights: "All rights reserved.",
    },
  },
};

export const experiences = {
  sk: [
    {
      company: "VITAR, s.r.o.",
      role: "CEO VITAR Sport & Director of Digital Growth",
      period: "Sep 2025",
      current: true,
      description:
        "Full P&L zodpovednosť za športovú divíziu. Škálovanie ENERVIT na CZ&SK trhoch. AI-enabled operations, nové biznis modely, digitálna transformácia.",
      highlights: [
        "Športová výživa & lifestyle kategórie",
        "AI automatizácie v operations",
        "Cross-border digitálna expanzia",
      ],
    },
    {
      company: "REDA a.s.",
      role: "Director of E-commerce Marketing",
      period: "Dec 2020 \u2013 Jun 2025",
      current: false,
      description:
        "E-commerce stratégia a implementácia. 20%+ YoY rast online tri roky po sebe. Digitalizácia spoločnosti v Brazílii a Európe.",
      highlights: [
        "20%+ YoY rast online",
        "Vedenie e-commerce a SMB sales tímu",
        "Digitalizácia naprieč Brazíliou a Európou",
      ],
    },
    {
      company: "Alza.cz",
      role: "Head of Traffic Management",
      period: "Nov 2019 \u2013 Oct 2020",
      current: false,
      description:
        "Vedenie 12-členného tímu. Správa segmentov Beauty, Drugstore a Sport ako ich CMO. Výrazný YoY rast vo všetkých segmentoch.",
      highlights: [
        "Drugstore: +85% YoY",
        "Sport: +65% YoY",
        "Beauty: +25% YoY",
      ],
    },
    {
      company: "GymBeam",
      role: "Interim COO",
      period: "May \u2013 Sep 2019",
      current: false,
      description:
        "Vedenie 7-členného business tímu počas sabbatical leave manažéra. Nákup tovaru s budgetom 1M EUR. Vendor marketing stratégia.",
      highlights: [
        "Budget nákupu 1M EUR",
        "Nová vendor marketing stratégia",
        "Osobný rozvoj tímu",
      ],
    },
    {
      company: "EXIsport",
      role: "Head of E-commerce",
      period: "May 2017 \u2013 Mar 2019",
      current: false,
      description:
        "E-commerce pre slovenský trh. Expanzia do Česka a Rumunska \u2014 prvé trhy, na ktoré EXIsport expandoval. Víťaz MastersGate 2018.",
      highlights: [
        "65% YoY rast revenue",
        "Expanzia CZ & RO",
        "Víťaz MastersGate 2018",
      ],
    },
  ],
  en: [
    {
      company: "VITAR, s.r.o.",
      role: "CEO VITAR Sport & Director of Digital Growth",
      period: "Sep 2025",
      current: true,
      description:
        "Full P&L responsibility for the sports division. Scaling ENERVIT across CZ&SK markets. AI-enabled operations, new business models, digital transformation.",
      highlights: [
        "Sports nutrition & lifestyle categories",
        "AI automations in operations",
        "Cross-border digital expansion",
      ],
    },
    {
      company: "REDA a.s.",
      role: "Director of E-commerce Marketing",
      period: "Dec 2020 \u2013 Jun 2025",
      current: false,
      description:
        "E-commerce strategy and implementation. 20%+ YoY growth online for three consecutive years. Company digitalization across Brazil and Europe.",
      highlights: [
        "20%+ YoY online growth",
        "Led e-commerce and SMB sales team",
        "Digitalization across Brazil & Europe",
      ],
    },
    {
      company: "Alza.cz",
      role: "Head of Traffic Management",
      period: "Nov 2019 \u2013 Oct 2020",
      current: false,
      description:
        "Led a 12-person team managing Beauty, Drugstore, and Sport segments as their CMO. Achieved significant YoY growth across all segments.",
      highlights: [
        "Drugstore: +85% YoY",
        "Sport: +65% YoY",
        "Beauty: +25% YoY",
      ],
    },
    {
      company: "GymBeam",
      role: "Interim COO",
      period: "May \u2013 Sep 2019",
      current: false,
      description:
        "Led a 7-member business team during manager's sabbatical. Responsible for goods procurement with a 1M EUR budget. Built vendor marketing strategy.",
      highlights: [
        "1M EUR procurement budget",
        "New vendor marketing strategy",
        "Team personal development",
      ],
    },
    {
      company: "EXIsport",
      role: "Head of E-commerce",
      period: "May 2017 \u2013 Mar 2019",
      current: false,
      description:
        "E-commerce for the Slovak market. Expansion to Czechia and Romania \u2014 the first markets EXIsport expanded to. MastersGate 2018 winner.",
      highlights: [
        "65% YoY revenue growth",
        "CZ & RO expansion",
        "MastersGate 2018 winner",
      ],
    },
  ],
};
