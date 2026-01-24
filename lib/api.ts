export async function getProducts() {
  const res = await fetch("https://pawsomedelightsapp.vercel.app/api/products", {
    cache: "no-store",
    headers: {
      guestUser: "true"
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
