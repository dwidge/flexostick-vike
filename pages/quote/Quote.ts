import { z } from "zod";
import { phoneRegex } from "../../utils/phoneRegex";

export const Quote = z.object({
  name: z.string({ message: "Name required" }),
  phone: z.string().regex(phoneRegex, "Phone invalid").optional(),
  message: z.string().optional(),
});
export type Quote = z.infer<typeof Quote>;
