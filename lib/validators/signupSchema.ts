import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .min(2)
    .regex(/^[A-Za-z]+$/, "Only letters allowed"),

  lastName: z
    .string()
    .min(2)
    .regex(/^[A-Za-z]+$/, "Only letters allowed"),

  dob: z
    .string()
    .regex(/^\d{2}-\d{2}-\d{2}$/, "DOB must be dd-mm-yy"),

  email: z.string().email("Invalid email"),

  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),

  acceptTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: "Terms must be accepted",
    }),

  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(/[@$!%*?&#]/),
});
