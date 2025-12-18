import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Thomas (Tommy) Tsiftilis",
  logo: "/profile.jpg",
  email: "thomastsiftilis@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/thomasdt/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "X",
    url: "https://x.com/TDTomitee",
    icon: "mdi:twitter",
    external: true,
  },
  {
    title: "GitHub",
    url: "https://github.com/tommytsiftilis",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:thomastsiftilis@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Thomas Tsiftilis",
    description:
      "Welcome to my website! Currently building in the prediction markets space. Would love to chat if anything interests you here.",
    image: identity.logo,
  },
  role: "",
  description:
    "Welcome to my personal website.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Thomas Tsiftilis",
    description:
      "About Thomas Tsiftilis.",
    image: identity.logo,
  },
  subtitle: "About me",
  about: {
    description: ``, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: ``, // Markdown is supported
    items: [],
  },
  connect: {
    description: `Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Thomas Tsiftilis",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project One",
      description: "A sample project description. This is placeholder content.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/tommytsiftilis",
    },
    {
      title: "Project Two",
      description: "Another sample project. Replace with your actual projects.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/tommytsiftilis",
    },
    {
      title: "Project Three",
      description: "Yet another placeholder project to showcase your work.",
      image: "/demo-2.jpg",
      year: "2023",
      url: "https://github.com/tommytsiftilis",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Thomas Tsiftilis",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
