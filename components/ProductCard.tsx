"use client";

import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
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

            <Link
                href={`/product/${product.slug}`}
                className="inline-block mt-3 text-sm text-white bg-black px-4 py-2 rounded"
            >
                View Product
            </Link>
        </div>
    );
}
