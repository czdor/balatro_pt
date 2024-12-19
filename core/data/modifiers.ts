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

export const editions: {
  title: string;
  dataScheme: string[];
  data: Edition[];
} = {
  title: "Editions",
  dataScheme: ["Appearance", "Edition", "Effect"],
  data: [
    {
      Appearance: "/modifiers/Base_Card.webp",
      Edition: "Base",
      Effect: "No extra effects",
    },
    {
      Appearance: "/modifiers/FoilMod.webp",
      Edition: "Foil",
      Effect: `+50 Chips`,
    },
    {
      Appearance: "/modifiers/Holo.webp",
      Edition: "Holographic",
      Effect: `10`,
    },
    {
      Appearance: "/modifiers/PolychromeMod.webp",
      Edition: "Polychrome",
      Effect: `X1.5`,
    },
    {
      Appearance: "/modifiers/NegativeMod.webp",
      Edition: "Negative",
      Effect:
        "+1 Joker slot when on Jokers. +1 Consumable slot when on Consumables (only through Perkeo)",
    },
  ],
};

export const enhancements = {
  title: "Enhancements",
  dataScheme: ["Appearance", "Enhancement", "Effect"],
  data: [
    {
      Appearance: "/modifiers/Lucky.webp",
      Enhancement: "Lucky Card",
      Effect: `1 in 5 chance for +20 Mult. 1 in 15 chance to win $20. (Both can trigger on the same turn)`,
    },
    {
      Appearance: "/modifiers/Gold.webp",
      Enhancement: "Gold",
      Effect: `$3 if this card is held in hand at end of round`,
    },
    {
      Appearance: "/modifiers/Stone.webp",
      Enhancement: "Stone Card",
      Effect: `+50. No rank or suit. Card always scores`,
    },
    {
      Appearance: "/modifiers/Steel.webp",
      Enhancement: "Steel Card",
      Effect: `X1.5 while this card stays in hand`,
    },
    {
      Appearance: "/modifiers/Glass.webp",
      Enhancement: "Glass Card",
      Effect: `X2<br/> 1 in 4 chance to destroy card after all scoring is finished`,
    },
    {
      Appearance: "/modifiers/Wild.webp",
      Enhancement: "Wild Card",
      Effect: "Is considered to be every suit simultaneously",
    },
    {
      Appearance: "/modifiers/Mult.webp",
      Enhancement: "Mult Card",
      Effect: "4",
    },
    {
      Appearance: "/modifiers/Bonus.webp",
      Enhancement: "Bonus Card",
      Effect: "+30",
    },
  ],
};

export const seals = {
  title: "Seals",
  dataScheme: ["Appearance", "Seal", "Effect"],
  data: [
    {
      Appearance: "/modifiers/Gold_Seal.webp",
      Seal: "Gold Seal",
      Effect: `Earn $3 when this card is played and scores`,
    },
    {
      Appearance: "/modifiers/Red_Seal.webp",
      Seal: "Red Seal",
      Effect:
        "Retrigger this card 1 time. As well as when being scored in a poker hand, this also includes in-hand effects such as lowest-value card for Raised Fist Raised Fist, in-hand Kings from Baron Baron, Steel card multipliers, or gold earned from Reserved Parking Reserved Parking.",
    },
    {
      Appearance: "/modifiers/Blue_Seal.webp",
      Seal: "Blue Seal",
      Effect: `Creates the Planet card for final played poker hand of round if held in hand (Must have room)`,
    },
    {
      Appearance: "/modifiers/Purple_Seal.webp",
      Seal: "Purple Seal",
      Effect: `Creates a Tarot card when discarded (Must have room). Can be from player-elected discards, or from the automatic discard of "The Hook" boss blind.`,
    },
  ],
};
