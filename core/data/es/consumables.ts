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
          "Destruye 1 carta aleatoria en tu mano, pero añade 3 cartas cara mejoradas aleatorias.",
        weight: 0,
      },
    },
    {
      Spectral: {
        value: "Grimorio",
        weight: 1,
        image: "/consumables/spectral-cards/Spectral_Grim.webp",
      },
      Description: {
        value:
          "Destruye 1 carta aleatoria en tu mano, pero añade 2 Ases mejorados aleatorios.",
        weight: 1,
      },
    },
    {
      Spectral: {
        value: "Invocación",
        weight: 2,
        image: "/consumables/spectral-cards/Spectral_Incantation.webp",
      },
      Description: {
        value:
          "Destruye 1 carta aleatoria en tu mano, pero añade 4 cartas numeradas mejoradas aleatorias.",
        weight: 2,
      },
    },
    {
      Spectral: {
        value: "Talismán",
        weight: 3,
        image: "/consumables/spectral-cards/Spectral_Talisman.webp",
      },
      Description: {
        value: "Añade un Sello de Oro a 1 carta seleccionada.",
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
          "Añade edición Foil, Holográfica o Policromática (determinado al azar) a 1 carta seleccionada en la mano.",
        weight: 4,
      },
    },
    {
      Spectral: {
        value: "Espectro",
        weight: 5,
        image: "/consumables/spectral-cards/Spectral_Wraith.webp",
      },
      Description: {
        value:
          "Crea un Joker Raro aleatorio (debe haber espacio), pero establece el dinero en $0.",
        weight: 5,
      },
    },
    {
      Spectral: {
        value: "Sello",
        weight: 6,
        image: "/consumables/spectral-cards/Spectral_Sigil.webp",
      },
      Description: {
        value:
          "Convierte todas las cartas en la mano en un solo palo aleatorio.",
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
          "Convierte todas las cartas en la mano en un solo rango aleatorio, pero -1 tamaño de mano.",
        weight: 7,
      },
    },
    {
      Spectral: {
        value: "Ectoplasma",
        weight: 8,
        image: "/consumables/spectral-cards/Spectral_Ectoplasm.webp",
      },
      Description: {
        value:
          "Añade Negativo a un Joker aleatorio, pero -1 tamaño de mano. (La reducción del tamaño de la mano al usar aumenta en 1 por cada vez que se usa Ectoplasma en una partida, por ejemplo, usar Ectoplasma 3 veces en la misma partida disminuye el tamaño de la mano en un total de 6 (1+2+3)).",
        weight: 8,
      },
    },
    {
      Spectral: {
        value: "Inmolar",
        weight: 9,
        image: "/consumables/spectral-cards/Spectral_Immolate.webp",
      },
      Description: {
        value: "Destruye 5 cartas aleatorias en la mano, pero gana $20.",
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
          "Crea una copia de 1 de tus Jokers al azar, luego destruye los demás, dejándote con dos Jokers idénticos. (Las ediciones también se copian, excepto Negativo).",
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
        value: "Deja Vu: Añade un Sello Rojo a 1 carta seleccionada.",
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
        value: "Añade Policromático a un Joker aleatorio, y destruye el resto.",
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
        value: "Añade un Sello Azul a 1 carta seleccionada.",
        weight: 13,
      },
    },
    {
      Spectral: {
        value: "Médium",
        weight: 14,
        image: "/consumables/spectral-cards/Spectral_Medium.webp",
      },
      Description: {
        value: "Añade un Sello Púrpura a 1 carta seleccionada.",
        weight: 14,
      },
    },
    {
      Spectral: {
        value: "Críptido",
        weight: 15,
        image: "/consumables/spectral-cards/Spectral_Cryptid.webp",
      },
      Description: {
        value:
          "Crea 2 copias exactas (incluyendo Mejoras, Ediciones y Sellos) de una carta seleccionada en tu mano.",
        weight: 15,
      },
    },
    {
      Spectral: {
        value: "El Alma",
        weight: 16,
        image: "/consumables/spectral-cards/Spectral_Soul.webp",
      },
      Description: {
        value:
          "Crea un Joker Legendario (debe haber espacio). Arte: Esta carta está animada, con la gema latiendo como un corazón, o quizás algo dentro está intentando salir...",
        weight: 16,
      },
    },
    {
      Spectral: {
        value: "Agujero Negro",
        weight: 17,
        image: "/consumables/spectral-cards/Spectral_Black_Hole.webp",
      },
      Description: {
        value:
          "Mejora cada mano de póker (incluyendo manos secretas aún no descubiertas) en un nivel.",
        weight: 17,
      },
    },
  ],
};

export const tarotCards = {
  data: [
    {
      Tarot: {
        value: "El Tonto (0)",
        weight: 0,
        image: "/consumables/tarot-cards/Tarot_Fool.webp",
      },
      Description: {
        value:
          "Crea la última carta de Tarot o Planet usada durante esta partida, excluyendo El Tonto.",
        weight: 0,
      },
    },
    {
      Tarot: {
        value: "El Mago (I)",
        weight: 1,
        image: "/consumables/tarot-cards/Tarot_Magician.webp",
      },
      Description: {
        value: "Mejora 2 cartas seleccionadas a Cartas de Suerte.",
        weight: 1,
      },
    },
    {
      Tarot: {
        value: "La Sacerdotisa (II)",
        weight: 2,
        image: "/consumables/tarot-cards/Tarot_High_Priestess.webp",
      },
      Description: {
        value: "Crea hasta 2 cartas Planet aleatorias (debe haber espacio).",
        weight: 2,
      },
    },
    {
      Tarot: {
        value: "La Emperatriz (III)",
        weight: 3,
        image: "/consumables/tarot-cards/Tarot_Empress.webp",
      },
      Description: {
        value: "Mejora 2 cartas seleccionadas a Cartas Mult.",
        weight: 3,
      },
    },
    {
      Tarot: {
        value: "El Emperador (IV)",
        weight: 4,
        image: "/consumables/tarot-cards/Tarot_Emperor.webp",
      },
      Description: {
        value: "Crea hasta 2 cartas de Tarot aleatorias (debe haber espacio).",
        weight: 4,
      },
    },
    {
      Tarot: {
        value: "El Hierofante (V)",
        weight: 5,
        image: "/consumables/tarot-cards/Tarot_Hierophant.webp",
      },
      Description: {
        value: "Mejora 2 cartas seleccionadas a Cartas Bonificación.",
        weight: 5,
      },
    },
    {
      Tarot: {
        value: "Los Amantes (VI)",
        weight: 6,
        image: "/consumables/tarot-cards/Tarot_Lovers.webp",
      },
      Description: {
        value: "Mejora 1 carta seleccionada a una Carta Salvaje.",
        weight: 6,
      },
    },
    {
      Tarot: {
        value: "El Carro (VII)",
        weight: 7,
        image: "/consumables/tarot-cards/Tarot_Chariot.webp",
      },
      Description: {
        value: "Mejora 1 carta seleccionada a una Carta de Acero.",
        weight: 7,
      },
    },
    {
      Tarot: {
        value: "La Justicia (VIII)",
        weight: 8,
        image: "/consumables/tarot-cards/Tarot_Justice.webp",
      },
      Description: {
        value: "Mejora 1 carta seleccionada a una Carta de Vidrio.",
        weight: 8,
      },
    },
    {
      Tarot: {
        value: "El Ermitaño (IX)",
        weight: 9,
        image: "/consumables/tarot-cards/Tarot_Hermit.webp",
      },
      Description: {
        value: "Duplica el dinero (máx. de $20).",
        weight: 9,
      },
    },
    {
      Tarot: {
        value: "La Rueda de la Fortuna (X)",
        weight: 10,
        image: "/consumables/tarot-cards/Tarot_Wheel.webp",
      },
      Description: {
        value:
          "1 de 4 posibilidades de añadir edición Foil, Holográfica o Policromática a un Joker aleatorio.",
        weight: 10,
      },
    },
    {
      Tarot: {
        value: "La Fuerza (XI)",
        weight: 11,
        image: "/consumables/tarot-cards/Tarot_Strength.webp",
      },
      Description: {
        value:
          "Aumenta el rango de hasta 2 cartas seleccionadas en 1 (por ejemplo, 4 a 5, 10 a J, K a A, A a 2).",
        weight: 11,
      },
    },
    {
      Tarot: {
        value: "El Colgado (XII)",
        weight: 12,
        image: "/consumables/tarot-cards/Tarot_HangedMan.webp",
      },
      Description: {
        value: "Destruye hasta 2 cartas seleccionadas.",
        weight: 12,
      },
    },
    {
      Tarot: {
        value: "La Muerte (XIII)",
        weight: 13,
        image: "/consumables/tarot-cards/Tarot_Death.webp",
      },
      Description: {
        value:
          "Selecciona 2 cartas, convierte la carta de la izquierda en la carta de la derecha (arrastra para reorganizar).",
        weight: 13,
      },
    },
    {
      Tarot: {
        value: "La Templanza (XIV)",
        weight: 14,
        image: "/consumables/tarot-cards/Tarot_Temperance.webp",
      },
      Description: {
        value:
          "Da el valor total de venta de todos los Jokers actuales (máx. de $50).",
        weight: 14,
      },
    },
    {
      Tarot: {
        value: "El Diablo (XV)",
        weight: 15,
        image: "/consumables/tarot-cards/Tarot_Devil.webp",
      },
      Description: {
        value: "Mejora 1 carta seleccionada a una Carta de Oro.",
        weight: 15,
      },
    },
    {
      Tarot: {
        value: "La Torre (XVI)",
        weight: 16,
        image: "/consumables/tarot-cards/Tarot_Tower.webp",
      },
      Description: {
        value: "Mejora 1 carta seleccionada a una Carta de Piedra.",
        weight: 16,
      },
    },
    {
      Tarot: {
        value: "La Estrella (XVII)",
        weight: 17,
        image: "/consumables/tarot-cards/Tarot_Star.webp",
      },
      Description: {
        value:
          "Convierte hasta 3 cartas seleccionadas al icono de trébol de Diamantes.",
        weight: 17,
      },
    },
    {
      Tarot: {
        value: "La Luna (XVIII)",
        weight: 18,
        image: "/consumables/tarot-cards/Tarot_Moon.webp",
      },
      Description: {
        value:
          "Convierte hasta 3 cartas seleccionadas al icono de trébol Clubs.",
        weight: 18,
      },
    },
    {
      Tarot: {
        value: "El Sol (XIX)",
        weight: 19,
        image: "/consumables/tarot-cards/Tarot_Sun.webp",
      },
      Description: {
        value:
          "Convierte hasta 3 cartas seleccionadas al icono de corazones Hearts.",
        weight: 19,
      },
    },
    {
      Tarot: {
        value: "El Juicio (XX)",
        weight: 20,
        image: "/consumables/tarot-cards/Tarot_Judgement.webp",
      },
      Description: {
        value:
          "Crea una carta Joker aleatoria (debe haber espacio), El Mundo (XXI), Convierte hasta 3 cartas seleccionadas al icono de picas Spades.",
        weight: 20,
      },
    },
  ],
};

export const planetCards = {
  data: [
    {
      Planet: {
        value: `Plutón`,
        weight: 0,
        image: "/consumables/planet-cards/Planet_Pluto.webp",
      },
      Addition: {
        value: "+1 Mult y +10 Fichas",
        weight: 0,
      },
      PokerHand: {
        value: "Carta Alta",
        weight: 0,
      },
      HandBaseScore: {
        value: "1 Mult x 5 Fichas",
        weight: 0,
      },
    },
    {
      Planet: {
        value: "Júpiter",
        weight: 1,
        image: "/consumables/planet-cards/Planet_Jupiter.webp",
      },
      Addition: {
        value: "+2 Mult y +15 Fichas",
        weight: 1,
      },
      PokerHand: {
        value: "Color",
        weight: 1,
      },
      HandBaseScore: {
        value: "4 Mult x 35 Fichas",
        weight: 1,
      },
    },
    {
      Planet: {
        value: "Tierra",
        weight: 2,
        image: "/consumables/planet-cards/Planet_Earth.webp",
      },
      Addition: {
        value: "+2 Mult y +25 Fichas",
        weight: 2,
      },
      PokerHand: {
        value: "Full House",
        weight: 2,
      },
      HandBaseScore: {
        value: "4 Mult x 40 Fichas",
        weight: 2,
      },
    },
    {
      Planet: {
        value: "Marte",
        weight: 3,
        image: "/consumables/planet-cards/Planet_Mars.webp",
      },
      Addition: {
        value: "+3 Mult y +30 Fichas",
        weight: 3,
      },
      PokerHand: {
        value: "Póker",
        weight: 3,
      },
      HandBaseScore: {
        value: "7 Mult x 60 Fichas",
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
        value: "Trío",
        weight: 4,
      },
      PokerHand: {
        value: "Carta Alta",
        weight: 4,
      },
      HandBaseScore: {
        value: "3 Mult x 30 Fichas",
        weight: 4,
      },
    },
    {
      Planet: {
        value: "Urano",
        weight: 5,
        image: "/consumables/planet-cards/Planet_Uranus.webp",
      },
      Addition: {
        value: "+1 Mult y +20 Fichas",
        weight: 5,
      },
      PokerHand: {
        value: "Dos Parejas",
        weight: 5,
      },
      HandBaseScore: {
        value: "2 Mult x 20 Fichas",
        weight: 5,
      },
    },
    {
      Planet: {
        value: "Mercurio",
        weight: 6,
        image: "/consumables/planet-cards/Planet_Mercury.webp",
      },
      Addition: {
        value: "+1 Mult y +15 Fichas",
        weight: 6,
      },
      PokerHand: {
        value: "Pareja",
        weight: 6,
      },
      HandBaseScore: {
        value: "2 Mult x 10 Fichas",
        weight: 6,
      },
    },
    {
      Planet: {
        value: "Neptuno",
        weight: 7,
        image: "/consumables/planet-cards/Planet_Neptune.webp",
      },
      Addition: {
        value: "+4 Mult y +40 Fichas",
        weight: 7,
      },
      PokerHand: {
        value: "Color Sencillo",
        weight: 7,
      },
      HandBaseScore: {
        value: "8 Mult x 100 Fichas",
        weight: 7,
      },
    },
    {
      Planet: {
        value: "Saturno",
        weight: 8,
        image: "/consumables/planet-cards/Planet_Saturn.webp",
      },
      Addition: {
        value: "+3 Mult y +30 Fichas",
        weight: 8,
      },
      PokerHand: {
        value: "Escalera",
        weight: 8,
      },
      HandBaseScore: {
        value: "4 Mult x 30 Fichas",
        weight: 8,
      },
    },
    {
      Planet: {
        value: "Planeta X",
        weight: 9,
        image: "/consumables/planet-cards/Planet_X.webp",
      },
      Addition: {
        value: "+3 Mult y +35 Fichas",
        weight: 9,
      },
      PokerHand: {
        value: "Quintuple",
        weight: 9,
      },
      HandBaseScore: {
        value: "12 Mult x 120 Fichas",
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
        value: "+4 Mult y +40 Fichas",
        weight: 10,
      },
      PokerHand: {
        value: "Color Full House",
        weight: 10,
      },
      HandBaseScore: {
        value: "14 Mult x 140 Fichas",
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
        value: "+3 Mult y +50 Fichas",
        weight: 11,
      },
      PokerHand: {
        value: "Flush Five",
        weight: 11,
      },
      HandBaseScore: {
        value: "16 Mult x 160 Fichas",
        weight: 11,
      },
    },
  ],
};

export const vouchers = {
  data: [
    {
      Voucher: {
        value: "Overstock",
        weight: 0,
        image: "/vouchers/Overstock.webp",
      },
      Effect: {
        value: "+1 espacio de carta disponible en la tienda (hasta 3 espacios)",
        weight: 0,
      },
      UnlocksWhen: {
        value: "",
        weight: 0,
      },
      Notes: {
        value:
          "También vuelve a abastecer inmediatamente cualquier espacio de cartas vacío en la Tienda al ser comprado.",
        weight: 0,
      },
    },
    {
      Voucher: {
        value: "Overstock Plus",
        weight: 1,
        image: "/vouchers/Overstockplus.webp",
      },
      Effect: {
        value: "+1 espacio de carta disponible en la tienda (hasta 4 espacios)",
        weight: 1,
      },
      UnlocksWhen: {
        value: "Gasta un total de $2500 en la tienda.",
        weight: 1,
      },
      Notes: {
        value:
          "También vuelve a abastecer inmediatamente cualquier espacio de cartas vacío en la Tienda al ser comprado.",
        weight: 1,
      },
    },
    {
      Voucher: {
        value: "Clearance Sale",
        weight: 2,
        image: "/vouchers/Clearancesale.webp",
      },
      Effect: {
        value:
          "Todas las cartas y paquetes en la tienda tienen un 25% de descuento.",
        weight: 2,
      },
      UnlocksWhen: {
        value: "",
        weight: 2,
      },
      Notes: {
        value:
          "También reduce el valor de venta de tus jokers actuales. Los precios se redondean hacia abajo.",
        weight: 2,
      },
    },
    {
      Voucher: {
        value: "Liquidation",
        weight: 3,
        image: "/vouchers/Liquidation.webp",
      },
      Effect: {
        value:
          "Todas las cartas y paquetes en la tienda tienen un 50% de descuento.",
        weight: 3,
      },
      UnlocksWhen: {
        value: "Canjea al menos 10 cartas de Voucher en una partida.",
        weight: 3,
      },
      Notes: {
        value:
          "También reduce el valor de venta de tus jokers actuales. Los precios se redondean hacia abajo.",
        weight: 3,
      },
    },
    {
      Voucher: {
        value: "Hone",
        weight: 4,
        image: "/vouchers/Voucher_Hone.webp",
      },
      Effect: {
        value:
          "Las cartas Foil, Holográficas y Policromáticas aparecen 2 veces más a menudo.",
        weight: 4,
      },
      UnlocksWhen: {
        value: "",
        weight: 4,
      },
      Notes: {
        value:
          "El Policromático en los Jokers aparece en realidad 3 veces más a menudo para Hone y 7 veces más a menudo para Glow Up.",
        weight: 4,
      },
    },
    {
      Voucher: {
        value: "Glow Up",
        weight: 5,
        image: "/vouchers/Voucher_Glow_Up.webp",
      },
      Effect: {
        value:
          "Las cartas Foil, Holográficas y Policromáticas aparecen 4 veces más a menudo.",
        weight: 5,
      },
      UnlocksWhen: {
        value:
          "Ten al menos 5 cartas Joker con efecto Foil, Holográfico o Policromático (o Negativo).",
        weight: 5,
      },
      Notes: {
        value:
          "El Policromático en los Jokers aparece en realidad 3 veces más a menudo para Hone y 7 veces más a menudo para Glow Up.",
        weight: 5,
      },
    },
    {
      Voucher: {
        value: "Reroll Surplus",
        weight: 6,
        image: "/vouchers/Voucher_Reroll_Surplus.webp",
      },
      Effect: {
        value: "Las reversiones cuestan $2 menos.",
        weight: 6,
      },
      UnlocksWhen: {
        value: "",
        weight: 6,
      },
      Notes: {
        value: "",
        weight: 6,
      },
    },
    {
      Voucher: {
        value: "Reroll Glut",
        weight: 7,
        image: "/vouchers/Voucher_Reroll_Surplus.webp",
      },
      Effect: {
        value: "Las reversiones cuestan $2 menos adicionales.",
        weight: 7,
      },
      UnlocksWhen: {
        value: "Reversa la tienda un total de 100 veces.",
        weight: 7,
      },
      Notes: {
        value: "",
        weight: 7,
      },
    },
    {
      Voucher: {
        value: "Crystal Ball",
        weight: 8,
        image: "/vouchers/Voucher_Crystal_Ball.webp",
      },
      Effect: {
        value: "+1 espacio de consumible.",
        weight: 8,
      },
      UnlocksWhen: {
        value: "",
        weight: 8,
      },
      Notes: {
        value: "",
        weight: 8,
      },
    },
    {
      Voucher: {
        value: "Omen Globe",
        weight: 9,
        image: "/vouchers/Voucher_Omen_Globe.webp",
      },
      Effect: {
        value:
          "Las cartas espectrales pueden aparecer en cualquiera de los Paquetes de Arcana.",
        weight: 9,
      },
      UnlocksWhen: {
        value: "Usa un total de 25 cartas de Tarot de paquetes de refuerzo.",
        weight: 9,
      },
      Notes: {
        value: "",
        weight: 9,
      },
    },
    {
      Voucher: {
        value: "Telescope",
        weight: 10,
        image: "/vouchers/Voucher_Telescope.webp",
      },
      Effect: {
        value:
          "Los Paquetes Celestiales siempre contienen la carta Planet para tu mano de póker más jugada.",
        weight: 10,
      },
      UnlocksWhen: {
        value: "",
        weight: 10,
      },
      Notes: {
        value:
          "El Telescopio elige la mano de mayor nivel en caso de múltiples manos más jugadas.",
        weight: 10,
      },
    },
    {
      Voucher: {
        value: "Observatory",
        weight: 11,
        image: "/vouchers/Voucher_Observatory.webp",
      },
      Effect: {
        value:
          "Las cartas Planet en tu área de consumibles dan X1.5 Mult para su mano de póker especificada.",
        weight: 11,
      },
      UnlocksWhen: {
        value: "Usa un total de 25 cartas Planet de paquetes de refuerzo.",
        weight: 11,
      },
      Notes: {
        value:
          "El Telescopio elige la mano de mayor nivel en caso de múltiples manos más jugadas.",
        weight: 11,
      },
    },
    {
      Voucher: {
        value: "Grabber",
        weight: 12,
        image: "/vouchers/Voucher_Grabber.webp",
      },
      Effect: {
        value: "Gana permanentemente +1 mano por ronda.",
        weight: 12,
      },
      UnlocksWhen: {
        value: "",
        weight: 12,
      },
      Notes: {
        value: "",
        weight: 12,
      },
    },
    {
      Voucher: {
        value: "Nacho Tong",
        weight: 13,
        image: "/vouchers/Voucher_Nacho_Tong.webp",
      },
      Effect: {
        value: "Gana permanentemente +1 mano adicional por ronda.",
        weight: 13,
      },
      UnlocksWhen: {
        value: "Juega un total de 2500 cartas.",
        weight: 13,
      },
      Notes: {
        value: "",
        weight: 13,
      },
    },
    {
      Voucher: {
        value: "Wasteful",
        weight: 14,
        image: "/vouchers/Voucher_Wasteful.webp",
      },
      Effect: {
        value: "Gana permanentemente +1 descarte cada ronda.",
        weight: 14,
      },
      UnlocksWhen: {
        value: "Juega un total de 2500 cartas.",
        weight: 14,
      },
      Notes: {
        value: "",
        weight: 14,
      },
    },
    {
      Voucher: {
        value: "Recyclomancy",
        weight: 15,
        image: "/vouchers/Voucher_Recyclomancy.webp",
      },
      Effect: {
        value: "Gana permanentemente +1 descarte adicional cada ronda.",
        weight: 15,
      },
      UnlocksWhen: {
        value: "Descarta un total de 2500 cartas.",
        weight: 15,
      },
      Notes: {
        value: "",
        weight: 15,
      },
    },
    {
      Voucher: {
        value: "Tarot Merchant",
        weight: 16,
        image: "/vouchers/Voucher_Tarot_Merchant.webp",
      },
      Effect: {
        value:
          "Las cartas de Tarot aparecen 2 veces más frecuentemente en la tienda.",
        weight: 16,
      },
      UnlocksWhen: {
        value: "",
        weight: 16,
      },
      Notes: {
        value: "",
        weight: 16,
      },
    },
    {
      Voucher: {
        value: "Tarot Tycoon",
        weight: 17,
        image: "/vouchers/Voucher_Tarot_Tycoon.webp",
      },
      Effect: {
        value:
          "Las cartas de Tarot aparecen 4 veces más frecuentemente en la tienda.",
        weight: 17,
      },
      UnlocksWhen: {
        value: "Compra un total de 50 cartas de Tarot en la tienda.",
        weight: 17,
      },
      Notes: {
        value: "",
        weight: 17,
      },
    },
    {
      Voucher: {
        value: "Planet Merchant",
        weight: 18,
        image: "/vouchers/Voucher_Planet_Merchant.webp",
      },
      Effect: {
        value:
          "Las cartas Planet aparecen 2 veces más frecuentemente en la tienda.",
        weight: 18,
      },
      UnlocksWhen: {
        value: "",
        weight: 18,
      },
      Notes: {
        value: "",
        weight: 18,
      },
    },
    {
      Voucher: {
        value: "Planet Tycoon",
        weight: 19,
        image: "/vouchers/Voucher_Planet_Tycoon.webp",
      },
      Effect: {
        value:
          "Las cartas Planet aparecen 4 veces más frecuentemente en la tienda.",
        weight: 19,
      },
      UnlocksWhen: {
        value: "Compra un total de 50 cartas Planet en la tienda.",
        weight: 19,
      },
      Notes: {
        value: "",
        weight: 19,
      },
    },
    {
      Voucher: {
        value: "Seed Money",
        weight: 20,
        image: "/vouchers/Voucher_Seed_Money.webp",
      },
      Effect: {
        value: "Aumenta el límite de interés ganado en cada ronda a $10.",
        weight: 20,
      },
      UnlocksWhen: {
        value: "",
        weight: 20,
      },
      Notes: {
        value: "No hace nada al jugar el mazo Verde.",
        weight: 20,
      },
    },
    {
      Voucher: {
        value: "Money Tree",
        weight: 21,
        image: "/vouchers/Voucher_Money_Tree.webp",
      },
      Effect: {
        value: "Aumenta el límite de interés ganado en cada ronda a $20.",
        weight: 21,
      },
      UnlocksWhen: {
        value:
          "Maximiza las ganancias de interés por ronda durante diez rondas consecutivas.",
        weight: 21,
      },
      Notes: {
        value: "No hace nada al jugar el mazo Verde.",
        weight: 21,
      },
    },
    {
      Voucher: {
        value: "Blank",
        weight: 22,
        image: "/vouchers/Voucher_Blank.webp",
      },
      Effect: {
        value: "¿No hace nada?",
        weight: 22,
      },
      UnlocksWhen: {
        value: "",
        weight: 22,
      },
      Notes: {
        value: "",
        weight: 22,
      },
    },
    {
      Voucher: {
        value: "Antimatter",
        weight: 23,
        image: "/vouchers/Voucher_Antimatter.webp",
      },
      Effect: {
        value: "+1 espacio para Joker.",
        weight: 23,
      },
      UnlocksWhen: {
        value: "Canjea en blanco un total de 10 veces.",
        weight: 23,
      },
      Notes: {
        value: "",
        weight: 23,
      },
    },
    {
      Voucher: {
        value: "Magic Trick",
        weight: 24,
        image: "/vouchers/Voucher_Magic_Trick.webp",
      },
      Effect: {
        value: "Las cartas de juego se pueden comprar en la tienda.",
        weight: 24,
      },
      UnlocksWhen: {
        value: "",
        weight: 24,
      },
      Notes: {
        value:
          "La Ilusión está actualmente (v1.0.1g-FULL) con errores, y las cartas en la tienda no pueden tener sellos, solo mejoras y/o ediciones.",
        weight: 24,
      },
    },
    {
      Voucher: {
        value: "Illusion",
        weight: 25,
        image: "/vouchers/Illusion.webp",
      },
      Effect: {
        value:
          "Las cartas de juego en la tienda pueden tener una Mejora, Edición y/o un Sello.",
        weight: 25,
      },
      UnlocksWhen: {
        value: "Compra un total de 20 cartas de juego en la tienda.",
        weight: 25,
      },
      Notes: {
        value:
          "La Ilusión está actualmente (v1.0.1g-FULL) con errores, y las cartas en la tienda no pueden tener sellos, solo mejoras y/o ediciones.",
        weight: 25,
      },
    },
    {
      Voucher: {
        value: "Hieroglyph",
        weight: 26,
        image: "/vouchers/Voucher_Hieroglyph.webp",
      },
      Effect: {
        value: "-1 Apuesta, -1 mano cada ronda.",
        weight: 26,
      },
      UnlocksWhen: {
        value: "",
        weight: 26,
      },
      Notes: {
        value: "",
        weight: 26,
      },
    },
    {
      Voucher: {
        value: "Petroglyph",
        weight: 27,
        image: "/vouchers/Voucher_Petroglyph.webp",
      },
      Effect: {
        value: "-1 Apuesta, -1 descarte cada ronda.",
        weight: 27,
      },
      UnlocksWhen: {
        value: "Alcanza el nivel de Apuesta 12.",
        weight: 27,
      },
      Notes: {
        value: "",
        weight: 27,
      },
    },
    {
      Voucher: {
        value: "Director's Cut",
        weight: 28,
        image: "/vouchers/Voucher_Directors_Cut.webp",
      },
      Effect: {
        value: "Reversión del Jefe Ciego 1 vez por Apuesta, $10 por reversión.",
        weight: 28,
      },
      UnlocksWhen: {
        value: "",
        weight: 28,
      },
      Notes: {
        value: "",
        weight: 28,
      },
    },
    {
      Voucher: {
        value: "Retcon",
        weight: 29,
        image: "/vouchers/Voucher_Retcon.webp",
      },
      Effect: {
        value:
          "Reversión del Jefe Ciego un número ilimitado de veces, $10 por reversión.",
        weight: 29,
      },
      UnlocksWhen: {
        value: "Descubre 25 Ciegas.",
        weight: 29,
      },
      Notes: {
        value: "",
        weight: 29,
      },
    },
    {
      Voucher: {
        value: "Paint Brush",
        weight: 30,
        image: "/vouchers/Voucher_Paint_Brush.webp",
      },
      Effect: {
        value: "+1 tamaño de mano.",
        weight: 30,
      },
      UnlocksWhen: {
        value: "",
        weight: 30,
      },
      Notes: {
        value: "",
        weight: 30,
      },
    },
    {
      Voucher: {
        value: "Palette",
        weight: 31,
        image: "/vouchers/Palette.webp",
      },
      Effect: {
        value: "+1 tamaño de mano nuevamente.",
        weight: 31,
      },
      UnlocksWhen: {
        value: "Reduce el tamaño de tu mano a 5 cartas.",
        weight: 31,
      },
      Notes: {
        value: "",
        weight: 31,
      },
    },
  ],
};
