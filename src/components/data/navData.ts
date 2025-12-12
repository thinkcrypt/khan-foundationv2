export interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

export const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Who We Are",
    href: "/who-we-are",
    children: [
      { name: "Overview", href: "/who-we-are" },
      { name: "Objectives", href: "/who-we-are/objectives" },
      { name: "Our Team", href: "/who-we-are/team" },
      { name: "Development Partners", href: "/who-we-are/partners" },
    ],
  },
  {
    name: "Programs",
    href: "/programs",
    children: [
      { name: "Democracy Programs", href: "/programs/democracy" },
      { name: "Socio-Economic Programs", href: "/programs/socio-economic" },
      { name: "Human Rights Programs", href: "/programs/human-rights" },
      { name: "Advocacy & Gender", href: "/programs/advocacy-gender" },
    ],
  },
  {
    name: "Research",
    href: "/research",
    children: [
      { name: "Publications", href: "/research" },
      { name: "Collaborated Works", href: "/research/collaborated" },
      { name: "ARROW for Change", href: "/research/arrow" },
    ],
  },
  {
    name: "News & Media",
    href: "/news",
    children: [
      { name: "Recent News", href: "/news" },
      { name: "Success Stories", href: "/news/success-stories" },
      { name: "Renowned Visitors", href: "/news/visitors" },
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];