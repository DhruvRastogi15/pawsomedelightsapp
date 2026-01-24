import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Product || mongoose.model("Product", ProductSchema);
