import { Spot } from "@/components/thingstodo/SpotLinks";

export const jumpLinks = [
  { id: "wineries", label: "Wineries" },
  { id: "hiking", label: "Hiking" },
  { id: "suttons-bay", label: "Suttons Bay" },
  { id: "leland", label: "Leland" },
  { id: "traverse-city", label: "Traverse City" },
  { id: "northport", label: "Northport" },
  { id: "glen-arbor", label: "Glen Arbor" },
];

export const wineries: Spot[] = [
  {
    name: "Aurora Winery",
    description:
      "Located in the Leland area. Small but beautiful, with an intimate feel — lawn chairs, forestry all around, and gorgeous vineyard views.",
    website: "https://www.auroracellars.com",
    mapQuery: "Aurora Cellars Leelanau",
  },
  {
    name: "Dune Bird Winery",
    description:
      "Located in the Northport area. Great for kids, with a spacious outdoor area, cornhole, and a small lake on the property that's lovely to sit around.",
    mapQuery: "Dune Bird Winery Leelanau",
  },
  {
    name: "The Ridge at Verterra",
    description:
      "Located in the Northport area. Sweeping lake views from the outdoor patio — one of the prettiest spots on the peninsula for an afternoon glass of wine.",
    mapQuery: "The Ridge at Verterra Leelanau",
  },
];

export const hiking: (Spot & { title: string })[] = [
  {
    name: "Sleeping Bear Dunes",
    title: "Sleeping Bear Dunes",
    description:
      "Located in the Glen Arbor area. Intermediate hike down to a beach on Lake Michigan.",
    website: "https://www.nps.gov/slbe/",
    mapQuery: "Sleeping Bear Dunes National Lakeshore",
  },
  {
    name: "Clay Cliffs",
    title: "Clay Cliffs",
    description:
      "Located in the Northport area. Easy hike to a lookout point over Lake Michigan.",
    mapQuery: "Clay Cliffs Natural Area Leelanau",
  },
  {
    name: "Ransom Lake Natural Area",
    title: "Ransom Lake Natural Area",
    description:
      "Located in the Traverse City area, just east of the Village of Lake Ann. A beautiful little trail.",
    website:
      "https://www.gtrlc.org/recreation-events/preserve/ransom-lake-natural-area/",
    mapQuery: "Ransom Lake Natural Area MI",
  },
];

export const suttonsBayGettingAround: Spot[] = [
  {
    name: "Suttons Bay Bikes",
    description:
      "Rentals for the Leelanau Trail (see home page pic of Austin and I), which runs all the way down toward Anchor Inn",
    mapQuery: "Suttons Bay Bikes MI",
  },
];

export const suttonsBayFood: Spot[] = [
  {
    name: "Streetside Grille",
    description: "American bar food",
    mapQuery: "Streetside Grille Suttons Bay",
    website: "https://www.streetsideupnorth.com/",
  },
  {
    name: "VI Grill",
    description: "American comfort food",
    mapQuery: "VI Grill Suttons Bay",
    website: "https://vigrill.com/",
  },
  {
    name: "Hop Lot Brewery",
    description: "One of Austin's favorite breweries ever!",
    website: "https://www.hoplotbrewing.com",
    mapQuery: "Hop Lot Brewing Suttons Bay",
  },
  {
    name: "Cantina Twenty-Two",
    description:
      "Mexican inspired food (their words, not ours) — heard it's pretty good!",
    website: "https://www.cantina22.com/",
    mapQuery: "Cantina Twenty-Two Suttons Bay MI",
  },
  {
    name: "Birdies",
    description: "Cute sandwich shop",
    website: "https://birdiessandwiches.square.site/s/order",
    mapQuery: "Birdies Sandwiches Suttons Bay MI",
  },
  {
    name: "Lylah's",
    description: "For breakfast & lunch!",
    website: "https://lylahs.square.site/home",
    mapQuery: "Lylah's Suttons Bay MI",
  },
];

export const suttonsBaySweets: Spot[] = [
  {
    name: "Hive Coffee Co",
    description: "Great coffee spot that also serves waffles",
    mapQuery: "Hive Coffee Co Suttons Bay",
    website: "https://www.hive-coffee.com/",
  },
  {
    name: "Dalzell Dairy",
    description: "Go-to spot for ice cream",
    mapQuery: "Dalzell Dairy Suttons Bay",
    website: "https://sites.google.com/view/dalzelldairy/home",
  },
  {
    name: "Murdick's Fudge Shop",
    description: "Our go-to for chocolate covered cherries when we visit",
    mapQuery: "Murdick's Fudge Suttons Bay",
  },
];

export const suttonsBayShopping: Spot[] = [
  {
    name: "Bay Books",
    description: "A cozy little bookshop we love browsing",
    mapQuery: "Bay Books Suttons Bay",
    website: "https://baybooksmi.com/",
  },
];

export const lelandFood: Spot[] = [
  {
    name: "Village Cheese Shanty",
    description: "Staples Sandwich shop, Austin's favorite is the North Shore",
    mapQuery: "Village Cheese Shanty Leland",
    website: "https://www.thecoveleland.com/",
  },
  {
    name: "The Cove",
    description:
      "Here you can find traditional MI white fish and if you're brave like Bri go for the chubby Mary, it's totally worth it",
    mapQuery: "The Cove Leland MI",
  },
  {
    name: "The Riverside Inn",
    description:
      "If you're looking for American style food with a fine dining experience, this is your spot",
    mapQuery: "The Riverside Inn Leland MI",
    website: "https://theriversideinn.com/",
  },
];

export const lelandSweets: Spot[] = [
  {
    name: "Leland Harbor House",
    description: "Ice cream spot located in a clothing store",
    mapQuery: "Leland Harbor House",
    website:
      "https://www.lelandharborhouse.com/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=2946803370982188558",
  },
  {
    name: "Little Boat Coffee",
    description: "Cute little coffee spot",
    mapQuery: "Little Boat Coffee Leland",
  },
];

export const lelandBeach: Spot[] = [
  {
    name: "Van's Beach",
    description: "Easy access to Lake Michigan",
    mapQuery: "Van's Beach Leland MI",
  },
];

export const traverseCityActivities: Spot[] = [
  {
    name: "The Village at Grand Traverse Commons",
    description:
      "Old insane asylum turned restaurants and local shops; underground tunnel tours available, plus hiking trails on property",
    website: "https://www.thevillagetc.com/",
    mapQuery: "The Village at Grand Traverse Commons TC MI",
  },
  {
    name: "Nauticat Cruises",
    description: "Highly recommend the sunset cruise",
    website: "https://www.nauti-cat.com/",
    mapQuery: "Nauticat Cruises Traverse City MI",
  },
  {
    name: "Paddle TC",
    description: "Kayak and paddleboard rentals and tours",
    website: "https://paddletc.com/",
    mapQuery: "Paddle TC Traverse City MI",
  },
  {
    name: "Sarah Hardy Farmers Market",
    description:
      "Wednesdays & Saturdays, downtown TC — the largest farmers market in the region",
    website:
      "https://www.downtowntc.com/services/dda-services/farmers-market.html",
    mapQuery: "Sarah Hardy Farmers Market Traverse City MI",
  },
];

export const traverseCityFood: Spot[] = [
  {
    name: "Aroma's Coffee & Tea",
    description: "A great coffee stop in Traverse City",
    website: "https://www.aromascoffeeshop.com/",
    mapQuery: "Aroma's Coffee & Tea Traverse City MI",
  },
  {
    name: "Modern Bird",
    description:
      "Chef-owners currently up for a James Beard nomination; share-plate style. Book ahead, and don't skip the bread or desserts.",
    website: "https://modernbirdtc.com/",
    mapQuery: "Modern Bird Traverse City MI",
  },
  {
    name: "The Burrow TC",
    description: "Best French dip in TC",
    website: "https://burrowtc.com/",
    mapQuery: "The Burrow TC Traverse City MI",
  },
  {
    name: "Sisters",
    description: "Breakfast/brunch",
    website: "https://www.sisterstvc.com/",
    mapQuery: "Sisters Traverse City MI",
  },
  {
    name: "Glendale Burger Shop",
    description: "Best smash burger in town",
    website: "https://www.glendaleburgershop.com/",
    mapQuery: "Glendale Burger Shop Traverse City MI",
  },
  {
    name: "Chubby Unicorn",
    description: "For the vegans, but a highly rated food spot!",
    website: "https://chubbyunicorntc.com/",
    mapQuery: "Chubby Unicorn Traverse City MI",
  },
];

export const traverseCitySweets: Spot[] = [
  {
    name: "Cherry Republic",
    description: "Their sour cherries are basically the local candy mascot",
    website:
      "https://www.cherryrepublic.com/pages/cherry-republic-in-traverse-city?srsltid=AfmBOopWBKkGAEXtMNjT_gpzurz5oBBHkwPFrkTNsoHNOLbTj_iznr4I",
    mapQuery: "Cherry Republic Traverse City MI",
  },
  {
    name: "Dairy Lodge",
    description:
      "Possibly the oldest ice cream parlor around and a local classic",
    website: "https://www.traversecity.com/listings/the-dairy-lodge/4107/",
    mapQuery: "Dairy Lodge Traverse City MI",
  },
  {
    name: "Grand Traverse Pie Co.",
    description: "Cute pie shop",
    website: "https://gtpie.com/",
    mapQuery: "Grand Traverse Pie Co Traverse City MI",
  },
];

export const traverseCityBeach: Spot[] = [
  {
    name: "Clinch Park",
    description:
      "Beach on West Grand Traverse Bay featuring picnic tables, restrooms & seasonal lifeguards.",
    website:
      "https://www.traversecitymi.gov/community/recreation-directory/clinch-park-beach/clinch-park.html",
    mapQuery: "Clinch Park Beach Traverse City MI",
  },
];

export const northport: Spot[] = [
  {
    name: "The Mitten Brewing Company – Northport",
    description: "Good beer and a relaxed spot to grab a bite",
    website: "https://www.mittenbrewing.com/northport/",
    mapQuery: "The Mitten Brewing Company Northport MI",
  },
  {
    name: "New Bohemian Café",
    description: "Cozy café, great for a casual breakfast or lunch",
    website: "https://www.newbohemiancafe.com/#most-popular",
    mapQuery: "New Bohemian Café Northport MI",
  },
  {
    name: "Grand Traverse Lighthouse",
    description: "A beautiful historic lighthouse at the tip of the peninsula",
    website: "https://www.grandtraverselighthouse.com/",
    mapQuery: "Grand Traverse Lighthouse Northport MI",
  },
  {
    name: "Hallstedt Homestead Cherries",
    description: "A charming local cherry farm worth the drive",
    website: "https://www.hhcherries.net/",
    mapQuery: "Hallstedt Homestead Cherries Northport MI",
  },
];

export const glenArborFood: Spot[] = [
  {
    name: "The Mill",
    description:
      "Riverside cafe, restaurant, and guest house on the Crystal River",
    website: "https://themillglenarbor.com/",
    mapQuery: "The Mill Glen Arbor MI",
  },
  {
    name: "Supper",
    description:
      "A cozy dinner experience in the lower level of The Mill — different vibe, same building",
    website: "https://themillglenarbor.com/supper",
    mapQuery: "The Supper at The Mill Glen Arbor MI",
  },
  {
    name: "River Club",
    description:
      "Mini golf, Mexican-inspired food, and live music on the Crystal River — so good and SO FUN!",
    website: "https://rcglenarbor.com/",
    mapQuery: "River Club Glen Arbor MI",
  },
  {
    name: "The Corndog Company",
    description: "Home of the honeydog — a corndog topped with honey",
    mapQuery: "The Corndog Company Glen Arbor MI",
  },
];

export const glenArborActivities: Spot[] = [
  {
    name: "Sleeping Bear Dunes",
    description:
      "Glen Arbor is the gateway to the Dunes — see the Hiking section above",
    mapQuery: "Sleeping Bear Dunes National Lakeshore",
  },
  {
    name: "Crystal River Outfitters",
    description:
      "Canoe and kayak the Crystal River, plus bike rentals and shopping",
    website: "https://crystalriveroutfitters.com/",
    mapQuery: "Crystal River Outfitters Glen Arbor MI",
  },
];
