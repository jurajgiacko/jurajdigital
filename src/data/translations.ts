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
        "Transformujem biznisy. Budujem efekt\u00edvne t\u00edmy. Staviam veci s AI. CEO s builder mindsetom.",
      cta_projects: "\u010co som postavil",
      cta_contact: "Zosta\u0148 v kontakte",
    },
    about: {
      title: "M\u00f4j svet",
      bio: "",
      pillars: {
        business: {
          title: "Biznisov\u00fd oper\u00e1tor",
          description:
            "V\u00fdsledky stav\u00e1m na \u013eu\u010foch. Turnaround, \u0161k\u00e1lovanie, efekt\u00edvne t\u00edmy \u2014 v\u017edy to za\u010d\u00edna aj kon\u010d\u00ed pri spr\u00e1vnych \u013eu\u010foch na spr\u00e1vnych miestach. ENERVIT, Alza, GymBeam, EXIsport. 15 rokov v z\u00e1kopoch e-commerce.",
        },
        sport: {
          title: "Sport focus",
          description:
            "Bav\u00ed ma prepojenie businessu a \u0161portu. Aktu\u00e1lne ENERVIT a RoyalBay pre CZ&SK trh. Najlep\u0161ie na tom je ten challenge \u2014 v\u00edkendov\u00fd polmarat\u00f3n? I'm in!",
        },
        ai: {
          title: "AI builder",
          description:
            "Vdaka AI a vibe codingu sa pos\u00favam 10\u00d7 r\u00fdchlej\u0161ie. N\u00e1pad r\u00e1no, prototyp ve\u010der. Intern\u00e9 n\u00e1stroje, hry, dashboardy, automatiz\u00e1cie. DONE > PERFECT.",
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
      title: "Zosta\u0148 v kontakte",
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
        "I transform businesses. I build effective teams. I build things with AI. CEO with a builder mindset.",
      cta_projects: "What I\u2019ve built",
      cta_contact: "Stay in touch",
    },
    about: {
      title: "My World",
      bio: "",
      pillars: {
        business: {
          title: "Business Operator",
          description:
            "Results are built on people. Turnarounds, scaling, effective teams \u2014 it always starts and ends with the right people in the right seats. ENERVIT, Alza, GymBeam, EXIsport. 15 years in the trenches of e-commerce.",
        },
        sport: {
          title: "Sport Focus",
          description:
            "I love the intersection of business and sport. Currently ENERVIT and RoyalBay for the CZ&SK market. The best part is the challenge \u2014 weekend half marathon? I'm in!",
        },
        ai: {
          title: "AI Builder",
          description:
            "Thanks to AI and vibe coding, I move 10\u00d7 faster. Idea in the morning, prototype by evening. Internal tools, games, dashboards, automations. DONE > PERFECT.",
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
      title: "Stay in touch",
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
    "Najlep\u0161\u00ed biznis je tam, kde sa \u0161port a pr\u00e1ca pret\u00ednaj\u00fa.",
    "AI nasadzujem tam, kde to h\u00fdbe \u010d\u00edslami. Nie tam, kde to vyzer\u00e1 cool.",
    "Doba sa zmenila. V\u00fdhodou je mana\u017e\u00e9r, ktor\u00fd vie vyhrn\u00fa\u0165 ruk\u00e1vy \u2014 postavi\u0165 prototyp, vyrie\u0161i\u0165 probl\u00e9m, nie len delegova\u0165.",
  ],
  en: [
    "Turnaround first. Scale second.",
    "DONE > PERFECT.",
    "The best business lives where sport and work intersect.",
    "I deploy AI where it moves numbers. Not where it looks cool.",
    "The game has changed. The edge goes to the manager who can roll up their sleeves \u2014 build a prototype, solve the problem, not just delegate.",
  ],
};
