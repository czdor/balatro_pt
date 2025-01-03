import { jokers } from "../../data/en/jokers";
import {
  planetCards,
  spectralCards,
  tarotCards,
  vouchers,
} from "../../data/en/consumables";
import { editions, enhancements, seals } from "../../data/en/modifiers";
import { tags } from "../../data/en/tags";

const textNgramAnalyzer = { type: "text", analyzer: "ngram_analyzer" };

type IndexDataMap = {
  indexTitle: string;
  properties: any;
  data: any[];
};

export const indexTitleMapping = {
  jokers: "Jokers",
  spectral_cards: "Spectral cards",
  tarot_cards: "Tarot cards",
  planet_cards: "Planet cards",
  editions: "Editions",
  enhacements: "Enhancements",
  seals: "Seals",
  tags: "Tags",
  vouchers: "Vouchers",
};

export const indexDataMappings: IndexDataMap[] = [
  {
    indexTitle: "jokers",
    properties: {
      Joker: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Effect: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Cost: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Rarity: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Requirement: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Type: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
    },
    data: jokers.data,
  },
  {
    indexTitle: "spectral_cards",
    properties: {
      Spectral: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Description: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
    },
    data: spectralCards.data,
  },
  {
    indexTitle: "tarot_cards",
    properties: {
      Tarot: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Description: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
    },
    data: tarotCards.data,
  },
  {
    indexTitle: "planet_cards",
    properties: {
      Planet: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Addition: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      PokerHand: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      HandBaseScore: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
    },
    data: planetCards.data,
  },
  {
    indexTitle: "editions",
    properties: {
      Edition: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Effect: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
    },
    data: editions.data,
  },
  {
    indexTitle: "enhancements",
    properties: {
      Enhancement: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Effect: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
    },
    data: enhancements.data,
  },
  {
    indexTitle: "seals",
    properties: {
      Seal: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Effect: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
    },
    data: seals.data,
  },
  {
    indexTitle: "tags",
    properties: {
      Tag: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Benefit: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Notes: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Ante: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
    },
    data: tags.data,
  },
  {
    indexTitle: "vouchers",
    properties: {
      Voucher: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Effect: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      UnlocksWhen: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
      Notes: {
        properties: {
          value: textNgramAnalyzer,
        },
      },
    },
    data: vouchers.data,
  },
];

export const indexes: string[] = indexDataMappings.map((i) => i.indexTitle);
