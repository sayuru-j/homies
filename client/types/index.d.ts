export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  opImage: string;
  links: {
    facebook: string;
    instagram: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type NavBarConfig = {
  mainNav: NavItem[];
};
