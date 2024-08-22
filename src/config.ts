import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://.pages.dev/", // replace this with your deployed domain
  author: "Rasib",
  desc: "A blog about learning new things and sharing",
  title: "rasib.dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Rasib0",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/Rasib0",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-rasib-nadeem/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:rasibnadeem101@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/rasibx",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/robotmain2",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtue.com/rasibn",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/Rasib0",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
];
