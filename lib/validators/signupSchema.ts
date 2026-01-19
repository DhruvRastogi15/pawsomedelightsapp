import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name too short")
    .regex(/^[A-Za-z]+$/, "Only letters allowed"),

  lastName: z
    .string()
    .min(2, "Last name too short")
    .regex(/^[A-Za-z]+$/, "Only letters allowed"),

  dob: z
    .string()
    .regex(/^\d{2}-\d{2}-\d{2}$/, "DOB must be dd-mm-yy"),

  email: z.string().email("Invalid email"),

  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),

  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "Terms must be accepted" }),
  }),

  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .regex(/[A-Z]/, "Must contain uppercase")
    .regex(/[a-z]/, "Must contain lowercase")
    .regex(/[0-9]/, "Must contain number")
    .regex(/[@$!%*?&#]/, "Must contain special character"),
});
