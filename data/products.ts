export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Banana Crunchies",
    slug: "banana-crunchies",
    price: 230,
    image: "/products/BananaCrunchies.jpg",
    description: "Healthy homemade peanut butter treats for dogs.",
  },
  {
    id: "2",
    name: "Chicken Superblend Topper",
    slug: "chicken-superblend-topper",
    price: 250,
    image: "/products/chickenSuperblendTopper.jpg",
    description: "Oatmeal and banana baked treats.",
  },
  {
    id: "3",
    name: "Chicken and Carrot Crunchies",
    slug: "chicken-carrot-crunchies",
    price: 230,
    image: "/products/chickenSuperblendTopper.jpg",
    description: "Oatmeal and banana baked treats.",
  },
  {
    id: "4",
    name: "Chicken and Sweet Potato Crunchies",
    slug: "chicken-sweet-potato-crunchies",
    price: 299,
    image: "/products/chickenSuperblendTopper.jpg",
    description: "Oatmeal and banana baked treats.",
  },
  {
    id: "5",
    name: "Complete Nutrition Pack",
    slug: "complete-nutrition-pack",
    price: 649,
    image: "/products/chickenSuperblendTopper.jpg",
    description: "Oatmeal and banana baked treats.",
  },
  {
    id: "6",
    name: "Crunchies Duo Pack",
    slug: "chicken-superblend-topper",
    price: 349,
    image: "/products/chickenSuperblendTopper.jpg",
    description: "Oatmeal and banana baked treats.",
  },
  {
    id: "7",
    name: "Starter Trial Pack",
    slug: "starter-trial-pack",
    price: 299,
    image: "/products/chickenSuperblendTopper.jpg",
    description: "Oatmeal and banana baked treats.",
  },
];
