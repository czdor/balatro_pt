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

export const spectralCards: SpectralCards = {
  title: "Spectral cards",
  dataScheme: ["Spectral Card", "Description"],
  data: [
    {
      Image: "/consumables/spectral-cards/Spectral_Familiar.webp",
      Name: "Familiar",
      Description:
        "Destroy 1 random card in your hand, but add 3 random Enhanced face cards instead.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Grim.webp",
      Name: "Grim",
      Description:
        "Destroy 1 random card in your hand, but add 2 random Enhanced Aces instead.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Incantation.webp",
      Name: "Incantation",
      Description:
        "Destroy 1 random card in your hand, but add 4 random Enhanced numbered cards instead.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Talisman.webp",
      Name: "Talisman",
      Description: "Add a Gold Seal to 1 selected card.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Aura.webp",
      Name: "Aura",
      Description:
        "Add Foil, Holographic, or Polychrome edition (determined at random) to 1 selected card in hand.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Wraith.webp",
      Name: "Wraith",
      Description:
        "Creates a random Rare Joker (must have room), but sets money to $0.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Sigil.webp",
      Name: "Sigil",
      Description: "Converts all cards in hand to a single random suit.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Ouija.webp",
      Name: "Ouija",
      Description:
        "Converts all cards in hand to a single random rank, but -1 hand size.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Ectoplasm.webp",
      Name: "Ectoplasm",
      Description:
        "Add Negative to a random Joker, but -1 hand size. (Hand size reduction on use increases by 1 for every time Ectoplasm is used in a run, eg. using Ectoplasm 3 times in the same run decreases hand size by a total of 6 (1+2+3))",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Immolate.webp",
      Name: "Immolate",
      Description: "Destroys 5 random cards in hand, but gain $20.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Ankh.webp",
      Name: "Ankh",
      Description:
        "Creates a copy of 1 of your Jokers at random, then destroys the others, leaving you with two identical Jokers. (Editions are also copied, except Negative)",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Deja_Vu.webp",
      Name: "Vu",
      Description: "Deja Vu	Adds a Red Seal to 1 selected card.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Hex.webp",
      Name: "Hex",
      Description: "Adds Polychrome to a random Joker, and destroys the rest.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Trance.webp",
      Name: "Trance",
      Description: "Adds a Blue Seal to 1 selected card.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Medium.webp",
      Name: "Medium",
      Description: "Adds a Purple Seal to 1 selected card.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Cryptid.webp",
      Name: "Cryptid",
      Description:
        "Creates 2 exact copies (including Enhancements, Editions and Seals) of a selected card in your hand.",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Soul.webp",
      Name: "The Soul",
      Description:
        "Creates a Legendary Joker (Must have room). Artwork: This card is animated, with the gem beating like a heart, or perhaps something inside is trying to break out...",
    },
    {
      Image: "/consumables/spectral-cards/Spectral_Black_Hole.webp",
      Name: "Black Hole",
      Description:
        "Upgrades every poker hand (including secret hands not yet discovered) by one level.",
    },
  ],
};

export const tarotCards: TarotCards = {
  title: "Tarot cards",
  dataScheme: ["Tarot Card", "Description"],
  data: [
    {
      Image: "/consumables/tarot-cards/Tarot_Fool.webp",
      Name: "The Fool (0)",
      Description:
        "Creates the last Tarot or Planet card used during this run The Fool excluded",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Magician.webp",
      Name: "The Magician (I)",
      Description: "Enhances 2 selected cards to Lucky Cards",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_High_Priestess.webp",
      Name: "Priestess	The High Priestess (II)",
      Description: "Creates up to 2 random Planet cards (Must have room)",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Empress.webp",
      Name: "The Empress (III)",
      Description: "Enhances 2 selected cards to Mult Cards",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Emperor.webp",
      Name: "The Emperor (IV)",
      Description: "Creates up to 2 random Tarot cards (Must have room)",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Hierophant.webp",
      Name: "The Hierophant (V)",
      Description: "Enhances 2 selected cards to Bonus Cards",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Lovers.webp",
      Name: "The Lovers (VI)",
      Description: "Enhances 1 selected card into a Wild Card",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Chariot.webp",
      Name: "The Chariot (VII)",
      Description: "Enhances 1 selected card into a Steel Card",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Justice.webp",
      Name: "Justice (VIII)",
      Description: "Enhances 1 selected card into a Glass Card",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Hermit.webp",
      Name: "The Hermit (IX)",
      Description: "Doubles money (Max of $20)",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Wheel.webp",
      Name: "The Wheel of Fortune (X)",
      Description:
        "1 in 4 chance to add Foil, Holographic, or Polychrome edition to a random Joker",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Strength.webp",
      Name: "Strength (XI)",
      Description:
        "Increases rank of up to 2 selected cards by 1 (For example, 4 to 5, 10 to Jack, King to Ace, Ace to 2.)",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_HangedMan.webp",
      Name: "The Hanged Man (XII)",
      Description: "Destroys up to 2 selected cards",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Death.webp",
      Name: "Death (XIII)",
      Description:
        "Select 2 cards, convert the left card into the right card (Drag to rearrange)",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Temperance.webp",
      Name: "Temperance (XIV)",
      Description:
        "Gives the total sell value of all current Jokers (Max of $50)",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Devil.webp",
      Name: "The Devil (XV)",
      Description: "Enhances 1 selected card into a Gold Card",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Tower.webp",
      Name: "The Tower (XVI)",
      Description: "Enhances 1 selected card into a Stone Card",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Star.webp",
      Name: "The Star (XVII)",
      Description:
        "Converts up to 3 selected cards to Diamond suit icon Diamonds",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Moon.webp",
      Name: "The Moon (XVIII)",
      Description: "Converts up to 3 selected cards to Club suit icon Clubs",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Sun.webp",
      Name: "The Sun (XIX)",
      Description: "Converts up to 3 selected cards to Heart suit icon Hearts",
    },
    {
      Image: "/consumables/tarot-cards/Tarot_Judgement.webp",
      Name: "Judgement (XX)",
      Description:
        "Creates a random Joker card (Must have room),The World (XXI),Converts up to 3 selected cards to Spade suit icon Spades",
    },
  ],
};

export const planetCards: PlanetCards = {
  title: "Planet cards",
  dataScheme: ["Planet Card", "Addition", "Poker hand", "Hand Base Score"],
  data: [
    {
      Image: "/consumables/planet-cards/Planet_Pluto.webp",
      Name: `Pluto`,
      Addition: "+1 Mult and +10 Chips",
      PokerHand: "High Card",
      HandBaseScore: "1 Mult x 5 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Jupiter.webp",
      Name: "Jupiter",
      Addition: "+2 Mult and +15 Chips",
      PokerHand: "Flush",
      HandBaseScore: "4 Mult x 35 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Earth.webp",
      Name: "Earth",
      Addition: "+2 Mult and +25 Chips",
      PokerHand: "Full House",
      HandBaseScore: "4 Mult x 40 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Mars.webp",
      Name: "Mars",
      Addition: "+3 Mult and +30 Chips",
      PokerHand: "Four of a Kind",
      HandBaseScore: "7 Mult x 60 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Venus.webp",
      Name: "Venus",
      Addition: "Three of a Kind",
      PokerHand: "High Card",
      HandBaseScore: "3 Mult x 30 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Uranus.webp",
      Name: "Uranus",
      Addition: "+1 Mult and +20 Chips",
      PokerHand: "Two Pair",
      HandBaseScore: "2 Mult x 20 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Mercury.webp",
      Name: "Mercury",
      Addition: "+1 Mult and +15 Chips",
      PokerHand: "Pair",
      HandBaseScore: "2 Mult x 10 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Neptune.webp",
      Name: "Neptune",
      Addition: "+4 Mult and +40 Chips",
      PokerHand: "Straight Flush",
      HandBaseScore: "8 Mult x 100 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Saturn.webp",
      Name: "Saturn",
      Addition: "+3 Mult and +30 Chips",
      PokerHand: "Straight",
      HandBaseScore: "4 Mult x 30 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_X.webp",
      Name: "Planet X",
      Addition: "+3 Mult and +35 Chips",
      PokerHand: "Five of a Kind",
      HandBaseScore: "12 Mult x 120 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Ceres.webp",
      Name: "Ceres",
      Addition: "+4 Mult and +40 Chips",
      PokerHand: "Flush House",
      HandBaseScore: "14 Mult x 140 Chips",
    },
    {
      Image: "/consumables/planet-cards/Planet_Eris.webp",
      Name: "Eris",
      Addition: "+3 Mult and +50 Chips",
      PokerHand: "Flush Five",
      HandBaseScore: "16 Mult x 160 Chips",
    },
  ],
};
