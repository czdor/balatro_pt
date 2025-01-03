interface CardModifier {
  Appearance: string;
  Effect: string;
}

export interface Enhancement extends CardModifier {
  Enhancement: string;
}

export interface Seal extends CardModifier {
  Seal: string;
}

export const editions = {
  data: [
    {
      Edition: {
        value: "Base",
        weight: 0,
        image: "/modifiers/Base_Card.webp",
      },
      Effect: {
        value: "Sin efectos adicionales",
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
        value: "+50 Fichas",
        weight: 1,
      },
    },
    {
      Edition: {
        value: "Holográfico",
        weight: 2,
        image: "/modifiers/Holo.webp",
      },
      Effect: {
        value: "10",
        weight: 2,
      },
    },
    {
      Edition: {
        value: "Policromático",
        weight: 3,
        image: "/modifiers/PolychromeMod.webp",
      },
      Effect: {
        value: "X1.5",
        weight: 3,
      },
    },
    {
      Edition: {
        value: "Negativo",
        weight: 4,
        image: "/modifiers/NegativeMod.webp",
      },
      Effect: {
        value:
          "+1 espacio para Joker cuando está en Jokers. +1 espacio de consumible cuando está en Consumibles (solo a través de Perkeo)",
        weight: 4,
      },
    },
  ],
};

export const enhancements = {
  data: [
    {
      Enhancement: {
        value: "Carta Afortunada",
        weight: 0,
        image: "/modifiers/Lucky.webp",
      },
      Effect: {
        value: `1 de 5 de probabilidad para +20 Mult. 1 de 15 de probabilidad de ganar $20. (Ambos pueden activarse en el mismo turno)`,
        weight: 0,
      },
    },
    {
      Enhancement: {
        value: "Oro",
        weight: 1,
        image: "/modifiers/Gold.webp",
      },
      Effect: {
        value: `$3 si esta carta se mantiene en mano al final de la ronda`,
        weight: 1,
      },
    },
    {
      Enhancement: {
        value: "Carta de Piedra",
        weight: 2,
        image: "/modifiers/Stone.webp",
      },
      Effect: {
        value: `+50. Sin rango ni palo. La carta siempre puntúa`,
        weight: 2,
      },
    },
    {
      Enhancement: {
        value: "Carta de Acero",
        weight: 3,
        image: "/modifiers/Steel.webp",
      },
      Effect: {
        value: `X1.5 mientras esta carta permanezca en mano`,
        weight: 3,
      },
    },
    {
      Enhancement: {
        value: "Carta de Vidrio",
        weight: 4,
        image: "/modifiers/Glass.webp",
      },
      Effect: {
        value: `X2 1 de 4 de probabilidad de destruir la carta después de que se termine toda la puntuación`,
        weight: 4,
      },
    },
    {
      Enhancement: {
        value: "Carta Comodín",
        weight: 5,
        image: "/modifiers/Wild.webp",
      },
      Effect: {
        value: "Se considera ser de cada palo simultáneamente",
        weight: 5,
      },
    },
    {
      Enhancement: {
        value: "Carta Mult",
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
        value: "Carta Bonificación",
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

export const seals = {
  data: [
    {
      Seal: {
        value: "Sello de Oro",
        weight: 0,
        image: "/modifiers/Gold_Seal.webp",
      },
      Effect: {
        value: "Gana $3 cuando se juega y puntúa esta carta.",
        weight: 0,
      },
    },
    {
      Seal: {
        value: "Sello Rojo",
        weight: 1,
        image: "/modifiers/Red_Seal.webp",
      },
      Effect: {
        value:
          "Vuelve a activar esta carta 1 vez. Además de cuando se puntúa en una mano de póker, esto también incluye efectos en mano como la carta de menor valor para el Puño Elevado, Reyes en mano del Barón, multiplicadores de carta de acero o el oro ganado de Estacionamiento Reservado.",
        weight: 1,
      },
    },
    {
      Seal: {
        value: "Sello Azul",
        weight: 2,
        image: "/modifiers/Blue_Seal.webp",
      },
      Effect: {
        value:
          "Crea la carta Planet para la última mano de póker jugada de la ronda si se mantiene en mano (debe haber espacio).",
        weight: 2,
      },
    },
    {
      Seal: {
        value: "Sello Púrpura",
        weight: 3,
        image: "/modifiers/Purple_Seal.webp",
      },
      Effect: {
        value:
          'Crea una carta de Tarot al ser descartada (debe haber espacio). Puede ser de descartes elegidos por el jugador o del descarte automático del ciego del jefe "El Gancho".',
        weight: 3,
      },
    },
  ],
};
