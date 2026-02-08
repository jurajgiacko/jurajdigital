export type Language = "sk" | "en";

export interface Project {
  id: string;
  name: string;
  description: {
    sk: string;
    en: string;
  };
  category: "internal-tool" | "app" | "game" | "utility" | "web";
  tech: string[];
  level: number; // 0-5 inspired by vibecoded.cz
  link?: string;
  github?: string;
  image?: string; // path to screenshot in /public/images/projects/
  status: "live" | "prototype" | "internal" | "archived";
}

export interface ExperienceItem {
  company: string;
  role: {
    sk: string;
    en: string;
  };
  period: string;
  description: {
    sk: string;
    en: string;
  };
  highlights: {
    sk: string[];
    en: string[];
  };
  current?: boolean;
}

export interface Translations {
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    subtitle: string;
    cta_projects: string;
    cta_contact: string;
  };
  about: {
    title: string;
    bio: string;
    pillars: {
      business: { title: string; description: string };
      sport: { title: string; description: string };
      ai: { title: string; description: string };
    };
    stats: {
      years: string;
      projects: string;
      brands: string;
    };
  };
  experience: {
    title: string;
    present: string;
  };
  projects: {
    title: string;
    subtitle: string;
    filter_all: string;
    categories: {
      "internal-tool": string;
      app: string;
      game: string;
      utility: string;
      web: string;
    };
    status: {
      live: string;
      prototype: string;
      internal: string;
      archived: string;
    };
    view_project: string;
    view_code: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email_label: string;
    connect: string;
  };
  footer: {
    built_with: string;
    rights: string;
  };
}
