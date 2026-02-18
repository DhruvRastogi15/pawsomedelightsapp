export interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  description?: string; // optional
}
