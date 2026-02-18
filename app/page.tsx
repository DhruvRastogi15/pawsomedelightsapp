"use client";

import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
}

export default function HomePage() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await fetch("/api/products", {
          method: "GET",
          headers: {
            guestUser: "true",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const products = await res.json();
        setData(products);
        setLoading(false)
      } catch (error) {
        console.error("Error:", error);
        setLoading(false)
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

if (loading) {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={60} />
    </Box>
  );
}

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
          {data.map((product) => (
            <Grid
              key={product._id}
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


