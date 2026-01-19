import { z } from "zod";

export const loginSchema = z.object({
  identifier: z
    .string()
    .refine(
      (value) =>
        /^[0-9]{10}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      {
        message: "Must be a valid email or 10-digit mobile number",
      }
    ),

  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(/[@$!%*?&#]/),
});
