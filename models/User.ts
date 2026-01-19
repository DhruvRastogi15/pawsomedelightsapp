import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    dob: String,
    email: { type: String, unique: true },
    mobile: String,
    acceptTerms: Boolean,
    password: String,
  },
  { timestamps: true }
);

export default models.User || mongoose.model("User", UserSchema);
