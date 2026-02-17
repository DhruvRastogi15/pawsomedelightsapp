import { products } from "@/data/products";
import ProductCard from "../components/ProductCard"
import Grid from '@mui/material/Grid';



export default function HomePage() {
  return (
    <main style={{ marginTop: '100px' }}>
      <div>
        <h1 className="text-3xl font-bold mb-6 mt-20">
          Healthy Treats, Happier Tails 🐶
        </h1>

        <Grid spacing={{ xs: 2, sm: 3, md: 4 }}>
          {products.map((product) => (
            <Grid
              key={product.id}
              size={{
                xs: 12, // mobile → 1 card
                sm: 6,  // tablet → 2 cards
                md: 4,  // laptop → 3 cards
                lg: 3,  // desktop → 4 cards
              }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}


