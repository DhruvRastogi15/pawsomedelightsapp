"use client";

import { products } from "@/data/products";
import { useProductStore } from "@/store/useProductStore";
import "./page.css"


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
  const discountPercentage = Math.round(
  ((productDetails?.price - productDetails?.discountedPrice) / productDetails?.price) * 100
);

  return (
    <div style={{marginTop:'100px'}}>
      <h1 className="text-3xl font-bold">{productDetails?.name}</h1>
      <img
        src={productDetails?.imageUrl}
        alt={productDetails?.name}
        className="rounded"
        style={{height:'100%',width:'100%'}}
      />
      <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
        <div className="price-container">
        <span className="discount-price">₹{productDetails?.discountedPrice}</span>
        <span className="original-price">₹{productDetails?.price}</span>
        </div>
        <button className="add-cart-btn">🛒    Add to Cart</button>
        </div>
        <span className="discount-badge">{discountPercentage}%</span>
      <div style={{marginTop:'10px'}}>
        <div dangerouslySetInnerHTML={{ __html: productDetails?.description }}/>
        
      </div>
    </div>
  );
}
