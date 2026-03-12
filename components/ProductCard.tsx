"use client";

import Link from "next/link";
// import { Product } from "@/data/products";
import { useProductStore } from "@/store/useProductStore";
import { useRouter } from "next/navigation";
import './styles/ProductCard.css'



export default function ProductCard({ product }: { product: any }) {
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
            <div>
                <div>
                    <span className="discount-price">₹{product?.discountedPrice}</span>
                    <span className="original-price">₹{product?.price}</span>
                </div>
            <button className="view-product-btn"
                onClick={handleClick}>
                View Product
            </button>
            </div>
        </div>
    );
}
