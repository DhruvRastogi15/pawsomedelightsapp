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
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}


