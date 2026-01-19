import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: String, required: true },

    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },

    acceptTerms: { type: Boolean, required: true },

    password: {
      type: String,
      required: true, // 🔥 THIS PREVENTS YOUR BUG FOREVER
    },
  },
  { timestamps: true }
);

export default models.User || mongoose.model("User", UserSchema);
