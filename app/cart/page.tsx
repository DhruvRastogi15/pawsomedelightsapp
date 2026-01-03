"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item:any) => (
        <div key={item.id} className="flex justify-between mb-3">
          <span>{item.name}</span>
          <span>x{item.quantity}</span>
        </div>
      ))}
    </div>
  );
}
