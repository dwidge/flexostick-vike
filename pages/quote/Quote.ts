import { z } from "zod";
import { phoneRegex } from "../../utils/phoneRegex";

export const Quote = z.object({
  name: z.string({ message: "Name required" }),
  phone: z.string().regex(phoneRegex, "Phone invalid").optional(),
  labelSize: z.string().optional(),
  labelMaterial: z.string().optional(),
  quantity: z.number().int().multipleOf(1000).min(1000).optional(),
  message: z.string().optional(),
});
export type Quote = z.infer<typeof Quote>;
