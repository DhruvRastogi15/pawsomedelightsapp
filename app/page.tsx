import { products } from "@/data/products";
import ProductCard from "../components/ProductCard"

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Healthy Treats, Happier Tails 🐶
      </h1>

      <div
        style={{
          display: "grid",
          // gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
