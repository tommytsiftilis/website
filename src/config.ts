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
    "Welcome to my website! Currently building in the prediction markets space. Would love to chat if anything interests you here.",
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
  subtitle: "",
  about: {
    description: `Hey, I'm Tommy! I'm currently working in the prediction markets space.
<br><br>
I studied Industrial Engineering at UIUC, but I was always drawn toward finance and economics. That curiosity led to two summers interning at an options exchange, where I got pulled deeper into derivatives and trading. More recently, I spent a semester in Georgia Tech's Financial Engineering program before stepping back to explore other projects and interests.
<br><br>
Outside of work, I stay pretty active. I recently lucked out with a spot in the Chicago Marathon and am planning to take on a half Ironman once I'm fully healed from shoulder surgery. I'm also into camping and the outdoors, coffee, music, personal finance, and I recently started learning guitar.`, // Markdown is supported
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
      title: "Prophecy",
      description: "Unified Prediction Markets Terminal.",
      image: "/Prophecy.png",
      year: "2026",
      url: "https://prophecy-web.vercel.app/",
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
