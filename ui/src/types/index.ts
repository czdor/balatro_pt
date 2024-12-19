export type TODO = any;
export type AvailableThemes = "dark" | "light";

export type Tabs = 0 | 1 | 2;

export type JokerType = "+c" | "+m" | "Xm" | "++" | "!!" | "..." | "+$";

export type RarityT = "common" | "uncommon" | "rare" | "legendary";

export interface Joker {
  Image: string;
  Name: string;
  Effect: string;
  Cost: string;
  Rarity: RarityT;
  UnlockRequirement: string;
  Type: string;
}

interface CardModifier {
  Appearance: string;
  Effect: string;
}
export interface Edition extends CardModifier {
  Edition: string;
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

interface Card {
  title: string;
  dataScheme: string[];
}

interface SpectralCards extends Card {
  data: SpectralData[];
}

export interface SpectralData {
  Image: string;
  Name: string;
  Description: string;
}

export interface TarotData extends SpectralData {}

interface TarotCards extends Card {
  data: TarotData[];
}

interface PlanetCards extends Card {
  data: PlanetData[];
}

export interface PlanetData {
  Image: string;
  Name: string;
  Addition: string;
  PokerHand: string;
  HandBaseScore: string;
}