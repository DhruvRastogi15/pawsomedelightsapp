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
    slug: "banana-crunchies-dog-treats",
    price: 249,
    image: "/products/BananaCrunchies.jpg",
    description: "Healthy homemade peanut butter treats for dogs.",
  },
  {
    id: "2",
    name: "chicken Superblend Topper",
    slug: "chicken-superblend-topper",
    price: 299,
    image: "/products/chickenSuperblendTopper.jpg",
    description: "Oatmeal and banana baked treats.",
  },
];
