import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Dnd Jaconia",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel",
        body: "EB Garamond",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f4e8d0",        // Warm parchment
          lightgray: "#d4c4a8",    // Aged paper
          gray: "#8b7355",         // Brown-gray
          darkgray: "#4a3728",     // Dark brown
          dark: "#2b1f14",         // Nearly black brown
          secondary: "#8b4513",    // Saddle brown
          tertiary: "#a0522d",     // Sienna
          highlight: "rgba(139, 69, 19, 0.15)",
          textHighlight: "#daa52088",
        },
        darkMode: {
          light: "#2b1f14",        // Dark leather/wood
          lightgray: "#3d2f1f",    // Slightly lighter
          gray: "#6b5d4f",         // Warm gray
          darkgray: "#c4b5a0",     // Light parchment text
          dark: "#e8dcc8",         // Cream text
          secondary: "#cd853f",    // Peru/copper
          tertiary: "#daa520",     // Goldenrod
          highlight: "rgba(205, 133, 63, 0.2)",
          textHighlight: "#daa52066",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config