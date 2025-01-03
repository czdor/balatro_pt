export type TODO = any;
export type AvailableThemes = "dark" | "light";
export type AvailableLanguages = "es" | "en";

export type Tabs = 0 | 1 | 2;

export type JokerType = "+c" | "+m" | "Xm" | "++" | "!!" | "..." | "+$";

export type Language = {
  abbr: AvailableLanguages;
  lang: string;
};

export interface WeightedAttr {
  weight: number;
  value: string;
}

interface JokerAttr extends WeightedAttr {
  image: string;
}

export interface Joker {
  Joker: JokerAttr;
  Name: WeightedAttr;
  Effect: WeightedAttr;
  Cost: WeightedAttr;
  Rarity: WeightedAttr;
  Requirement: WeightedAttr;
  Type: WeightedAttr;
}

interface CardModifier {
  Appearance: string;
  Effect: string;
}
export interface Edition extends CardModifier {
  Edition: WeightedAttr;
}

export interface Enhancement extends CardModifier {
  Enhancement: string;
}

export interface Seal extends CardModifier {
  Seal: string;
}

export interface Tag {
  Image: string;
  Tag: string;
  Benefit: string;
  Notes: string;
  Ante: string;
}
export interface TagsT {
  title: string;
  dataScheme: string[];
  data: Tag[];
}
export interface SpectralData {
  Image: string;
  Name: string;
  Description: string;
}

export interface TarotData extends SpectralData {}

export interface PlanetData {
  Image: string;
  Name: string;
  Addition: string;
  PokerHand: string;
  HandBaseScore: string;
}
