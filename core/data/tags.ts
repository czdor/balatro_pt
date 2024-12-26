export interface Tag {
  Image: string;
  Tag: string;
  Benefit: string;
  Notes: string;
  Ante: string;
}
export interface Tags {
  title: string;
  dataScheme: string[];
  data: Tag[];
}

export const tags: Tags = {
  title: "Tags",
  dataScheme: ["Tag", "Benefit", "Notes", "Ante"],
  data: [
    {
      Image: "/tags/Uncommon_tag.webp",
      Tag: "Uncommon",
      Benefit: "The next shop will have a free Uncommon Joker.",
      Notes:
        "Extra generated, and guaranteed to appear in next shop (which is not affected by Vouchers like Tarot Merchant/Planet Merchant that make Joker less likely to appear).",
      Ante: "1",
    },

    {
      Image: "/tags/Rare_tag.webp",
      Tag: "Rare",
      Benefit: "The next shop will have a free Rare Joker.",
      Notes:
        "Extra generated, and guaranteed to appear in next shop (which is not affected by Vouchers like Tarot Merchant/Planet Merchant that make Joker less likely to appear).",
      Ante: "1",
    },

    {
      Image: "/tags/Negative_tag.webp",
      Tag: "Negative",
      Benefit:
        "The next base edition Joker you find in a Shop becomes Negative (+1 joker slot) and free.",
      Notes: "",
      Ante: "2+",
    },

    {
      Image: "/tags/Foil_tag.webp",
      Tag: "Foil",
      Benefit:
        "The next base edition Joker you find in a Shop becomes Foil (+50 Chips) and free.",
      Notes: "",
      Ante: "1",
    },
    {
      Image: "/tags/Holographic_tag.webp",
      Tag: "Holographic",
      Benefit:
        "The next base edition Joker you find in a Shop becomes Holographic (+10 Mult) and free.",
      Notes:
        "The Uncommon/Rare Joker is extra generated, and guaranteed to appear in next shop (which is not affected by Vouchers like Tarot Merchant/Planet Merchant that make Joker less likely to appear).",
      Ante: "1",
    },
    {
      Image: "/tags/Polychrome_tag.webp",
      Tag: "Polychrome",
      Benefit:
        "The next base edition Joker you find in a Shop becomes Polychrome (X1.5 Mult) and free.",
      Notes: "",
      Ante: "1",
    },

    {
      Image: "/tags/Investment_tag.webp",
      Tag: "Investment",
      Benefit: "Gain $25 after defeating the next Boss Blind.",
      Notes:
        "The Uncommon/Rare Joker is extra generated, and guaranteed to appear in next shop (which is not affected by Vouchers like Tarot Merchant/Planet Merchant that make Joker less likely to appear).",
      Ante: "1",
    },
    {
      Image: "/tags/Voucher_tag.webp",
      Tag: "Voucher",
      Benefit: "Adds a Voucher to the next Shop.",
      Notes:
        "If there is already a Voucher in the Shop, another one will be added allowing you to have two or more.",
      Ante: "1",
    },
    {
      Image: "/tags/Boss_tag.webp",
      Tag: "Boss",
      Benefit: "Re-rolls the next Boss Blind.",
      Notes: "",
      Ante: "1",
    },
    {
      Image: "/tags/Standard_tag.webp",
      Tag: "Standard",
      Benefit: "Immediately open a free Mega Standard Pack.",
      Notes: "",
      Ante: "2+",
    },
    {
      Image: "/tags/Charm_tag.webp",
      Tag: "Charm",
      Benefit: "Immediately open a free Mega Arcana Pack.",
      Notes: "",
      Ante: "1",
    },
    {
      Image: "/tags/Meteor_tag.webp",
      Tag: "Meteor",
      Benefit: "Immediately open a free Mega Celestial Pack.",
      Notes: "",
      Ante: "2+",
    },
    {
      Image: "/tags/Bufoon_tag.webp",
      Tag: "Buffoon",
      Benefit: "Immediately open a free Mega Buffoon Pack.",
      Notes: "",
      Ante: "2+",
    },
    {
      Image: "/tags/Handy_tag.webp",
      Tag: "Handy",
      Benefit: "Gain $1 for each hand played this run.",
      Notes: "",
      Ante: "2+",
    },
    {
      Image: "/tags/Garbage_tag.webp",
      Tag: "Garbage",
      Benefit: "Gain $1 for each unused discard this run.",
      Notes: "",
      Ante: "2+",
    },
    {
      Image: "/tags/Ethereal_tag.webp",
      Tag: "Ethereal",
      Benefit: "Immediately open a free Spectral Pack.",
      Notes: "",
      Ante: "2+",
    },
    {
      Image: "/tags/Coupon_tag.webp",
      Tag: "Coupon",
      Benefit:
        "In the next shop, initial Jokers and Booster Packs are free ($0).",
      Notes:
        "Other parts of the shop (such as Vouchers and Jokers from Rerolls) keep their usual costs.",
      Ante: "1",
    },
    {
      Image: "/tags/Double_tag.webp",
      Tag: "Double",
      Benefit: "Gives a copy of the next Tag selected (excluding Double Tags).",
      Notes:
        "Multiple Double Tags will take effect at once, each adds one additional copy of (instead of doubling) the selected tag.",
      Ante: "1",
    },
    {
      Image: "/tags/Juggle_tag.webp",
      Tag: "Juggle",
      Benefit: "+3 Hand Size for the next round only.",
      Notes: "",
      Ante: "1",
    },
    {
      Image: "/tags/D6_tag.webp",
      Tag: "D6",
      Benefit: "In the next Shop, Rerolls start at $0.",
      Notes: "The price will go up $1 per Reroll as normal.",
      Ante: "1",
    },
    {
      Image: "/tags/Top-up_tag.webp",
      Tag: "Top-up",
      Benefit: "Create up to 2 Common Jokers (if you have space).",
      Notes:
        "The Jokers created cannot have Stickers, like Eternal/Perishable/Rental, even at higher stakes.",
      Ante: "2+",
    },
    {
      Image: "/tags/Speed_tag.webp",
      Tag: "Speed",
      Benefit: "Gives $5 for each Blind you've skipped this run.",
      Notes:
        "Granted to give at least $5, as it includes the Blind skipped to gain this tag.",
      Ante: "1",
    },
    {
      Image: "/tags/Orbital_tag.webp",
      Tag: "Orbital",
      Benefit: "Upgrades a specified random Poker Hand by three levels.	",
      Notes:
        "The hand can be a secret hand if it has already been played in this run.",
      Ante: "2+",
    },
    {
      Image: "/tags/Economy_tag.webp",
      Tag: "Economy",
      Benefit: "Doubles your money (adds a maximum of $40).",
      Notes:
        "If your balance is negative your money is not doubled, instead giving you $0 and essentially wasting the tag.",
      Ante: "1",
    },
  ],
};
