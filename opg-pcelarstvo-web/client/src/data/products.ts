import type { Product } from "../types/Product";

import bagremImage from "../assets/images/products/bagrem.jpg";
import cvjetniImage from "../assets/images/products/cvjetni.jpg";


export const products: Product[] = [
  {
    id: "bagrem",
    name: "Bagremov med",
    description:
      "Blagi i nježni med karakteristične zlatne boje, idealan za svakodnevnu upotrebu.",
    price: 10,
    weight: "900g",
    image: bagremImage,
  },

  {
    id: "cvjetni",
    name: "Cvjetni med",
    description:
      "Prirodni med bogatog okusa nastao iz raznolikog slavonskog cvijeća.",
    price: 9,
    weight: "900g",
    image: cvjetniImage,
  },
];