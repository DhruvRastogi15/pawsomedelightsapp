"use client";

import { products } from "@/data/products";
import { useProductStore } from "@/store/useProductStore";


export default function ProductPage({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams: any
}) {
  // const product = products.find((p) => p.slug === params.slug);
  const productDetails = useProductStore((s) => s.product);

  // const productDetails = JSON.parse(
  //   decodeURIComponent(searchParams.data)
  // );
  // const productDetails = searchParams

  console.log('productDetails are',productDetails)

  // if (!product) return <p>Product not found</p>;

  return (
    <div style={{marginTop:'200px'}}
    //  className="p-6 grid md:grid-cols-2 gap-8"
     >
      <img
        src={productDetails?.imageUrl}
        alt={productDetails?.name}
        className="rounded"
        style={{height:'200px',width:'200px'}}
      />

      <div>
        <h1 className="text-3xl font-bold">{productDetails?.name}</h1>
        <p className="mt-3 text-gray-700">{productDetails?.description}</p>
        <p className="mt-4 text-xl font-semibold">₹{productDetails?.price}</p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
