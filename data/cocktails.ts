export type Cocktail = {
  n: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longStory: string;
  ingredients: string[];
  method: string[];
  glass: string;
  garnish: string;
  ice: string;
  prepTime: string;
  abv: string;
  difficulty: string;
  tips: string[];
  bottle: "Airegin" | "Palmsap";
  bottleNote: string;
  image: string;
};

export const cocktails: Cocktail[] = [
  {
    n: "01",
    slug: "chapman",
    name: "Umbrella Chapman",
    tagline: "Nigerian classic. Grenadine, bitters, citrus.",
    description:
      "The drink every Lagos kitchen knows by heart, made with a grown-up's pour. Long, fruity, deeply nostalgic, and the Ogogoro adds the swagger the original was always quietly missing.",
    longStory:
      "Chapman is Nigeria's unofficial national cocktail, a non-alcoholic fruit punch that's been on every party table since the 1970s. We've never understood why nobody added a proper spirit. Now someone has.",
    ingredients: [
      "40 ml Umbrella Airegin",
      "60 ml Fanta orange",
      "60 ml lemonade",
      "15 ml grenadine",
      "2 dashes Angostura bitters",
    ],
    method: [
      "Fill a tall glass or hurricane glass to the top with cubed ice.",
      "Pour the Airegin over the ice.",
      "Add the grenadine. It will sink to the bottom, which is fine.",
      "Add the two dashes of Angostura bitters.",
      "Pour the Fanta and lemonade slowly down the side of the glass.",
      "Garnish generously and serve with a long straw.",
    ],
    glass: "Tall pilsner or hurricane glass",
    garnish: "Cucumber slice, orange wheel, a maraschino cherry",
    ice: "Cubed, packed full",
    prepTime: "3 minutes",
    abv: "~8%",
    difficulty: "Easy",
    tips: [
      "The original Chapman uses both Fanta orange and Fanta Citrus. Use both if you can find them.",
      "Grenadine quality matters here. Use a pomegranate-based one, not red food colouring.",
      "Don't stir. The layers are part of the experience.",
    ],
    bottle: "Airegin",
    bottleNote:
      "This is the most Nigerian drink on the menu. Airegin is the most Nigerian bottle. There was no other choice.",
    image: "/assets/cocktails/chapman.jpg",
  },
  {
    n: "02",
    slug: "lemonade",
    name: "Umbrella Lemonade",
    tagline: "Sun-soaked. Citrus-forward. Made for the beach.",
    description:
      "Our house pour and the easiest way in. Hand-pressed lemons cut through the natural sweetness of the cane spirit, while a long fizz of soda keeps it loose.",
    longStory:
      "This is the drink we order on day one of the holiday and never quite finish ordering. It requires almost nothing from you but good lemons, cold soda, and a bottle of Airegin.",
    ingredients: [
      "50 ml Umbrella Airegin",
      "25 ml fresh lemon juice",
      "15 ml cane sugar syrup",
      "Top with chilled soda water",
    ],
    method: [
      "Fill a tall highball glass to the brim with cubed ice.",
      "Pour the Airegin directly over the ice.",
      "Add the fresh lemon juice and cane sugar syrup.",
      "Top gently with chilled soda water, pour down the side of the glass to preserve the fizz.",
      "Give one slow stir from the bottom up. Garnish and serve immediately.",
    ],
    glass: "Tall highball, packed with cubed ice",
    garnish: "Lemon wheel and a single mint leaf",
    ice: "Cubed, packed full",
    prepTime: "2 minutes",
    abv: "~10%",
    difficulty: "Easy",
    tips: [
      "Squeeze your lemons to order. Bottled juice kills this drink.",
      "Use a 1:1 cane sugar syrup if you can find it; it's rounder than white sugar syrup.",
      "Add a pinch of salt to the shaker to lift the citrus further.",
    ],
    bottle: "Airegin",
    bottleNote:
      "Airegin's clean cane backbone and butterscotch nose are made for citrus. The spirit lifts the lemon without fighting it which is something most neutral spirits can't do.",
    image: "/assets/cocktails/lemonade.jpg",
  },
  {
    n: "03",
    slug: "tonic",
    name: "Umbrella Tonic",
    tagline: "Botanical. Bright. The four o'clock pour.",
    description:
      "Built like a long G&T but warmer in character, the cane backbone of Airegin lifts the quinine and pulls the rosemary forward. Three ingredients, one of the best pre-dinner drinks we make.",
    longStory:
      "The G&T exists because gin needed something to hide behind. Airegin doesn't. Use a quality tonic with real quinine bitterness and step back.",
    ingredients: [
      "50 ml Umbrella Airegin",
      "150 ml premium Indian tonic",
      "Squeeze of fresh lime",
    ],
    method: [
      "Place a single large block of ice into a copa de balon glass.",
      "Pour the Airegin over the ice and allow it to chill for 10 seconds.",
      "Add the squeeze of fresh lime directly into the glass.",
      "Pour the tonic slowly down the side of the glass to keep the bubbles alive.",
      "Add the rosemary sprig. Clap it once between your palms first to release the oils.",
    ],
    glass: "Copa de balon over a single block of ice",
    garnish: "Rosemary sprig, lightly clapped",
    ice: "Single large block",
    prepTime: "2 minutes",
    abv: "~13%",
    difficulty: "Easy",
    tips: [
      "Fever-Tree Indian Tonic or London Essence are the house choice. Avoid anything overly sweet.",
      "Chill your copa in the freezer for 5 minutes before building if you have the time.",
      "Don't stir. The tonic stratifies beautifully and drinks better that way.",
    ],
    bottle: "Airegin",
    bottleNote:
      "The herbal lift on Airegin's finish mirrors the botanicals a tonic brings. The result is more complex than any gin tonic we've made.",
    image: "/assets/cocktails/tonic.jpg",
  },
  {
    n: "04",
    slug: "screwdriver",
    name: "Umbrella Screwdriver",
    tagline: "Fresh-pressed orange. Two ice cubes. No fuss.",
    description:
      "The brunch order. The standing rule is fresh juice or no juice. The spirit is too well made to drown.",
    longStory:
      "Use blood orange when in season for a sunset-coloured glass. This is the drink that converts people who think they don't like spirits neat.",
    ingredients: [
      "50 ml Umbrella Airegin",
      "120 ml fresh-pressed orange juice",
      "Dash of orange bitters (optional)",
    ],
    method: [
      "Place two oversized ice cubes into a rocks glass.",
      "Pour the Airegin over the ice.",
      "Add the dash of orange bitters if using.",
      "Pour the fresh orange juice slowly over the back of a bar spoon to layer it slightly.",
      "Perch the orange half-wheel on the rim. Do not stir, let the guest do it.",
    ],
    glass: "Rocks glass, two oversized ice cubes",
    garnish: "Half-wheel of orange perched on the rim",
    ice: "Two oversized cubes",
    prepTime: "2 minutes",
    abv: "~14%",
    difficulty: "Easy",
    tips: [
      "Juice to order, always. Carton OJ makes this a completely different and worse drink.",
      "Blood orange season runs November–March in the UK, use it when you can.",
      "A dash of Angostura works too if you're out of orange bitters.",
    ],
    bottle: "Airegin",
    bottleNote:
      "Airegin's baked banana and vanilla pod mid-palate harmonises with fresh orange in a way that feels inevitable. The cane sweetness does what the orange juice expects.",
    image: "/assets/cocktails/screwdriver.jpg",
  },
  {
    n: "05",
    slug: "cosmopolitan",
    name: "Umbrella Cosmopolitan",
    tagline: "Cranberry, lime, triple sec. A new classic.",
    description:
      "A reframed cosmo, shaken hard so the spirit chills properly and the citrus oils bloom. The result is sharper and drier than the 90s version.",
    longStory:
      "The original Cosmopolitan was a vodka drink by design but vodka exists to disappear. Airegin doesn't disappear. It makes this version taste like the cosmo always wanted to be.",
    ingredients: [
      "45 ml Umbrella Airegin",
      "20 ml triple sec",
      "20 ml fresh lime juice",
      "30 ml cranberry juice",
    ],
    method: [
      "Chill a coupe glass in the freezer for at least 5 minutes.",
      "Add all ingredients to a cocktail shaker with plenty of ice.",
      "Shake hard for 12–15 seconds until the outside of the shaker frosts over.",
      "Double strain into the chilled coupe.",
      "Flame an orange peel over the surface. Hold it skin-side down, heat it, then squeeze sharply over the glass to express the oils. Drop it in.",
    ],
    glass: "Chilled coupe",
    garnish: "Flamed orange peel, expressed and dropped",
    ice: "Shaker only, served up",
    prepTime: "4 minutes",
    abv: "~22%",
    difficulty: "Intermediate",
    tips: [
      "Use a good triple sec. Cointreau is the benchmark. Cheap alternatives make the drink cloying.",
      "Cranberry juice should be unsweetened. Ocean Spray Cranberry Classic, not the cocktail blend.",
      "The double strain removes ice chips and keeps the surface glassy.",
    ],
    bottle: "Airegin",
    bottleNote:
      "Airegin's dry finish cuts through the sweetness that makes most cosmopolitans cloying. You get the fruit, the citrus pop, and then a clean exit, just the way this drink was supposed to work.",
    image: "/assets/cocktails/cosmo.jpg",
  },
  {
    n: "06",
    slug: "margarita",
    name: "Umbrella Margarita",
    tagline: "Lime, agave, salt rim. West Africa meets Mexico.",
    description:
      "Ogogoro and agave share more DNA than most spirits, wild, agricultural, and made by hand. Swap your tequila for a week. You will taste the difference.",
    longStory:
      "The margarita is arguably the most-ordered cocktail in the world. Most versions are made with industrial tequila and bottled lime. This one isn't.",
    ingredients: [
      "50 ml Umbrella Airegin",
      "25 ml fresh lime juice",
      "15 ml agave syrup",
      "Pinch of sea salt in the shaker",
    ],
    method: [
      "Run a lime wedge around half the rim of a coupe, then press into flaky sea salt.",
      "Add the Airegin, lime juice, agave syrup and a pinch of sea salt to a shaker with ice.",
      "Shake vigorously for 12 seconds.",
      "Double strain into the prepared coupe.",
      "Place a thin lime wheel on the salted half of the rim.",
    ],
    glass: "Coupe with a half salt rim",
    garnish: "Thin lime wheel",
    ice: "Shaker only, served up",
    prepTime: "4 minutes",
    abv: "~23%",
    difficulty: "Intermediate",
    tips: [
      "Agave syrup diluted 1:1 with water gives you more control over sweetness than neat agave.",
      "Salt only half the rim, it lets the guest choose how much salt hits each sip.",
      "Shake harder than you think you need to. Proper dilution makes or breaks a margarita.",
    ],
    bottle: "Airegin",
    bottleNote:
      "Both Ogogoro and agave spirits are fermented from the raw sugar of their source plant and distilled once or twice in relatively simple stills. The agricultural character is similar, Airegin just brings a cane sweetness where blanco brings vegetal agave.",
    image: "/assets/cocktails/margarita.jpg",
  },
  {
    n: "07",
    slug: "russian",
    name: "Umbrella Russian",
    tagline: "Coffee liqueur, cream, served on the rocks.",
    description:
      "A whisky sour template built around Palmsap. The egg white foam carries the coconut and tropical aromatics up to your nose before the liquid even reaches your mouth.",
    longStory:
      "Most sours are built to showcase the spirit, which is exactly why Palmsap belongs here. Nothing in the glass competes. The foam is the delivery mechanism for everything the nose promises.",
    ingredients: [
      "50 ml Umbrella Palmsap",
      "25 ml fresh lemon juice",
      "15 ml cane sugar syrup",
      "1 fresh egg white",
      "2 dashes Angostura bitters",
    ],
    method: [
      "Add all ingredients except the bitters to a shaker without ice",
      "Dry shake hard for 10 seconds to build the foam.",
      "Add ice to the shaker and shake again hard for 10-12 seconds.",
      "Double strain into a chilled coupe or rocks glass.",
      "Wait for the foam to settle and rise.",
      "Dot the two dashes of bitters onto the foam surface and drag a cocktail stick through them to create a pattern.",
    ],
    glass: "Chilled coupe or rocks glass over one cube",
    garnish: "Angostura bitters pattern on foam",
    ice: "Shaker only, or one cube if rocks glass",
    prepTime: "5 minutes",
    abv: "~18%",
    difficulty: "Intermediate",
    tips: [
      "The dry shake (no ice first) is essential as it gives you a thicker, more stable foam.",
      "Aquafaba works as a vegan substitute for egg white at a 30 ml measure.",
      "Use a toothpick or skewer for the bitters pattern.",
    ],
    bottle: "Palmsap",
    bottleNote:
      "Palmsap's creamy, tropical mouthfeel was made for the sour format. The coconut and vanilla notes float up through the egg white foam in a way that no other spirit on the shelf replicates.",
    image: "/assets/cocktails/russian.jpg",
  },
  {
    n: "08",
    slug: "martini",
    name: "Umbrella Martini",
    tagline: "Stirred. Lemon twist. Always cold.",
    description:
      "The acid test. No juice, no sugar, just spirit, vermouth, and very cold ice. If you have ever wondered what the bottle actually tastes like, order this one.",
    longStory:
      "The martini is the only cocktail that tells you the unvarnished truth about a spirit. There is nowhere to hide. Airegin passes. Easily.",
    ingredients: [
      "60 ml Umbrella Airegin",
      "10 ml dry vermouth",
      "Stir 30 turns over fresh ice",
    ],
    method: [
      "Place a Nick & Nora or coupe glass in the freezer for at least 10 minutes.",
      "Add the Airegin and dry vermouth to a mixing glass filled with fresh, clear ice.",
      "Stir slowly and deliberately for exactly 30 rotations.",
      "Strain into the frozen glass.",
      "Express a lemon peel over the surface by holding it skin-side down and squeezing sharply. Run the skin around the rim. Drop it in or rest it on the edge.",
    ],
    glass: "Frozen Nick & Nora or coupe",
    garnish: "Lemon twist, expressed and dropped",
    ice: "Mixing glass only, served up",
    prepTime: "5 minutes",
    abv: "~35%",
    difficulty: "Advanced",
    tips: [
      "Use fresh ice, not freezer-burned cubes. Old ice brings old flavours.",
      "30 stirs is the sweet spot for dilution. Under-diluted martinis are harsh, over-diluted ones are flat.",
      "Keep your vermouth in the fridge. Vermouth is wine and oxidises once opened.",
    ],
    bottle: "Airegin",
    bottleNote:
      "A martini made with vodka tastes of cold and vermouth. A martini made with Airegin tastes of the spirit. Marshmallow on the nose, a clean cane sweetness through the palate, that long herbal finish. It's all there, just quieter.",
    image: "/assets/cocktails/martini.jpg",
  },
];
