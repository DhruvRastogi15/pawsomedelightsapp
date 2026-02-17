import { products } from "@/data/products";
import ProductCard from "../components/ProductCard"
import Grid from '@mui/material/Grid';



export default function HomePage() {
  return (
    <main className="page">
      <h1 className="text-3xl font-bold mb-6 mt-20">
        Healthy Treats, Happier Tails 🐶
      </h1>

      <div
        style={{
          // display: "grid",
          // gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          // gap: "24px",
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {products.map((product) => (
            <Grid
              key={product.id}
              xs={12}   // mobile → 1 card
              sm={6}    // tablet → 2 cards
              md={4}    // laptop → 3 cards
              lg={3}    // desktop → 4 cards
            >
              <ProductCard key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}
