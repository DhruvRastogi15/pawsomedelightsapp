import { products } from "@/data/products";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="rounded"
      />

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-3 text-gray-700">{product.description}</p>
        <p className="mt-4 text-xl font-semibold">₹{product.price}</p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
