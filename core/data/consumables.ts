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

export interface TarotData extends SpectralData {}

export const spectralCards = {
  data: [
    {
      Spectral: {
        value: "Familiar",
        weight: 0,
        image: "/consumables/spectral-cards/Spectral_Familiar.webp",
      },
      Description: {
        value:
          "Destroy 1 random card in your hand, but add 3 random Enhanced face cards instead.",
        weight: 0,
      },
    },
    {
      Spectral: {
        value: "Grim",
        weight: 1,
        image: "/consumables/spectral-cards/Spectral_Grim.webp",
      },
      Description: {
        value:
          "Destroy 1 random card in your hand, but add 2 random Enhanced Aces instead.",
        weight: 1,
      },
    },
    {
      Spectral: {
        value: "Incantation",
        weight: 2,
        image: "/consumables/spectral-cards/Spectral_Incantation.webp",
      },
      Description: {
        value:
          "Destroy 1 random card in your hand, but add 4 random Enhanced numbered cards instead.",
        weight: 2,
      },
    },
    {
      Spectral: {
        value: "Talisman",
        weight: 3,
        image: "/consumables/spectral-cards/Spectral_Talisman.webp",
      },
      Description: {
        value: "Add a Gold Seal to 1 selected card.",
        weight: 3,
      },
    },
    {
      Spectral: {
        value: "Aura",
        weight: 4,
        image: "/consumables/spectral-cards/Spectral_Aura.webp",
      },
      Description: {
        value:
          "Add Foil, Holographic, or Polychrome edition (determined at random) to 1 selected card in hand.",
        weight: 4,
      },
    },
    {
      Spectral: {
        value: "Wraith",
        weight: 5,
        image: "/consumables/spectral-cards/Spectral_Wraith.webp",
      },
      Description: {
        value:
          "Creates a random Rare Joker (must have room), but sets money to $0.",
        weight: 5,
      },
    },
    {
      Spectral: {
        value: "Sigil",
        weight: 6,
        image: "/consumables/spectral-cards/Spectral_Sigil.webp",
      },
      Description: {
        value: "Converts all cards in hand to a single random suit.",
        weight: 6,
      },
    },
    {
      Spectral: {
        value: "Ouija",
        weight: 7,
        image: "/consumables/spectral-cards/Spectral_Ouija.webp",
      },
      Description: {
        value:
          "Converts all cards in hand to a single random rank, but -1 hand size.",
        weight: 7,
      },
    },
    {
      Spectral: {
        value: "Ectoplasm",
        weight: 8,
        image: "/consumables/spectral-cards/Spectral_Ectoplasm.webp",
      },
      Description: {
        value:
          "Add Negative to a random Joker, but -1 hand size. (Hand size reduction on use increases by 1 for every time Ectoplasm is used in a run, eg. using Ectoplasm 3 times in the same run decreases hand size by a total of 6 (1+2+3))",
        weight: 8,
      },
    },
    {
      Spectral: {
        value: "Immolate",
        weight: 9,
        image: "/consumables/spectral-cards/Spectral_Immolate.webp",
      },
      Description: {
        value: "Destroys 5 random cards in hand, but gain $20.",
        weight: 9,
      },
    },
    {
      Spectral: {
        value: "Ankh",
        weight: 10,
        image: "/consumables/spectral-cards/Spectral_Ankh.webp",
      },
      Description: {
        value:
          "Creates a copy of 1 of your Jokers at random, then destroys the others, leaving you with two identical Jokers. (Editions are also copied, except Negative)",
        weight: 10,
      },
    },
    {
      Spectral: {
        value: "Vu",
        weight: 11,
        image: "/consumables/spectral-cards/Spectral_Deja_Vu.webp",
      },
      Description: {
        value: "Deja Vu	Adds a Red Seal to 1 selected card.",
        weight: 11,
      },
    },
    {
      Spectral: {
        value: "Hex",
        weight: 12,
        image: "/consumables/spectral-cards/Spectral_Hex.webp",
      },
      Description: {
        value: "Adds Polychrome to a random Joker, and destroys the rest.",
        weight: 12,
      },
    },
    {
      Spectral: {
        value: "Trance",
        weight: 13,
        image: "/consumables/spectral-cards/Spectral_Trance.webp",
      },
      Description: {
        value: "Adds a Blue Seal to 1 selected card.",
        weight: 13,
      },
    },
    {
      Spectral: {
        value: "Medium",
        weight: 14,
        image: "/consumables/spectral-cards/Spectral_Medium.webp",
      },
      Description: {
        value: "Adds a Purple Seal to 1 selected card.",
        weight: 14,
      },
    },
    {
      Spectral: {
        value: "Cryptid",
        weight: 15,
        image: "/consumables/spectral-cards/Spectral_Cryptid.webp",
      },
      Description: {
        value:
          "Creates 2 exact copies (including Enhancements, Editions and Seals) of a selected card in your hand.",
        weight: 15,
      },
    },
    {
      Spectral: {
        value: "The Soul",
        weight: 16,
        image: "/consumables/spectral-cards/Spectral_Soul.webp",
      },
      Description: {
        value:
          "Creates a Legendary Joker (Must have room). Artwork: This card is animated, with the gem beating like a heart, or perhaps something inside is trying to break out...",
        weight: 16,
      },
    },
    {
      Spectral: {
        value: "Black Hole",
        weight: 17,
        image: "/consumables/spectral-cards/Spectral_Black_Hole.webp",
      },
      Description: {
        value:
          "Upgrades every poker hand (including secret hands not yet discovered) by one level.",
        weight: 17,
      },
    },
  ],
};

export const tarotCards = {
  data: [
    {
      Tarot: {
        value: "The Fool (0)",
        weight: 0,
        image: "/consumables/tarot-cards/Tarot_Fool.webp",
      },
      Description: {
        value:
          "Creates the last Tarot or Planet card used during this run The Fool excluded",
        weight: 0,
      },
    },
    {
      Tarot: {
        value: "The Magician (I)",
        weight: 1,
        image: "/consumables/tarot-cards/Tarot_Magician.webp",
      },
      Description: {
        value: "Enhances 2 selected cards to Lucky Cards",
        weight: 1,
      },
    },
    {
      Tarot: {
        value: "Priestess	The High Priestess (II)",
        weight: 2,
        image: "/consumables/tarot-cards/Tarot_High_Priestess.webp",
      },
      Description: {
        value: "Creates up to 2 random Planet cards (Must have room)",
        weight: 2,
      },
    },
    {
      Tarot: {
        value: "The Empress (III)",
        weight: 3,
        image: "/consumables/tarot-cards/Tarot_Empress.webp",
      },
      Description: {
        value: "Enhances 2 selected cards to Mult Cards",
        weight: 3,
      },
    },
    {
      Tarot: {
        value: "The Emperor (IV)",
        weight: 4,
        image: "/consumables/tarot-cards/Tarot_Emperor.webp",
      },
      Description: {
        value: "Creates up to 2 random Tarot cards (Must have room)",
        weight: 4,
      },
    },
    {
      Tarot: {
        value: "The Hierophant (V)",
        weight: 5,
        image: "/consumables/tarot-cards/Tarot_Hierophant.webp",
      },
      Description: {
        value: "Enhances 2 selected cards to Bonus Cards",
        weight: 5,
      },
    },
    {
      Tarot: {
        value: "The Lovers (VI)",
        weight: 6,
        image: "/consumables/tarot-cards/Tarot_Lovers.webp",
      },
      Description: {
        value: "Enhances 1 selected card into a Wild Card",
        weight: 6,
      },
    },
    {
      Tarot: {
        value: "The Chariot (VII)",
        weight: 7,
        image: "/consumables/tarot-cards/Tarot_Chariot.webp",
      },
      Description: {
        value: "Enhances 1 selected card into a Steel Card",
        weight: 7,
      },
    },
    {
      Tarot: {
        value: "Justice (VIII)",
        weight: 8,
        image: "/consumables/tarot-cards/Tarot_Justice.webp",
      },
      Description: {
        value: "Enhances 1 selected card into a Glass Card",
        weight: 8,
      },
    },
    {
      Tarot: {
        value: "The Hermit (IX)",
        weight: 9,
        image: "/consumables/tarot-cards/Tarot_Hermit.webp",
      },
      Description: {
        value: "Doubles money (Max of $20)",
        weight: 9,
      },
    },
    {
      Tarot: {
        value: "The Wheel of Fortune (X)",
        weight: 10,
        image: "/consumables/tarot-cards/Tarot_Wheel.webp",
      },
      Description: {
        value:
          "1 in 4 chance to add Foil, Holographic, or Polychrome edition to a random Joker",
        weight: 10,
      },
    },
    {
      Tarot: {
        value: "Strength (XI)",
        weight: 11,
        image: "/consumables/tarot-cards/Tarot_Strength.webp",
      },
      Description: {
        value:
          "Increases rank of up to 2 selected cards by 1 (For example, 4 to 5, 10 to Jack, King to Ace, Ace to 2.)",
        weight: 11,
      },
    },
    {
      Tarot: {
        value: "The Hanged Man (XII)",
        weight: 12,
        image: "/consumables/tarot-cards/Tarot_HangedMan.webp",
      },
      Description: {
        value: "Destroys up to 2 selected cards",
        weight: 12,
      },
    },
    {
      Tarot: {
        value: "Death (XIII)",
        weight: 13,
        image: "/consumables/tarot-cards/Tarot_Death.webp",
      },
      Description: {
        value:
          "Select 2 cards, convert the left card into the right card (Drag to rearrange)",
        weight: 13,
      },
    },
    {
      Tarot: {
        value: "Temperance (XIV)",
        weight: 14,
        image: "/consumables/tarot-cards/Tarot_Temperance.webp",
      },
      Description: {
        value: "Gives the total sell value of all current Jokers (Max of $50)",
        weight: 14,
      },
    },
    {
      Tarot: {
        value: "The Devil (XV)",
        weight: 15,
        image: "/consumables/tarot-cards/Tarot_Devil.webp",
      },
      Description: {
        value: "Enhances 1 selected card into a Gold Card",
        weight: 15,
      },
    },
    {
      Tarot: {
        value: "The Tower (XVI)",
        weight: 16,
        image: "/consumables/tarot-cards/Tarot_Tower.webp",
      },
      Description: {
        value: "Enhances 1 selected card into a Stone Card",
        weight: 16,
      },
    },
    {
      Tarot: {
        value: "The Star (XVII)",
        weight: 17,
        image: "/consumables/tarot-cards/Tarot_Star.webp",
      },
      Description: {
        value: "Converts up to 3 selected cards to Diamond suit icon Diamonds",
        weight: 17,
      },
    },
    {
      Tarot: {
        value: "The Moon (XVIII)",
        weight: 18,
        image: "/consumables/tarot-cards/Tarot_Moon.webp",
      },
      Description: {
        value: "Converts up to 3 selected cards to Club suit icon Clubs",
        weight: 18,
      },
    },
    {
      Tarot: {
        value: "The Sun (XIX)",
        weight: 19,
        image: "/consumables/tarot-cards/Tarot_Sun.webp",
      },
      Description: {
        value: "Converts up to 3 selected cards to Heart suit icon Hearts",
        weight: 19,
      },
    },
    {
      Tarot: {
        value: "Judgement (XX)",
        weight: 20,
        image: "/consumables/tarot-cards/Tarot_Judgement.webp",
      },
      Description: {
        value:
          "Creates a random Joker card (Must have room),The World (XXI),Converts up to 3 selected cards to Spade suit icon Spades",
        weight: 20,
      },
    },
  ],
};

export const planetCards = {
  data: [
    {
      Planet: {
        value: `Pluto`,
        weight: 0,
        image: "/consumables/planet-cards/Planet_Pluto.webp",
      },
      Addition: {
        value: "+1 Mult and +10 Chips",
        weight: 0,
      },
      PokerHand: {
        value: "High Card",
        weight: 0,
      },
      HandBaseScore: {
        value: "1 Mult x 5 Chips",
        weight: 0,
      },
    },
    {
      Planet: {
        value: "Jupiter",
        weight: 1,
        image: "/consumables/planet-cards/Planet_Jupiter.webp",
      },
      Addition: {
        value: "+2 Mult and +15 Chips",
        weight: 1,
      },
      PokerHand: {
        value: "Flush",
        weight: 1,
      },
      HandBaseScore: {
        value: "4 Mult x 35 Chips",
        weight: 1,
      },
    },
    {
      Planet: {
        value: "Earth",
        weight: 2,
        image: "/consumables/planet-cards/Planet_Earth.webp",
      },
      Addition: {
        value: "+2 Mult and +25 Chips",
        weight: 2,
      },
      PokerHand: {
        value: "Full House",
        weight: 2,
      },
      HandBaseScore: {
        value: "4 Mult x 40 Chips",
        weight: 2,
      },
    },
    {
      Planet: {
        value: "Mars",
        weight: 3,
        image: "/consumables/planet-cards/Planet_Mars.webp",
      },
      Addition: {
        value: "+3 Mult and +30 Chips",
        weight: 3,
      },
      PokerHand: {
        value: "Four of a Kind",
        weight: 3,
      },
      HandBaseScore: {
        value: "7 Mult x 60 Chips",
        weight: 3,
      },
    },
    {
      Planet: {
        value: "Venus",
        weight: 4,
        image: "/consumables/planet-cards/Planet_Venus.webp",
      },
      Addition: {
        value: "Three of a Kind",
        weight: 4,
      },
      PokerHand: {
        value: "High Card",
        weight: 4,
      },
      HandBaseScore: {
        value: "3 Mult x 30 Chips",
        weight: 4,
      },
    },
    {
      Planet: {
        value: "Uranus",
        weight: 5,
        image: "/consumables/planet-cards/Planet_Uranus.webp",
      },
      Addition: {
        value: "+1 Mult and +20 Chips",
        weight: 5,
      },
      PokerHand: {
        value: "Two Pair",
        weight: 5,
      },
      HandBaseScore: {
        value: "2 Mult x 20 Chips",
        weight: 5,
      },
    },
    {
      Planet: {
        value: "Mercury",
        weight: 6,
        image: "/consumables/planet-cards/Planet_Mercury.webp",
      },
      Addition: {
        value: "+1 Mult and +15 Chips",
        weight: 6,
      },
      PokerHand: {
        value: "Pair",
        weight: 6,
      },
      HandBaseScore: {
        value: "2 Mult x 10 Chips",
        weight: 6,
      },
    },
    {
      Planet: {
        value: "Neptune",
        weight: 7,
        image: "/consumables/planet-cards/Planet_Neptune.webp",
      },
      Addition: {
        value: "+4 Mult and +40 Chips",
        weight: 7,
      },
      PokerHand: {
        value: "Straight Flush",
        weight: 7,
      },
      HandBaseScore: {
        value: "8 Mult x 100 Chips",
        weight: 7,
      },
    },
    {
      Planet: {
        value: "Saturn",
        weight: 8,
        image: "/consumables/planet-cards/Planet_Saturn.webp",
      },
      Addition: {
        value: "+3 Mult and +30 Chips",
        weight: 8,
      },
      PokerHand: {
        value: "Straight",
        weight: 8,
      },
      HandBaseScore: {
        value: "4 Mult x 30 Chips",
        weight: 8,
      },
    },
    {
      Planet: {
        value: "Planet X",
        weight: 9,
        image: "/consumables/planet-cards/Planet_X.webp",
      },
      Addition: {
        value: "+3 Mult and +35 Chips",
        weight: 9,
      },
      PokerHand: {
        value: "Five of a Kind",
        weight: 9,
      },
      HandBaseScore: {
        value: "12 Mult x 120 Chips",
        weight: 9,
      },
    },
    {
      Planet: {
        value: "Ceres",
        weight: 10,
        image: "/consumables/planet-cards/Planet_Ceres.webp",
      },
      Addition: {
        value: "+4 Mult and +40 Chips",
        weight: 10,
      },
      PokerHand: {
        value: "Flush House",
        weight: 10,
      },
      HandBaseScore: {
        value: "14 Mult x 140 Chips",
        weight: 10,
      },
    },
    {
      Planet: {
        value: "Eris",
        weight: 11,
        image: "/consumables/planet-cards/Planet_Eris.webp",
      },
      Addition: {
        value: "+3 Mult and +50 Chips",
        weight: 11,
      },
      PokerHand: {
        value: "Flush Five",
        weight: 11,
      },
      HandBaseScore: {
        value: "16 Mult x 160 Chips",
        weight: 11,
      },
    },
  ],
};
