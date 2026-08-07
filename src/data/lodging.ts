import { Spot } from "@/components/lodging/SpotLinks";

export const jumpLinks = [
  { id: "anchor-inn", label: "Anchor Inn" },
  { id: "airbnb", label: "Airbnb & VRBO" },
  { id: "leland", label: "Leland" },
  { id: "suttons-bay", label: "Suttons Bay & Northport" },
  { id: "traverse-city", label: "Traverse City" },
  { id: "logistics", label: "Logistics" },
];

export const leland: Spot[] = [
  {
    name: "Falling Waters Lodge",
    website: "https://www.fallingwaterslodge.com/",
    mapQuery: "Falling Waters Lodge Leland MI",
  },
  {
    name: "The Leland Lodge",
    website: "https://www.lelandlodge.com/",
    mapQuery: "The Leland Lodge Leland MI",
  },
];

export const suttonsBayNorthport: Spot[] = [
  {
    name: "Suttons Bay Harbor House",
    website: "https://www.suttonsbayharborhouse.com/",
    mapQuery: "Suttons Bay Harbor House Suttons Bay MI",
  },
  {
    name: "Sunrise Landing",
    website: "http://www.sunriselanding.com/",
    mapQuery: "Sunrise Landing Northport MI",
  },
];

export const traverseCity: Spot[] = [
  {
    name: "Hotel Indigo Traverse City",
    description: "Boutique hotel right downtown on West Grand Traverse Bay",
    mapQuery: "Hotel Indigo Traverse City MI",
  },
  {
    name: "Delamar Traverse City",
    description:
      "Waterfront boutique hotel, walkable to downtown restaurants and shops",
    mapQuery: "Delamar Traverse City MI",
  },
  {
    name: "Grand Traverse Resort & Spa",
    description:
      "Full resort experience about 7 miles from downtown, with golf, spa, and pools",
    mapQuery: "Grand Traverse Resort and Spa MI",
  },
];

export const groceries: Spot[] = [
  {
    name: "Suttons Bay Farmers Market",
    description:
      "Saturday mornings, 9am–1pm — great for local produce and products",
    mapQuery: "Suttons Bay Farmers Market MI",
  },
  {
    name: "Farm Club Market & Bakery",
    description:
      "About a 10 min drive or 30 min bike ride from Anchor Inn. Bakery, market, and drinks all grown or made on property — worth the trip",
    mapQuery: "Farm Club Traverse City MI",
  },
  {
    name: "Hansen Foods",
    description: "Local grocery store right in Suttons Bay",
    mapQuery: "Hansen Foods Suttons Bay MI",
  },
  {
    name: "Leland Mercantile Co",
    description: "Great local grocery option in Leland",
    mapQuery: "Leland Mercantile Co Leland MI",
  },
  {
    name: "Tom's Food Market — Northport",
    description:
      "Great local grocery, closest to the Suttons Bay / Northport area",
    mapQuery: "Tom's Food Market Northport MI",
  },
  {
    name: "Tom's Food Market — Traverse City",
    description:
      "Beloved local grocer, a Traverse City favorite for over 80 years",
    mapQuery: "Tom's Food Market Traverse City MI",
  },
  {
    name: "Costco — Traverse City",
    description:
      "125 E South Airport Rd — good for stocking up if your group needs bulk supplies",
    mapQuery: "Costco 125 E South Airport Rd Traverse City MI",
  },
];
