"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { useProductStore } from "@/store/useProductStore";
import { useRouter } from "next/navigation";


export default function ProductCard({ product }: { product: Product }) {
      const router = useRouter();

      const setProduct = useProductStore((s) => s.setProduct);
      

      const handleClick = () => {
    setProduct(product);      // ✅ store JSON
    router.push(`/product/${product.slug}`); // ✅ navigate
  };
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img
                    style={{height:'100%',width:'100%',borderRadius:'15px'}}
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                />
            </div>


            <h2 className="mt-3 font-semibold">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>

            <button
                // productDetails={product}
                // href={{
                //     pathname:`/product/${product.slug}`,
                //     query:{
                //         data:encodeURIComponent(JSON.stringify(product))
                //     }
                // }}
                className="inline-block mt-3 text-sm text-white bg-black px-4 py-2 rounded"
                onClick={handleClick}
            >
                View Product
            </button>
        </div>
    );
}
