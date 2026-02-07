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
        "Riadim \u0161portov\u00e9 zna\u010dky, transform\u00e1jem biznisy a budujem n\u00e1stroje s AI. Aktu\u00e1lne CEO VITAR Sport.",
      cta_projects: "Pozri \u010do staviam",
      cta_contact: "Ozvi sa",
    },
    about: {
      title: "M\u00f4j svet",
      bio: "",
      pillars: {
        business: {
          title: "Biznisov\u00fd oper\u00e1tor",
          description:
            "CEO VITAR Sport. \u0160k\u00e1lujem ENERVIT na CZ&SK trhoch. Predtým Alza, GymBeam, EXIsport. 15+ rokov v e-commerce a leadershipe s full P&L zodpovednos\u0165ou.",
        },
        sport: {
          title: "\u0160portov\u00fd \u010dlov\u00e9k",
          description:
            "\u0160port nie je len pr\u00e1ca \u2014 je to \u017eivotn\u00fd \u0161t\u00fdl. Beh, fitness, Ji\u017eersk\u00e1 50. Riadim \u0161portov\u00e9 zna\u010dky, preto\u017ee im rozumiem ako pou\u017e\u00edvate\u013e aj ako mana\u017e\u00e9r.",
        },
        ai: {
          title: "AI builder",
          description:
            "Stav\u00e1m intern\u00e9 n\u00e1stroje, automatiz\u00e1cie a dashboardy. Vibe coding je m\u00f4j sp\u00f4sob ako r\u00fdchlo rie\u0161i\u0165 probl\u00e9my. DONE > PERFECT.",
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
      title: "\u010co som postavil s AI",
      subtitle:
        "Intern\u00e9 n\u00e1stroje, aplik\u00e1cie a utility, ktor\u00e9 re\u00e1lne pou\u017e\u00edvam. Ka\u017ed\u00fd rie\u0161i konkr\u00e9tny probl\u00e9m.",
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
        "Spolupr\u00e1ca, konzult\u00e1cia, alebo len v\u00fdmena n\u00e1padov \u2014 ozvite sa.",
      email_label: "Email",
      connect: "Nap\u00ed\u0161te mi",
    },
    footer: {
      built_with: "Postaven\u00e9 s AI pomocou",
      rights: "V\u0161etky pr\u00e1va vyhraden\u00e9.",
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
        "I run sports brands, turn around businesses, and build tools with AI. Currently CEO of VITAR Sport.",
      cta_projects: "See what I\u2019m building",
      cta_contact: "Say hi",
    },
    about: {
      title: "My World",
      bio: "",
      pillars: {
        business: {
          title: "Business Operator",
          description:
            "CEO of VITAR Sport. Scaling ENERVIT across CZ&SK markets. Previously Alza, GymBeam, EXIsport. 15+ years in e-commerce & leadership with full P&L accountability.",
        },
        sport: {
          title: "Sports Person",
          description:
            "Sport isn\u2019t just work \u2014 it\u2019s a lifestyle. Running, fitness, Jizerska 50. I manage sports brands because I understand them as a user and as a manager.",
        },
        ai: {
          title: "AI Builder",
          description:
            "I build internal tools, automations, and dashboards. Vibe coding is my way to solve problems fast. DONE > PERFECT.",
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
      title: "What I\u2019m building with AI",
      subtitle:
        "Internal tools, apps, and utilities I actually use. Each one solves a real problem.",
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
        "Collaboration, consultation, or just exchanging ideas \u2014 reach out.",
      email_label: "Email",
      connect: "Get in touch",
    },
    footer: {
      built_with: "Built with AI using",
      rights: "All rights reserved.",
    },
  },
};

// Career journey - not a CV, just key chapters
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
      description: "4.5 roka. E-commerce director. 20%+ YoY rast tri roky po sebe. Braz\u00edlia a Eur\u00f3pa.",
    },
    {
      year: "2019\u20132020",
      title: "Alza.cz",
      description: "Sport +65% YoY. Drugstore +85% YoY. T\u00edm 12 \u013eud\u00ed.",
    },
    {
      year: "2019",
      title: "GymBeam",
      description: "Interim COO. 1M\u20ac budget. 7-\u010dlenn\u00fd t\u00edm.",
    },
    {
      year: "2017\u20132019",
      title: "EXIsport",
      description: "65% YoY rast. Expanzia CZ & RO. V\u00ed\u0165az MastersGate 2018.",
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
      description: "4.5 years. E-commerce director. 20%+ YoY growth three years running. Brazil & Europe.",
    },
    {
      year: "2019\u20132020",
      title: "Alza.cz",
      description: "Sport +65% YoY. Drugstore +85% YoY. 12-person team.",
    },
    {
      year: "2019",
      title: "GymBeam",
      description: "Interim COO. \u20ac1M budget. 7-person team.",
    },
    {
      year: "2017\u20132019",
      title: "EXIsport",
      description: "65% YoY growth. CZ & RO expansion. MastersGate 2018 winner.",
    },
  ],
};

export const beliefs = {
  sk: [
    "Turnaround first. Scale second.",
    "DONE > PERFECT.",
    "\u0160port nie je len pr\u00e1ca \u2014 je to \u017eivotn\u00fd \u0161t\u00fdl.",
    "AI nasadzujem tam, kde re\u00e1lne h\u00fdbe v\u00fdsledkami.",
    "Najlep\u0161\u00ed mana\u017e\u00e9r je ten, ktor\u00fd vie odma\u010dka\u0165 veci aj s\u00e1m.",
  ],
  en: [
    "Turnaround first. Scale second.",
    "DONE > PERFECT.",
    "Sport isn\u2019t just work \u2014 it\u2019s a lifestyle.",
    "I deploy AI where it actually moves the needle.",
    "The best manager is the one who can roll up their sleeves too.",
  ],
};
