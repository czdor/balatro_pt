"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seals = exports.enhancements = exports.editions = void 0;
exports.editions = {
    data: [
        {
            Edition: {
                value: "Base",
                weight: 0,
                image: "/modifiers/Base_Card.webp",
            },
            Effect: {
                value: "No extra effects",
                weight: 0,
            },
        },
        {
            Edition: {
                value: "Foil",
                weight: 1,
                image: "/modifiers/FoilMod.webp",
            },
            Effect: {
                value: `+50 Chips`,
                weight: 1,
            },
        },
        {
            Edition: {
                value: "Holographic",
                weight: 2,
                image: "/modifiers/Holo.webp",
            },
            Effect: {
                value: `10`,
                weight: 2,
            },
        },
        {
            Edition: {
                value: "Polychrome",
                weight: 3,
                image: "/modifiers/PolychromeMod.webp",
            },
            Effect: {
                value: `X1.5`,
                weight: 3,
            },
        },
        {
            Edition: {
                value: "Negative",
                weight: 4,
                image: "/modifiers/NegativeMod.webp",
            },
            Effect: {
                value: "+1 Joker slot when on Jokers. +1 Consumable slot when on Consumables (only through Perkeo)",
                weight: 4,
            },
        },
    ],
};
exports.enhancements = {
    data: [
        {
            Enhancement: {
                value: "Lucky Card",
                weight: 0,
                image: "/modifiers/Lucky.webp",
            },
            Effect: {
                value: `1 in 5 chance for +20 Mult. 1 in 15 chance to win $20. (Both can trigger on the same turn)`,
                weight: 0,
            },
        },
        {
            Enhancement: {
                value: "Gold",
                weight: 1,
                image: "/modifiers/Gold.webp",
            },
            Effect: {
                value: `$3 if this card is held in hand at end of round`,
                weight: 1,
            },
        },
        {
            Enhancement: {
                value: "Stone Card",
                weight: 2,
                image: "/modifiers/Stone.webp",
            },
            Effect: {
                value: `+50. No rank or suit. Card always scores`,
                weight: 2,
            },
        },
        {
            Enhancement: {
                value: "Steel Card",
                weight: 3,
                image: "/modifiers/Steel.webp",
            },
            Effect: {
                value: `X1.5 while this card stays in hand`,
                weight: 3,
            },
        },
        {
            Enhancement: {
                value: "Glass Card",
                weight: 4,
                image: "/modifiers/Glass.webp",
            },
            Effect: {
                value: `X2 1 in 4 chance to destroy card after all scoring is finished`,
                weight: 4,
            },
        },
        {
            Enhancement: {
                value: "Wild Card",
                weight: 5,
                image: "/modifiers/Wild.webp",
            },
            Effect: {
                value: "Is considered to be every suit simultaneously",
                weight: 5,
            },
        },
        {
            Enhancement: {
                value: "Mult Card",
                weight: 6,
                image: "/modifiers/Mult.webp",
            },
            Effect: {
                value: "4",
                weight: 6,
            },
        },
        {
            Enhancement: {
                value: "Bonus Card",
                weight: 7,
                image: "/modifiers/Bonus.webp",
            },
            Effect: {
                value: "+30",
                weight: 7,
            },
        },
    ],
};
exports.seals = {
    data: [
        {
            Seal: {
                value: "Gold Seal",
                weight: 0,
                image: "/modifiers/Gold_Seal.webp",
            },
            Effect: {
                value: "Earn $3 when this card is played and scores",
                weight: 0,
            },
        },
        {
            Seal: {
                value: "Red Seal",
                weight: 1,
                image: "/modifiers/Red_Seal.webp",
            },
            Effect: {
                value: "Retrigger this card 1 time. As well as when being scored in a poker hand, this also includes in-hand effects such as lowest-value card for Raised Fist Raised Fist, in-hand Kings from Baron Baron, Steel card multipliers, or gold earned from Reserved Parking Reserved Parking.",
                weight: 1,
            },
        },
        {
            Seal: {
                value: "Blue Seal",
                weight: 2,
                image: "/modifiers/Blue_Seal.webp",
            },
            Effect: {
                value: "Creates the Planet card for final played poker hand of round if held in hand (Must have room)",
                weight: 2,
            },
        },
        {
            Seal: {
                value: "Purple Seal",
                weight: 3,
                image: "/modifiers/Purple_Seal.webp",
            },
            Effect: {
                value: 'Creates a Tarot card when discarded (Must have room). Can be from player-elected discards, or from the automatic discard of "The Hook" boss blind.',
                weight: 3,
            },
        },
    ],
};
