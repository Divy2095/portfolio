export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  status: string;
  hero: {
    greeting: string;
    headline: string;
    intro: string;
    details: string;
  };
  links: {
    github: string;
    email: string;
  };
  navItems: NavItem[];
}

export const SITE_CONFIG: SiteConfig = {
  name: "Divy",
  tagline: "Engineering student & software builder",
  status: "Exploring systems, Linux, graphics & web",
  hero: {
    greeting: "Hey, I'm Divy!",
    headline: "I build software inspired by a genuine curiosity about how computers work.",
    intro: "Engineering student driven to understand software from first principles. I love building tools, experimenting with code, and digging deeper into systems.",
    details: "Currently focusing on C++, Linux, graphics pipelines, and full-stack web applications. Believer in building things to truly understand how they work under the hood.",
  },
  links: {
    github: "https://github.com/Divy2095",
    email: "divydedaniya@gmail.com",
  },
  navItems: [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
