import { JokerType } from "../../types";

export const Chips = (value: string) =>
  `<span class="font-bold text-lg"><span class="text-sky-500 mx-auto">${value}</span> Chips</span>`;

export const Mult = (value: string) =>
  `<span class="font-bold text-lg"><span class="text-red-500 mx-auto">+${value}</span> Mult</span>`;

export const XMult = (value: string) =>
  `<span class="font-bold text-lg"><span class="bg-red-500 rounded-md px-1 text-white mx-auto">X${value}</span> Mult</span>`;

export const OneIn = (value: string) =>
  `<span class="font-bold text-lg text-green-400">+${value}</span>`;

export const Earn = (value: string) =>
  `<span class="font-bold text-lg text-yellow-500">${value}</span>`;

export const Planet = () =>
  `<span class="font-bold text-lg text-sky-500">Planet</span>`;

export const Tarot = () =>
  `<span class="font-bold text-lg text-purple-500">Tarot</span>`;

export const Boss = (value: string) =>
  `<span class="font-bold text-lg text-yellow-300">${value}</span>`;

export const rarity = {
  uncommon: '<span id="rarity" class="bg-blue-500">Uncommon</span>',
  common: "Common",
  rare: "Rare",
  legendary: "Legendary",
};

// rarity.uncommon('asd');

export const getTypeHtml = (jokerType: JokerType) => {
  switch (jokerType) {
    case "+c":
      return `<span class="text-blue-400 font-bold text-lg">${jokerType}</span>`;
    case "+m":
      return `<span class="text-red-400 font-bold text-lg">${jokerType}</span>`;
    case "Xm":
      return `<span class="text-red-400 font-bold text-lg">${jokerType}</span>`;
    case "++":
      return `<span class="text-blue-400 font-bold text-lg">+<span class="text-red-400">+</span></span>`;
    case "!!":
      return `<span class="text-purple-500 font-bold text-lg">${jokerType}</span>`;
    case "...":
      return `<span class="text-green-400 font-bold text-lg">${jokerType}</span>`;
    case "+$":
      return `<span class="text-yellow-400 font-bold text-lg">${jokerType}</span>`;
    default:
      return `<span>?</span>`;
  }
};
