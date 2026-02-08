import { Translations } from "@/types";

export const translations: Record<"sk" | "en", Translations> = {
  sk: {
    nav: {
      about: "Svet",
      experience: "Pr\u00edbeh",
      projects: "Projekty",
      contact: "Kontakt",
    },
    hero: {
      greeting: "",
      name: "Juraj Giacko",
      tagline: "Business \u00d7 Sport \u00d7 AI",
      subtitle:
        "Riadim \u0161portov\u00e9 zna\u010dky. Transformujem biznisy. Stav\u00e1m veci s AI. Aktu\u00e1lne CEO VITAR Sport.",
      cta_projects: "\u010co som postavil",
      cta_contact: "Ozvi sa",
    },
    about: {
      title: "M\u00f4j svet",
      bio: "",
      pillars: {
        business: {
          title: "Biznisov\u00fd oper\u00e1tor",
          description:
            "Najprv stabilizova\u0165. Potom \u0161k\u00e1lova\u0165. P&L, KPI, WBR \u2014 nie PowerPointy, ale \u010d\u00edsla, ktor\u00e9 sa h\u00fdbu. ENERVIT, Alza, GymBeam, EXIsport. 15 rokov v z\u00e1kopoch e-commerce.",
        },
        sport: {
          title: "\u0160portovec",
          description:
            "\u0160port nie je len pr\u00e1ca \u2014 je to oper\u00e1k. Beh, fitness, Jizersk\u00e1 50. Riadim \u0161portov\u00e9 zna\u010dky, preto\u017ee im rozumiem z oboch str\u00e1n barikat\u00e1dy.",
        },
        ai: {
          title: "AI builder",
          description:
            "Ke\u010f m\u00e1m probl\u00e9m, postav\u00edm rie\u0161enie. Intern\u00e9 n\u00e1stroje, hry, dashboardy, automatiz\u00e1cie. V\u0161etko vibe-coded. DONE > PERFECT.",
        },
      },
      stats: {
        years: "rokov v leadershipe",
        projects: "AI projektov",
        brands: "zna\u010diek v porte",
      },
    },
    experience: {
      title: "Pr\u00edbeh",
      present: "s\u00fa\u010dasnos\u0165",
    },
    projects: {
      title: "Postaven\u00e9 s AI",
      subtitle:
        "\u017diadne dem\u00e1. Ka\u017ed\u00e1 vec tu rie\u0161i re\u00e1lny probl\u00e9m alebo prin\u00e1\u0161a re\u00e1lnu rados\u0165.",
      filter_all: "V\u0161etko",
      categories: {
        "internal-tool": "Intern\u00e9 n\u00e1stroje",
        app: "Aplik\u00e1cie",
        game: "Hry",
        utility: "Utility",
        web: "Weby",
      },
      status: {
        live: "Live",
        prototype: "Prototyp",
        internal: "Intern\u00e9",
        archived: "Arch\u00edv",
      },
      view_project: "Otvori\u0165",
      view_code: "K\u00f3d",
    },
    contact: {
      title: "Spojme sa",
      subtitle:
        "Spolupr\u00e1ca, konzult\u00e1cia, n\u00e1pad, alebo len kafe.",
      email_label: "Email",
      connect: "Nap\u00ed\u0161te mi",
    },
    footer: {
      built_with: "Postaven\u00e9 s AI cez",
      rights: "",
    },
  },
  en: {
    nav: {
      about: "World",
      experience: "Story",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "",
      name: "Juraj Giacko",
      tagline: "Business \u00d7 Sport \u00d7 AI",
      subtitle:
        "I run sports brands. I turn around businesses. I build things with AI. Currently CEO of VITAR Sport.",
      cta_projects: "What I\u2019ve built",
      cta_contact: "Say hi",
    },
    about: {
      title: "My World",
      bio: "",
      pillars: {
        business: {
          title: "Business Operator",
          description:
            "Turnaround first. Scale second. P&L, KPIs, WBR \u2014 not slide decks, but numbers that move. ENERVIT, Alza, GymBeam, EXIsport. 15 years in the trenches of e-commerce.",
        },
        sport: {
          title: "Athlete",
          description:
            "Sport isn\u2019t just a job \u2014 it\u2019s the operating system. Running, fitness, Jizersk\u00e1 50. I manage sports brands because I understand them from both sides.",
        },
        ai: {
          title: "AI Builder",
          description:
            "When I have a problem, I build the solution. Internal tools, games, dashboards, automations. All vibe-coded. DONE > PERFECT.",
        },
      },
      stats: {
        years: "years in leadership",
        projects: "AI projects",
        brands: "brands managed",
      },
    },
    experience: {
      title: "Story",
      present: "present",
    },
    projects: {
      title: "Built with AI",
      subtitle:
        "No demos. Every single thing here solves a real problem or brings real joy.",
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
      title: "Let\u2019s connect",
      subtitle:
        "Collaboration, consultation, an idea, or just coffee.",
      email_label: "Email",
      connect: "Get in touch",
    },
    footer: {
      built_with: "Built with AI via",
      rights: "",
    },
  },
};

// Career journey - compact chips, not a CV
export const storyChapters = {
  sk: [
    {
      year: "2025\u2013",
      title: "CEO VITAR Sport",
      description: "\u0160k\u00e1lujem ENERVIT. AI-enabled operations. \u0160portov\u00e1 v\u00fd\u017eiva & lifestyle.",
    },
    {
      year: "2020\u20132025",
      title: "REDA",
      description: "E-commerce director. 20%+ YoY rast tri roky po sebe. Braz\u00edlia a Eur\u00f3pa.",
    },
    {
      year: "2019\u20132020",
      title: "Alza.cz",
      description: "Sport +65%, Drugstore +85%. T\u00edm 12 \u013eud\u00ed.",
    },
    {
      year: "2019",
      title: "GymBeam",
      description: "Interim COO. \u20ac1M budget.",
    },
    {
      year: "2017\u20132019",
      title: "EXIsport",
      description: "+65% YoY. Expanzia CZ & RO. MastersGate 2018.",
    },
  ],
  en: [
    {
      year: "2025\u2013",
      title: "CEO VITAR Sport",
      description: "Scaling ENERVIT. AI-enabled ops. Sports nutrition & lifestyle.",
    },
    {
      year: "2020\u20132025",
      title: "REDA",
      description: "E-commerce director. 20%+ YoY growth three years running. Brazil & Europe.",
    },
    {
      year: "2019\u20132020",
      title: "Alza.cz",
      description: "Sport +65%, Drugstore +85%. 12-person team.",
    },
    {
      year: "2019",
      title: "GymBeam",
      description: "Interim COO. \u20ac1M budget.",
    },
    {
      year: "2017\u20132019",
      title: "EXIsport",
      description: "+65% YoY. CZ & RO expansion. MastersGate 2018.",
    },
  ],
};

export const beliefs = {
  sk: [
    "Najprv stabilizova\u0165. Potom \u0161k\u00e1lova\u0165.",
    "DONE > PERFECT.",
    "\u0160port nie je pr\u00e1ca. \u0160port je operak.",
    "AI nasadzujem tam, kde to h\u00fdbe \u010d\u00edslami. Nie tam, kde to vyzer\u00e1 cool.",
    "Najlep\u0161\u00ed mana\u017e\u00e9r vie odma\u010dka\u0165 veci aj s\u00e1m.",
  ],
  en: [
    "Turnaround first. Scale second.",
    "DONE > PERFECT.",
    "Sport isn\u2019t a job. Sport is the operating system.",
    "I deploy AI where it moves numbers. Not where it looks cool.",
    "The best manager can roll up their sleeves too.",
  ],
};
