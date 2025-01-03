type WeightedItem = {
  value: string;
  weight: number;
};

interface JokerAttrs extends WeightedItem {
  image: string;
}

interface RarityAttrs extends WeightedItem {
  value: "common" | "uncommon" | "rare" | "legendary";
}

interface TypeAttrs extends WeightedItem {
  value: "+c" | "Xm" | "+m" | "++" | "!!" | "..." | "+$";
}

export interface Joker {
  Joker: JokerAttrs;
  Effect: WeightedItem;
  Cost: WeightedItem;
  Rarity: RarityAttrs;
  Requirement: WeightedItem;
  Type: TypeAttrs;
}

export const jokers = {
  data: [
    {
      Joker: {
        image: "/jokers/Joker.webp",
        value: "Joker",
        weight: 0,
      },
      Effect: {
        value: "+4 Mult",
        weight: 11,
      },
      Cost: {
        value: "$2",
        weight: 2,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Greedy_Joker.webp",
        value: "Joker Codicioso",
        weight: 1,
      },
      Effect: {
        value:
          "Las cartas jugadas con el palo de Diamante dan +3 Mult cuando se puntúan",
        weight: 12,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Lusty_Joker.webp",
        value: "Joker Lujurioso",
        weight: 2,
      },
      Effect: {
        value:
          "Las cartas jugadas con el palo de Corazón dan +3 Mult cuando se puntúan",
        weight: 13,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Wrathful_Joker.webp",
        value: "Joker Colérico",
        weight: 3,
      },
      Effect: {
        value:
          "Las cartas jugadas con el palo de Pica dan +3 Mult cuando se puntúan",
        weight: 14,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Gluttonous_Joker.webp",
        value: "Joker Glotón",
        weight: 4,
      },
      Effect: {
        value:
          "Las cartas jugadas con el palo de Trébol dan +3 Mult cuando se puntúan",
        weight: 15,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Jolly_Joker.webp",
        value: "Joker Alegre",
        weight: 5,
      },
      Effect: {
        value: "+8 Mult si la mano jugada contiene un Par",
        weight: 10,
      },
      Cost: {
        value: "$3",
        weight: 3,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Zany_Joker.webp",
        value: "Joker Excéntrico",
        weight: 6,
      },
      Effect: {
        value: "+12 Mult si la mano jugada contiene un Trío",
        weight: 6,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Mad_Joker.webp",
        value: "Joker Loco",
        weight: 7,
      },
      Effect: {
        value: "+10 Mult si la mano jugada contiene un Doble Par",
        weight: 7,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Crazy_Joker.webp",
        value: "Joker Loco (2)",
        weight: 8,
      },
      Effect: {
        value: "+12 Mult si la mano jugada contiene una Escalera",
        weight: 8,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Droll_Joker.webp",
        value: "Joker Gracioso",
        weight: 9,
      },
      Effect: {
        value: "+10 Mult si la mano jugada contiene un Color",
        weight: 9,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Sly_Joker.webp",
        value: "Joker Astuto",
        weight: 10,
      },
      Effect: {
        value: "+50 Fichas si la mano jugada contiene un Par",
        weight: 24,
      },
      Cost: {
        value: "$3",
        weight: 3,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Wily_Joker.webp",
        value: "Joker Ingenioso",
        weight: 11,
      },
      Effect: {
        value: "+100 Fichas si la mano jugada contiene un Trío",
        weight: 20,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Clever_Joker.webp",
        value: "Joker Inteligente",
        weight: 12,
      },
      Effect: {
        value: "+80 Fichas si la mano jugada contiene un Doble Par",
        weight: 21,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Devious_Joker.webp",
        value: "Joker Astuto (2)",
        weight: 13,
      },
      Effect: {
        value: "+100 Fichas si la mano jugada contiene una Escalera",
        weight: 22,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Crafty_Joker.webp",
        value: "Joker Astuto (3)",
        weight: 14,
      },
      Effect: {
        value: "+80 Fichas si la mano jugada contiene un Color",
        weight: 23,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Half_Joker.webp",
        value: "Joker Mitad",
        weight: 15,
      },
      Effect: {
        value: "+20 Mult si la mano jugada contiene 3 cartas o menos",
        weight: 151,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Joker_Stencil.webp",
        value: "Joker Plantilla",
        weight: 16,
      },
      Effect: {
        value:
          "X1 Mult por cada espacio vacío de Joker. Plantilla de Joker incluida (Actualmente X1 Mult)",
        weight: 44,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Four_Fingers.webp",
        value: "Cuatro Dedos",
        weight: 17,
      },
      Effect: {
        value: "Todos los Colores y Escaleras se pueden hacer con 4 cartas",
        weight: 104,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Mime.webp",
        value: "Mimo",
        weight: 18,
      },
      Effect: {
        value: "Reactivar todas las habilidades de cartas en mano",
        weight: 152,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "...",
        weight: 5,
      },
    },
    {
      Joker: {
        image: "/jokers/Credit_Card.webp",
        value: "Tarjeta de Crédito",
        weight: 19,
      },
      Effect: {
        value: "Llevar hasta -$20 en deuda",
        weight: 105,
      },
      Cost: {
        value: "$1",
        weight: 1,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Ceremonial_Dagger.webp",
        value: "Daga Ceremonial",
        weight: 20,
      },
      Effect: {
        value:
          "Cuando se selecciona Ciego, destruye el Joker a la derecha y añade permanentemente el doble de su valor de venta a este Mult (Actualmente +0 Mult)",
        weight: 45,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Banner.webp",
        value: "Banner",
        weight: 21,
      },
      Effect: {
        value: "+30 Fichas por cada descarte restante",
        weight: 153,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Mystic_Summit.webp",
        value: "Cima Mística",
        weight: 22,
      },
      Effect: {
        value: "+15 Mult cuando no quedan descartes",
        weight: 154,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Marble_Joker.webp",
        value: "Joker de Mármol",
        weight: 23,
      },
      Effect: {
        value: "Añade una carta de Piedra al mazo cuando se selecciona Ciego",
        weight: 155,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Loyalty_Card.webp",
        value: "Tarjeta de Lealtad",
        weight: 24,
      },
      Effect: {
        value: "X4 Mult cada 6 manos jugadas",
        weight: 103,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/8_Ball.webp",
        value: "Bola 8",
        weight: 25,
      },
      Effect: {
        value:
          "1 de 4 de probabilidad de que cada 8 jugado cree una carta de Tarot cuando se puntúe (debe haber espacio)",
        weight: 156,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Misprint.webp",
        value: "Error de Impresión",
        weight: 26,
      },
      Effect: {
        value: "+? Mult",
        weight: 157,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Dusk.webp",
        value: "Crepúsculo",
        weight: 27,
      },
      Effect: {
        value:
          "Reactivar todas las cartas jugadas en la mano final de la ronda",
        weight: 25,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "...",
        weight: 5,
      },
    },
    {
      Joker: {
        image: "/jokers/Raised_Fist.webp",
        value: "Puño Elevado",
        weight: 28,
      },
      Effect: {
        value:
          "Añade el doble del rango de la carta de menor rango en mano al Mult",
        weight: 99,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Chaos_the_Clown.webp",
        value: "Caos el Payaso",
        weight: 29,
      },
      Effect: {
        value: "1 reroll gratis por tienda",
        weight: 102,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Fibonacci.webp",
        value: "Fibonacci",
        weight: 30,
      },
      Effect: {
        value: "Cada As, 2, 3, 5 u 8 jugado da +8 Mult cuando se puntúa",
        weight: 16,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Steel_Joker.webp",
        value: "Joker de Acero",
        weight: 31,
      },
      Effect: {
        value:
          "Este Joker gana X0.2 Mult por cada Carta de Acero en tu mazo completo (Actualmente X1 Mult)",
        weight: 51,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value:
          "Disponible desde el inicio. (No aparecerá en la tienda a menos que el jugador tenga una Carta de Acero en su mazo.)",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Scary_Face.webp",
        value: "Cara Espeluznante",
        weight: 32,
      },
      Effect: {
        value: "Las cartas de cara jugadas dan +30 Fichas cuando se puntúan",
        weight: 17,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Abstract_Joker.webp",
        value: "Joker Abstracto",
        weight: 33,
      },
      Effect: {
        value: "+3 Mult por cada carta Joker (Actualmente +0 Mult)",
        weight: 158,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Delayed_Gratification.webp",
        value: "Gratificación Diferida",
        weight: 34,
      },
      Effect: {
        value:
          "Gana $2 por cada descarte si no se usan descartes al final de la ronda",
        weight: 26,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Hack.webp",
        value: "Hack",
        weight: 35,
      },
      Effect: {
        value: "Reactivarse cada 2, 3, 4 o 5 jugados",
        weight: 27,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "...",
        weight: 5,
      },
    },
    {
      Joker: {
        image: "/jokers/Pareidolia.webp",
        value: "Pareidolia",
        weight: 36,
      },
      Effect: {
        value: "Todas las cartas se consideran cartas de cara",
        weight: 30,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Gros_Michel.webp",
        value: "Gros Michel",
        weight: 37,
      },
      Effect: {
        value:
          "+15 Mult, 1 de 6 de probabilidad de que sea destruido al final de la ronda",
        weight: 159,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Even_Steven.webp",
        value: "Steven Par",
        weight: 38,
      },
      Effect: {
        value:
          "Las cartas jugadas con rango par dan +4 Mult cuando se puntúan (10, 8, 6, 4, 2)",
        weight: 40,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Odd_Todd.webp",
        value: "Todd Impar",
        weight: 39,
      },
      Effect: {
        value:
          "Las cartas jugadas con rango impar dan +31 Fichas cuando se puntúan (A, 9, 7, 5, 3)",
        weight: 41,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Scholar.webp",
        value: "Estudioso",
        weight: 40,
      },
      Effect: {
        value: "Los Ases jugados dan +20 Fichas y +4 Mult cuando se puntúan",
        weight: 18,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "++",
        weight: 3,
      },
    },
    {
      Joker: {
        image: "/jokers/Business_Card.webp",
        value: "Tarjeta de Negocios",
        weight: 41,
      },
      Effect: {
        value:
          "Las cartas de cara jugadas tienen 1 de 2 de probabilidad de dar $2 cuando se puntúan",
        weight: 160,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Supernova.webp",
        value: "Supernova",
        weight: 42,
      },
      Effect: {
        value:
          "Añade el número de veces que se ha jugado una mano de póker en esta ronda al Mult",
        weight: 161,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Ride_the_Bus.webp",
        value: "Montar el Autobús",
        weight: 43,
      },
      Effect: {
        value:
          "Este Joker gana +1 Mult por cada mano consecutiva jugada sin una carta de cara que puntúe (Actualmente +0 Mult)",
        weight: 46,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Space_Joker.webp",
        value: "Joker Espacial",
        weight: 44,
      },
      Effect: {
        value:
          "1 de 4 de probabilidad de mejorar el nivel de la mano de póker jugada",
        weight: 29,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Egg.webp",
        value: "Huevo",
        weight: 45,
      },
      Effect: {
        value: "Gana $3 de valor de venta al final de la ronda",
        weight: 32,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Burglar.webp",
        value: "Ladrón",
        weight: 46,
      },
      Effect: {
        value:
          "Cuando se selecciona Ciego, gana +3 Manos y pierde todos los descartes",
        weight: 33,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Blackboard.webp",
        value: "Pizarra",
        weight: 47,
      },
      Effect: {
        value:
          "X3 Mult si todas las cartas en la mano son del palo de Picas o tréboles",
        weight: 34,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Runner.webp",
        value: "Corredor",
        weight: 48,
      },
      Effect: {
        value:
          "Gana +15 Fichas si la mano jugada contiene una Escalera (Actualmente +0 Fichas)",
        weight: 162,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Ice_Cream.webp",
        value: "Helado",
        weight: 49,
      },
      Effect: {
        value: "+100 Fichas -5 Fichas por cada mano jugada",
        weight: 163,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/DNA.webp",
        value: "ADN",
        weight: 50,
      },
      Effect: {
        value:
          "Si la primera mano de la ronda tiene solo 1 carta, añade una copia permanente al mazo y robala a la mano",
        weight: 68,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "rara",
        weight: 3,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Splash.webp",
        value: "Salpicadura",
        weight: 51,
      },
      Effect: {
        value: "Cada carta jugada cuenta para la puntuación",
        weight: 35,
      },
      Cost: {
        value: "$3",
        weight: 3,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Blue_Joker.webp",
        value: "Joker Azul",
        weight: 52,
      },
      Effect: {
        value:
          "+2 Fichas por cada carta restante en el mazo (Actualmente +104 Fichas)",
        weight: 36,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Sixth_Sense.webp",
        value: "Sexto Sentido",
        weight: 53,
      },
      Effect: {
        value:
          "Si la primera mano de la ronda es un 6 único, destrúyelo y crea una carta Espectral (Debe haber espacio)",
        weight: 164,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Constellation.webp",
        value: "Constelación",
        weight: 54,
      },
      Effect: {
        value:
          "Este Joker gana X0.1 Mult cada vez que se usa una carta Planetaria (Actualmente X1 Mult)",
        weight: 95,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Hiker.webp",
        value: "Excursionista",
        weight: 55,
      },
      Effect: {
        value:
          "Cada carta jugada gana permanentemente +5 Fichas cuando se puntúa",
        weight: 165,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Faceless_Joker.webp",
        value: "Joker Sin Rostro",
        weight: 56,
      },
      Effect: {
        value: "Gana $5 si se descartan 3 o más cartas de cara al mismo tiempo",
        weight: 38,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Green_Joker.webp",
        value: "Joker Verde",
        weight: 57,
      },
      Effect: {
        value:
          "+1 Mult por cada mano jugada -1 Mult por cada descarte (Actualmente +0 Mult)",
        weight: 166,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Superposition.webp",
        value: "Superposición",
        weight: 58,
      },
      Effect: {
        value:
          "Crea una carta de Tarot si la mano de póker contiene un As y una Escalera (Debe haber espacio)",
        weight: 78,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/To_Do_List.webp",
        value: "Lista de Tareas",
        weight: 59,
      },
      Effect: {
        value:
          "Gana $4 si la mano de póker es una [Mano de Póker], la mano de póker cambia al final de la ronda",
        weight: 83,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Cavendish.webp",
        value: "Cavendish",
        weight: 60,
      },
      Effect: {
        value:
          "X3 Mult, 1 en 1000 de probabilidad de que esta carta sea destruida al final de la ronda",
        weight: 167,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value:
          "Disponible desde el inicio. (No aparecerá en la tienda a menos que Gros Michel se haya destruido durante la ejecución actual)",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Card_Sharp.webp",
        value: "Cortador de Cartas",
        weight: 61,
      },
      Effect: {
        value:
          "X3 Mult si la mano de póker jugada ya ha sido jugada esta ronda",
        weight: 94,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Red_Card.webp",
        value: "Carta Roja",
        weight: 62,
      },
      Effect: {
        value:
          "Este Joker gana +3 Mult cuando se omite cualquier Paquete de Mejora (Actualmente +0 Mult)",
        weight: 47,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Madness.webp",
        value: "Locura",
        weight: 63,
      },
      Effect: {
        value:
          "Cuando se selecciona el Pequeño Ciego o el Gran Ciego, gana X0.5 Mult y destruye un Joker aleatorio (Actualmente X1 Mult)",
        weight: 168,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Square_Joker.webp",
        value: "Joker Cuadrado",
        weight: 64,
      },
      Effect: {
        value:
          "Este Joker gana +4 Fichas si la mano jugada tiene exactamente 4 cartas (Actualmente 0 Fichas)",
        weight: 71,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Seance.webp",
        value: "Séance",
        weight: 65,
      },
      Effect: {
        value:
          "Si la mano de póker es una Escalera de Color, crea una carta Espectral aleatoria (Debe haber espacio)",
        weight: 169,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Riff-Raff.webp",
        value: "Riff-Raff",
        weight: 66,
      },
      Effect: {
        value:
          "Cuando se selecciona Ciego, crea 2 Jokers comunes (Debe haber espacio)",
        weight: 76,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Vampire.webp",
        value: "Vampiro",
        weight: 67,
      },
      Effect: {
        value:
          "Este Joker gana X0.1 Mult por cada carta Mejorada puntuada jugada, elimina la Mejora de la carta (Actualmente X1 Mult)",
        weight: 89,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Shortcut.webp",
        value: "Atajo",
        weight: 68,
      },
      Effect: {
        value:
          "Permite que las Escaleras se hagan con huecos de 1 rango (ej: 10 8 6 5 3)",
        weight: 170,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Hologram.webp",
        value: "Holograma",
        weight: 69,
      },
      Effect: {
        value:
          "Este Joker gana X0.25 Mult cada vez que se añade una carta de juego a tu mazo (Actualmente X1 Mult)",
        weight: 171,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Vagabond.webp",
        value: "Vagabundo",
        weight: 70,
      },
      Effect: {
        value: "Crea una carta de Tarot si la mano se juega con $4 o menos",
        weight: 172,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "rara",
        weight: 3,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Baron.webp",
        value: "Barón",
        weight: 71,
      },
      Effect: {
        value: "Cada Rey sostenido en la mano da X1.5 Mult",
        weight: 39,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "rara",
        weight: 3,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Cloud_9.webp",
        value: "Nube 9",
        weight: 72,
      },
      Effect: {
        value:
          "Gana $1 por cada 9 en tu mazo completo al final de la ronda (Actualmente $4)",
        weight: 85,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Rocket.webp",
        value: "Cohete",
        weight: 73,
      },
      Effect: {
        value:
          "Gana $1 al final de la ronda. El pago aumenta en $2 cuando se derrota al jefe ciego",
        weight: 55,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Obelisk.webp",
        value: "Obelisco",
        weight: 74,
      },
      Effect: {
        value:
          "Este Joker gana X0.2 Mult por cada mano consecutiva jugada sin jugar tu mano de póker más jugada (Actualmente X1 Mult)",
        weight: 173,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "rara",
        weight: 3,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Midas_Mask.webp",
        value: "Máscara de Midas",
        weight: 75,
      },
      Effect: {
        value:
          "Todas las cartas de cara jugadas se convierten en cartas de Oro cuando se puntúan",
        weight: 174,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Luchador.webp",
        value: "Luchador",
        weight: 76,
      },
      Effect: {
        value: "Vende esta carta para desactivar el Ciego Jefe actual",
        weight: 176,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Photograph.webp",
        value: "Fotografía",
        weight: 77,
      },
      Effect: {
        value: "La primera carta de cara jugada da X2 Mult cuando se puntúa",
        weight: 175,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Gift_Card.webp",
        value: "Tarjeta de Regalo",
        weight: 78,
      },
      Effect: {
        value:
          "Agrega $1 de valor de venta a cada Joker y carta Consumible al final de la ronda",
        weight: 177,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Turtle_Bean.webp",
        value: "Frijol Tortuga",
        weight: 79,
      },
      Effect: {
        value: "+5 tamaño de mano, se reduce en 1 cada ronda",
        weight: 60,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Erosion.webp",
        value: "Erosión",
        weight: 80,
      },
      Effect: {
        value:
          "+4 Mult por cada carta debajo del [tamaño inicial del mazo] en tu mazo completo (Actualmente +0 Mult)",
        weight: 178,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Reserved_Parking.webp",
        value: "Estacionamiento Reservado",
        weight: 81,
      },
      Effect: {
        value:
          "Cada carta de cara en la mano tiene 1 en 2 de probabilidad de dar $1",
        weight: 179,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Mail-In_Rebate.webp",
        value: "Reembolso por Correo",
        weight: 82,
      },
      Effect: {
        value:
          "Gana $5 por cada [rango] descartado, el rango cambia cada ronda",
        weight: 28,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/To_the_Moon.webp",
        value: "Hacia la Luna",
        weight: 83,
      },
      Effect: {
        value:
          "Gana $1 extra de interés por cada $5 que tengas al final de la ronda",
        weight: 180,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Hallucination.webp",
        value: "Alucinación",
        weight: 84,
      },
      Effect: {
        value:
          "1 en 2 de probabilidad de crear una carta de Tarot cuando se abre cualquier Paquete de Mejora (Debe haber espacio)",
        weight: 48,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Fortune_Teller.webp",
        value: "Adivino",
        weight: 85,
      },
      Effect: {
        value:
          "+1 Mult por cada carta de Tarot utilizada en esta ejecución (Actualmente +0)",
        weight: 181,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Juggler.webp",
        value: "Malabarista",
        weight: 86,
      },
      Effect: {
        value: "+1 tamaño de mano",
        weight: 62,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Drunkard.webp",
        value: "Borracho",
        weight: 87,
      },
      Effect: {
        value: "+1 descarte cada ronda",
        weight: 61,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Stone_Joker.webp",
        value: "Joker de Piedra",
        weight: 88,
      },
      Effect: {
        value:
          "Da +25 Fichas por cada Carta de Piedra en tu mazo completo (Actualmente +0 Fichas)",
        weight: 84,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value:
          "Disponible desde el inicio. (No aparecerá en la tienda a menos que el jugador tenga una Carta de Piedra en su mazo.)",
        weight: 1,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Golden_Joker.webp",
        value: "Joker Dorado",
        weight: 89,
      },
      Effect: {
        value: "Gana $4 al final de la ronda",
        weight: 101,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Lucky_Cat.webp",
        value: "Gato de la Suerte",
        weight: 90,
      },
      Effect: {
        value:
          "Este Joker gana X0.25 Mult cada vez que una carta de Suerte se activa exitosamente (Actualmente X1 Mult)",
        weight: 64,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value:
          "Disponible desde el inicio. (No aparecerá en la tienda a menos que el jugador tenga una Carta de Suerte en su mazo.)",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Baseball_Card.webp",
        value: "Carta de Béisbol",
        weight: 91,
      },
      Effect: {
        value: "Los Jokers poco comunes dan X1.5 Mult cada uno",
        weight: 182,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Bull.webp",
        value: "Toro",
        weight: 92,
      },
      Effect: {
        value: "+2 Fichas por cada $1 que tengas (Actualmente +0 Fichas)",
        weight: 183,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Diet_Cola.webp",
        value: "Cola Light",
        weight: 93,
      },
      Effect: {
        value: "Vende esta carta para crear una Etiqueta Doble gratuita",
        weight: 59,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Trading_Card.webp",
        value: "Carta de Intercambio",
        weight: 94,
      },
      Effect: {
        value:
          "Si el primer descarte de la ronda tiene solo 1 carta, destrúyela y gana $3",
        weight: 69,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Flash_Card.webp",
        value: "Carta Flash",
        weight: 95,
      },
      Effect: {
        value:
          "Este Joker gana +2 Mult por cada rerrol en la tienda (Actualmente +0 Mult)",
        weight: 63,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Popcorn.webp",
        value: "Palomitas",
        weight: 96,
      },
      Effect: {
        value: "X20 Mult -4 Mult por cada ronda jugada",
        weight: 100,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Spare_Trousers.webp",
        value: "Pantalones de Repuesto",
        weight: 97,
      },
      Effect: {
        value:
          "Este Joker gana +2 Mult si la mano jugada contiene un Doble Par (Actualmente +0 Mult)",
        weight: 79,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Ancient_Joker.webp",
        value: "Joker Antiguo",
        weight: 98,
      },
      Effect: {
        value:
          "Cada carta jugada con [palo] da X1.5 Mult cuando se puntúa, el palo cambia al final de la ronda",
        weight: 184,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Ramen.webp",
        value: "Ramen",
        weight: 99,
      },
      Effect: {
        value: "X2 Mult, pierde X0.01 Mult por cada carta descartada",
        weight: 93,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Walkie_Talkie.webp",
        value: "Walkie Talkie",
        weight: 100,
      },
      Effect: {
        value: "Cada 10 o 4 jugado da +10 Fichas y +4 Mult cuando se puntúa",
        weight: 106,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "++",
        weight: 3,
      },
    },
    {
      Joker: {
        image: "/jokers/Seltzer.webp",
        value: "Seltzer",
        weight: 101,
      },
      Effect: {
        value:
          "Reactivar todas las cartas jugadas durante las próximas 10 manos",
        weight: 185,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "...",
        weight: 5,
      },
    },
    {
      Joker: {
        image: "/jokers/Castle.webp",
        value: "Castillo",
        weight: 102,
      },
      Effect: {
        value:
          "Este Joker gana +3 Fichas por cada carta de [palo] descartada, el palo cambia cada ronda (Actualmente +0 Fichas)",
        weight: 70,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Smiley_Face.webp",
        value: "Cara Sonriente",
        weight: 103,
      },
      Effect: {
        value: "Las cartas de cara jugadas dan +5 Mult cuando se puntúan",
        weight: 19,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Campfire.webp",
        value: "Fogata",
        weight: 104,
      },
      Effect: {
        value:
          "Este Joker gana X0.25 Mult por cada carta vendida, se reinicia cuando el Ciego Jefe es derrotado (Actualmente X1 Mult)",
        weight: 52,
      },
      Cost: {
        value: "$9",
        weight: 9,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Disponible desde el inicio",
        weight: 0,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Golden_Ticket.webp",
        value: "Boleto Dorado",
        weight: 105,
      },
      Effect: {
        value: "Las cartas de oro jugadas ganan $4 cuando se puntúan",
        weight: 186,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value:
          "Jugar una mano de 5 cartas que contenga solo cartas de oro. (El jugador también debe tener una Carta de Oro en su mazo para que aparezca en la tienda.)",
        weight: 1,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/MrBones.webp",
        value: "Sr. Huesos",
        weight: 106,
      },
      Effect: {
        value:
          "Previene la muerte si las fichas ganadas son al menos el 25% de las fichas requeridas, se autodestruye",
        weight: 187,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Perder cinco rondas",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Acrobat.webp",
        value: "Acrobata",
        weight: 107,
      },
      Effect: {
        value: "X3 Mult en la mano final de la ronda",
        weight: 49,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Jugar 200 manos",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Sock_and_Buskin.webp",
        value: "Calcetín y Buskin",
        weight: 108,
      },
      Effect: {
        value: "Reactivar todas las cartas de cara jugadas",
        weight: 31,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Jugar 300 cartas de cara en todas las rondas",
        weight: 1,
      },
      Type: {
        value: "...",
        weight: 5,
      },
    },
    {
      Joker: {
        image: "/jokers/Swashbuckler.webp",
        value: "Espadachín",
        weight: 109,
      },
      Effect: {
        value:
          "Añade el valor de venta de todos los otros Jokers poseídos a Mult (Actualmente +1 Mult)",
        weight: 54,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Vender 20 Jokers",
        weight: 1,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Troubadour.webp",
        value: "Trovero",
        weight: 110,
      },
      Effect: {
        value: "+2 tamaño de mano, -1 mano por ronda",
        weight: 188,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value:
          "Ganar 5 rondas consecutivas jugando solo una mano en cada una. (Los descartes están bien.)",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Certificate.webp",
        value: "Certificado",
        weight: 111,
      },
      Effect: {
        value:
          "Cuando comienza la ronda, añade una carta de juego aleatoria con un sello aleatorio a tu mano",
        weight: 65,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Tener una carta de oro con un sello dorado",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Smeared_Joker.webp",
        value: "Joker Manchado",
        weight: 112,
      },
      Effect: {
        value:
          "Los íconos de palo de corazones y diamantes cuentan como el mismo palo, los íconos de palo de tréboles y picas cuentan como el mismo palo",
        weight: 66,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Tener 3 o más cartas comodín en tu mazo",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Throwback.webp",
        value: "Retroceso",
        weight: 113,
      },
      Effect: {
        value:
          "X0.25 Mult por cada Ciego omitido en esta ronda (Actualmente X1 Mult)",
        weight: 53,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Continuar una ronda desde el Menú Principal",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Hanging_Chad.webp",
        value: "Chad Colgante",
        weight: 114,
      },
      Effect: {
        value:
          "Reactivar la primera carta jugada utilizada en la puntuación 2 veces adicionales",
        weight: 98,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Vencer a un Ciego Jefe con una mano de Carta Alta",
        weight: 1,
      },
      Type: {
        value: "...",
        weight: 5,
      },
    },
    {
      Joker: {
        image: "/jokers/Rough_Gem.webp",
        value: "Gema Bruta",
        weight: 115,
      },
      Effect: {
        value:
          "Las cartas jugadas con el ícono de palo de diamante ganan $1 cuando se puntúan",
        weight: 87,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Tener al menos 30 Diamantes en tu mazo",
        weight: 1,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Bloodstone.webp",
        value: "Piedra de Sangre",
        weight: 116,
      },
      Effect: {
        value:
          "1 de 2 posibilidades para que las cartas jugadas con el ícono de palo de corazones den X1.5 Mult cuando se puntúan",
        weight: 86,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Tener al menos 30 Corazones en tu mazo",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Arrowhead.webp",
        value: "Punta de Flecha",
        weight: 117,
      },
      Effect: {
        value:
          "Las cartas jugadas con el ícono de palo de trébol dan +50 Fichas cuando se puntúan",
        weight: 80,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Tener al menos 30 Tréboles en tu mazo",
        weight: 1,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Onyx_Agate.webp",
        value: "Ágata Ónix",
        weight: 118,
      },
      Effect: {
        value:
          "Las cartas jugadas con el ícono de palo de trébol dan +7 Mult cuando se puntúan",
        weight: 81,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Tener al menos 30 Tréboles en tu mazo",
        weight: 1,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Glass_Joker.webp",
        value: "Joker de Cristal",
        weight: 119,
      },
      Effect: {
        value:
          "Este Joker gana X0.75 Mult por cada Carta de Cristal que es destruida (Actualmente X1 Mult)",
        weight: 189,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value:
          "Tener 5 o más cartas de cristal en tu mazo. (El jugador también debe tener una Carta de Cristal en su mazo para que aparezca en la tienda.)",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Showman.webp",
        value: "Showman",
        weight: 120,
      },
      Effect: {
        value:
          "Las cartas Joker, Tarot, Planet y Spectral pueden aparecer múltiples veces",
        weight: 190,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Alcanza el nivel de Apuesta 4",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Flower_Pot.webp",
        value: "Maceta",
        weight: 121,
      },
      Effect: {
        value:
          "X3 Mult si la mano de póker contiene una carta de diamante, trébol, corazón y pica",
        weight: 67,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Alcanza el nivel de Apuesta 8",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Blueprint.webp",
        value: "Plano",
        weight: 122,
      },
      Effect: {
        value: "Copia la habilidad del Joker a la derecha",
        weight: 57,
      },
      Cost: {
        value: "$10",
        weight: 10,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Gana 1 ronda",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Wee_Joker.webp",
        value: "Joker Pequeño",
        weight: 123,
      },
      Effect: {
        value:
          "Este Joker gana +8 Fichas cuando se puntúa un 2 jugado (Actualmente +0 Fichas)",
        weight: 91,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Gana una ronda en 18 o menos rondas",
        weight: 1,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Merry_Andy.webp",
        value: "Andy Alegre",
        weight: 124,
      },
      Effect: {
        value: "+3 descartes cada ronda, -1 tamaño de mano",
        weight: 191,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Gana una ronda en 12 o menos rondas",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Oops_All_6s.webp",
        value: "¡Oops! Todos 6s",
        weight: 125,
      },
      Effect: {
        value:
          "Duplica todas las probabilidades listadas (ej: 1 en 3 -> 2 en 3)",
        weight: 192,
      },
      Cost: {
        value: "$4",
        weight: 4,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Gana al menos 10,000 Fichas en una sola mano",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/The_Idol.webp",
        value: "El Ídolo",
        weight: 126,
      },
      Effect: {
        value:
          "Cada [rango] de [palo] jugado da X2 Mult cuando se puntúa, la carta cambia cada ronda",
        weight: 193,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "En una mano, gana al menos 1,000,000 Fichas",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Seeing_Double.webp",
        value: "Viendo Doble",
        weight: 127,
      },
      Effect: {
        value:
          "X2 Mult si la mano jugada tiene una carta de trébol que puntúa y una carta de cualquier otro palo que puntúa",
        weight: 90,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value:
          "Juega una mano que contenga cuatro 7 de trébol. Otros palos que cuenten como trébol (por ejemplo, palos comodín) con rango 7 también contarán",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Matador.webp",
        value: "Matador",
        weight: 128,
      },
      Effect: {
        value: "Gana $8 si la mano jugada activa la habilidad de Ciego Jefe",
        weight: 72,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Derrota a un Ciego Jefe en una mano, sin usar descartes",
        weight: 1,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Hit_the_Road.webp",
        value: "Golpea el Camino",
        weight: 129,
      },
      Effect: {
        value:
          "Este Joker gana X0.5 Mult por cada J que se descarte esta ronda (Actualmente X1 Mult)",
        weight: 82,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Descarta 5 Jacks al mismo tiempo",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/The_Duo.webp",
        value: "El Dúo",
        weight: 130,
      },
      Effect: {
        value: "X2 Mult si la mano jugada contiene un par",
        weight: 3,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Gana una ronda sin jugar un par",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/The_Trio.webp",
        value: "El Trío",
        weight: 131,
      },
      Effect: {
        value: "X3 Mult si la mano jugada contiene un trío",
        weight: 2,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Gana una ronda sin jugar un trío",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/The_Family.webp",
        value: "La Familia",
        weight: 132,
      },
      Effect: {
        value: "X4 Mult si la mano jugada contiene un póker",
        weight: 1,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Gana una ronda sin jugar un póker",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/The_Order.webp",
        value: "El Orden",
        weight: 133,
      },
      Effect: {
        value: "X3 Mult si la mano jugada contiene una escalera",
        weight: 4,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Gana una ronda sin jugar una escalera",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/The_Tribe.webp",
        value: "La Tribu",
        weight: 134,
      },
      Effect: {
        value: "X2 Mult si la mano jugada contiene un color",
        weight: 5,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Gana una ronda sin jugar un color",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Stuntman.webp",
        value: "Nombre de Acrobata",
        weight: 135,
      },
      Effect: {
        value: "+250 Fichas, -2 tamaño de mano",
        weight: 194,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value:
          "Gana al menos 100 millones (100,000,000) Fichas en una sola mano",
        weight: 1,
      },
      Type: {
        value: "+c",
        weight: 0,
      },
    },
    {
      Joker: {
        image: "/jokers/Invisible_Joker.webp",
        value: "Joker Invisible",
        weight: 136,
      },
      Effect: {
        value:
          "Después de 2 rondas, vende esta carta para duplicar un Joker aleatorio (Actualmente 0/2) (Elimina el negativo de la copia)",
        weight: 195,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Gana un juego sin tener más de 4 jokers",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Brainstorm.webp",
        value: "Tormenta de Ideas",
        weight: 137,
      },
      Effect: {
        value: "Copia la habilidad del Joker más a la izquierda",
        weight: 58,
      },
      Cost: {
        value: "$10",
        weight: 10,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Descarta una Escalera Real",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Satellite.webp",
        value: "Satélite",
        weight: 138,
      },
      Effect: {
        value:
          "Gana $1 al final de la ronda por cada carta Planet única usada en esta partida",
        weight: 50,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Tener al menos $400",
        weight: 1,
      },
      Type: {
        value: "+$",
        weight: 6,
      },
    },
    {
      Joker: {
        image: "/jokers/Shoot_the_Moon.webp",
        value: "Dispara a la Luna",
        weight: 139,
      },
      Effect: {
        value: "Cada Reina en mano da +13 Mult",
        weight: 196,
      },
      Cost: {
        value: "$5",
        weight: 5,
      },
      Rarity: {
        value: "común",
        weight: 1,
      },
      Requirement: {
        value: "Juega todas las cartas de Corazón en tu mazo en una ronda",
        weight: 1,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Drivers_License.webp",
        value: "Licencia de Conducir",
        weight: 140,
      },
      Effect: {
        value:
          "X3 Mult si tienes al menos 16 cartas Mejoradas en tu mazo completo (Actualmente 0)",
        weight: 97,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Mejora 16 cartas en tu mazo",
        weight: 1,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Cartomancer.webp",
        value: "Cartomante",
        weight: 141,
      },
      Effect: {
        value:
          "Crea una carta de Tarot cuando se selecciona Ciego (Debe haber espacio)",
        weight: 77,
      },
      Cost: {
        value: "$6",
        weight: 6,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Descubre cada carta de Tarot",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Astronomer.webp",
        value: "Astrónomo",
        weight: 142,
      },
      Effect: {
        value:
          "Todas las cartas Planet y Paquetes Celestiales en la tienda son gratis",
        weight: 74,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Descubre todas las cartas Planet",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Burnt_Joker.png",
        value: "Joker Quemado",
        weight: 143,
      },
      Effect: {
        value:
          "Mejora el nivel de la primera mano de póker descartada cada ronda",
        weight: 75,
      },
      Cost: {
        value: "$8",
        weight: 8,
      },
      Rarity: {
        value: "raro",
        weight: 3,
      },
      Requirement: {
        value: "Vende 50 cartas",
        weight: 1,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Bootstraps.webp",
        value: "Tirantes",
        weight: 144,
      },
      Effect: {
        value:
          "Este Joker gana +2 Mult por cada $5 que tengas (Actualmente +0 Mult)",
        weight: 92,
      },
      Cost: {
        value: "$7",
        weight: 7,
      },
      Rarity: {
        value: "poco común",
        weight: 2,
      },
      Requirement: {
        value: "Tener al menos 2 Jokers Policromáticos al mismo tiempo",
        weight: 1,
      },
      Type: {
        value: "+m",
        weight: 1,
      },
    },
    {
      Joker: {
        image: "/jokers/Canio.webp",
        value: "Canio",
        weight: 145,
      },
      Effect: {
        value:
          "Este Joker gana X1 Mult cuando se destruye una carta de cara (Actualmente X1 Mult)",
        weight: 96,
      },
      Cost: {
        value: "N/A",
        weight: 999,
      },
      Rarity: {
        value: "legendario",
        weight: 4,
      },
      Requirement: {
        value: "Encuentra este Joker en la carta del Alma",
        weight: 2,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Triboulet.webp",
        value: "Triboulet",
        weight: 146,
      },
      Effect: {
        value: "Los Reyes y Reinas jugados dan X2 Mult cuando se puntúan",
        weight: 197,
      },
      Cost: {
        value: "N/A",
        weight: 999,
      },
      Rarity: {
        value: "legendario",
        weight: 4,
      },
      Requirement: {
        value: "Encuentra este Joker en la carta del Alma",
        weight: 2,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Yorick.webp",
        value: "Yorick",
        weight: 147,
      },
      Effect: {
        value:
          "Este Joker gana X1 Mult cada 23 cartas descartadas (Actualmente X1 Mult)",
        weight: 198,
      },
      Cost: {
        value: "N/A",
        weight: 999,
      },
      Rarity: {
        value: "legendario",
        weight: 4,
      },
      Requirement: {
        value: "Encuentra este Joker en la carta del Alma",
        weight: 2,
      },
      Type: {
        value: "Xm",
        weight: 2,
      },
    },
    {
      Joker: {
        image: "/jokers/Chicot.webp",
        value: "Chicot",
        weight: 148,
      },
      Effect: {
        value: "Desactiva el efecto de cada Ciego Jefe",
        weight: 42,
      },
      Cost: {
        value: "N/A",
        weight: 999,
      },
      Rarity: {
        value: "legendario",
        weight: 4,
      },
      Requirement: {
        value: "Encuentra este Joker en la carta del Alma",
        weight: 2,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
    {
      Joker: {
        image: "/jokers/Perkeo.webp",
        value: "Perkeo",
        weight: 149,
      },
      Effect: {
        value:
          "Crea una copia Negativa de 1 carta consumible aleatoria en tu posesión al final de la tienda",
        weight: 43,
      },
      Cost: {
        value: "N/A",
        weight: 999,
      },
      Rarity: {
        value: "legendario",
        weight: 4,
      },
      Requirement: {
        value: "Encuentra este Joker en la carta del Alma",
        weight: 2,
      },
      Type: {
        value: "!!",
        weight: 4,
      },
    },
  ],
};
