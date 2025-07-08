import { Github } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
     domain: "https://astro-air.guoqi.dev",
     meta: {
          favicon: "/avatar.jpg",
          url: "https://blog.sunguoqi.com",
     },
     googleAnalyticsId: "",
     social: [
          {
               icon: Github,
               label: "GitHub",
               link: "https://github.com/femas66",
          },
     ],
     rss: true,
     navigation: {
          home: true,
          archive: true,
          project: true,
          about: true,
     },
     latestPosts: 8,
     comments: {
          enabled: true,
          twikoo: {
               enabled: true,
               // replace with your own envId
               envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
          },
     },
}

export const en = {
     ...common,
     siteName: "Femas Akbar Faturrohim",
     meta: {
          ...common.meta,
          title: "Femas Akbar Faturrohim",
          slogan: "Focusing on programming",
          description: "Programming",
     },
     navigation: {
          ...common.navigation,
     },
     pageMeta: {
          archive: {
               title: "All Posts",
               description: "Here are all Femas postss",
               ogImage: "/images/page-meta/en/archive.png",
          },
          project: {
               title: "My Projects",
               description: "Below are all Femas projects",
               ogImage: "/images/page-meta/en/archive.png",
          },
          about: {
               title: "About Me",
               description: "Here is Femas's self-introduction",
               ogImage: "/images/page-meta/en/about.png",
          },
     },
}
