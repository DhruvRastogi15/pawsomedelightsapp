"use client";
import { products } from "@/data/products";
import ProductCard from "../components/ProductCard"
import Grid from '@mui/material/Grid';
import AuthModal from "@/components/AuthModal";
import { useEffect, useState } from "react";


export default function HomePage() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      // alert('a')
  setOpen(true);
}, []);

  return (
    <main style={{ marginTop: '100px' }}>
      <div>
        <h1 className="text-3xl font-bold mb-6 mt-20">
          Healthy Treats, Happier Tails 🐶
        </h1>

        <Grid
        container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        >
          {products.map((product) => (
            <Grid
              key={product.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
              sx={{
                backgroundColor: "#f5f5f5",
                padding: 2,
                borderRadius: 2,
                boxShadow: 3
              }}
              display="flex"
              justifyContent="center"   // ✅ centers card
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}


