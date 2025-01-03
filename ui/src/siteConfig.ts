import { Language } from "./types";

export const coreApiUrl = "http://localhost:8000/api/v1";
export const apiRoutes = {
  search: "/search",
  jokers: "/jokers",
  tags: "/tags",
  consumables: {
    vouchers: "/consumables/vouchers",
    planet: "/consumables/planet",
    tarot: "/consumables/tarot",
    spectral: "/consumables/spectral",
  },
  modifiers: {
    editions: "/modifiers/editions",
    enhancements: "/modifiers/enhancements",
    seals: "/modifiers/seals",
  },
};
export const appName = "Balatro Wiki";
export const devName = "czdor";
export const links = {
  githubProfile: `https://github.com/${devName}`,
};
export const defaultTheme = "light";
export const playBalatroUrl = "https://www.playbalatro.com";

export const availableLanguages: Language[] = [
  {
    abbr: "es",
    lang: "Español",
  },
  {
    abbr: "en",
    lang: "English",
  },
];

export const defaultSelectedLang = availableLanguages[1];
