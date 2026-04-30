export type Cocktail = {
  slug?: string;
  n: string;
  name: string;
  tagline: string;
  description: string;
  ingredients: string[];
  glass: string;
  garnish: string;
  image: string;
};

export const cocktails: Cocktail[] = [
  {
    slug: "umbrella-lemonade",
    n: "01",
    name: "Umbrella Lemonade",
    tagline: "Sun-soaked. Citrus-forward. Made for the beach.",
    description:
      "Our house pour and the easiest way in. Hand-pressed lemons cut through the natural sweetness of the Palmsap spirit, while a long fizz of soda keeps it loose. This is the drink we order on day one of the holiday and never quite finish ordering.",
    ingredients: [
      "50 ml Umbrella Palmsap Ogogoro",
      "25 ml fresh lemon juice",
      "15 ml cane sugar syrup",
      "Top with chilled soda water",
    ],
    glass: "Tall highball, packed with cubed ice",
    garnish: "Lemon wheel and a single mint leaf",
    image: "/assets/cocktails/lemonade.jpg",
  },
  {
    slug: "umbrella-tonic",
    n: "02",
    name: "Umbrella Tonic",
    tagline: "Botanical. Bright. The four o'clock pour.",
    description:
      "Built like a long G&T but warmer in character, the corn and coconut backbone of Airegin lifts the quinine and pulls the rosemary forward. Three ingredients, one of the best pre-dinner drinks we make.",
    ingredients: [
      "50 ml Umbrella Airegin Ogogoro",
      "150 ml premium Indian tonic",
      "Squeeze of fresh lime",
    ],
    glass: "Copa de balon over a single block of ice",
    garnish: "Rosemary sprig, lightly clapped",
    image: "/assets/cocktails/tonic.jpg",
  },
  {
    n: "03",
    slug: "umbrella-screwdriver",
    name: "Umbrella Screwdriver",
    tagline: "Fresh-pressed orange. Two ice cubes. No fuss.",
    description:
      "The brunch order. The standing rule is fresh juice or no juice; Airegin is too well made to drown. Use blood orange when in season for a sunset-coloured glass.",
    ingredients: [
      "50 ml Umbrella Airegin Ogogoro",
      "120 ml fresh-pressed orange juice",
      "Dash of orange bitters (optional)",
    ],
    glass: "Rocks glass, two oversized ice cubes",
    garnish: "Half-wheel of orange perched on the rim",
    image: "/assets/cocktails/screwdriver.jpg",
  },
  {
    n: "04",
    slug: "umbrella-cosmopolitan",
    name: "Umbrella Cosmopolitan",
    tagline: "Cranberry, lime, triple sec. A new classic.",
    description:
      "A reframed cosmo, shaken hard so the Palmsap spirit chills properly and the citrus oils bloom. The result is sharper and drier than the 90s version, just the way it always should have been.",
    ingredients: [
      "45 ml Umbrella Palmsap Ogogoro",
      "20 ml triple sec",
      "20 ml fresh lime juice",
      "30 ml cranberry juice",
    ],
    glass: "Chilled coupe",
    garnish: "Flamed orange peel, expressed and dropped",
    image: "/assets/cocktails/cosmo.jpg",
  },
  {
    n: "05",
    slug: "umbrella-margarita",
    name: "Umbrella Margarita",
    tagline: "Lime, agave, salt rim. West Africa meets Mexico.",
    description:
      "Palmsap and agave share more DNA than most spirits. Both are wild, agricultural, and made by hand. Swap your tequila for a week. You will taste the difference.",
    ingredients: [
      "50 ml Umbrella Palmsap Ogogoro",
      "25 ml fresh lime juice",
      "15 ml agave syrup",
      "Pinch of sea salt in the shaker",
    ],
    glass: "Coupe with a half salt rim",
    garnish: "Thin lime wheel",
    image: "/assets/cocktails/margarita.jpg",
  },
  {
    n: "06",
    slug: "umbrella-chapman",
    name: "Umbrella Chapman",
    tagline: "Nigerian classic. Grenadine, bitters, citrus.",
    description:
      "The drink every Lagos kitchen knows by heart, made with a grown-up's pour. Long, fruity, deeply nostalgic, and Airegin adds the swagger the original was always quietly missing.",
    ingredients: [
      "40 ml Umbrella Airegin Ogogoro",
      "60 ml Fanta orange",
      "60 ml lemonade",
      "15 ml grenadine",
      "2 dashes Angostura bitters",
    ],
    glass: "Tall pilsner or hurricane glass",
    garnish: "Cucumber slice, orange wheel, a maraschino cherry",
    image: "/assets/cocktails/chapman.jpg",
  },
  {
    n: "07",
    slug: "umbrella-russian",
    name: "Umbrella Russian",
    tagline: "Coffee liqueur, cream, served on the rocks.",
    description:
      "Our nightcap. The Palmsap spirit gives the drink a clean snap that traditional vodka never quite delivers — silkier on the tongue, longer on the finish.",
    ingredients: [
      "40 ml Umbrella Palmsap Ogogoro",
      "20 ml coffee liqueur",
      "30 ml double cream, gently floated",
    ],
    glass: "Old-fashioned tumbler over a clear cube",
    garnish: "Three coffee beans",
    image: "/assets/cocktails/russian.jpg",
  },
  {
    n: "08",
    slug: "umbrella-martini",
    name: "Umbrella Martini",
    tagline: "Stirred. Lemon twist. Always cold.",
    description:
      "The acid test. No juice, no sugar, just Umbrella Airegin, vermouth, and very cold ice. If you have ever wondered what the bottle actually tastes like, order this one.",
    ingredients: [
      "60 ml Umbrella Airegin Ogogoro",
      "10 ml dry vermouth",
      "Stir 30 turns over fresh ice",
    ],
    glass: "Frozen Nick & Nora or coupe",
    garnish: "Lemon twist, expressed and dropped",
    image: "/assets/cocktails/martini.jpg",
  },
];
