import { z } from "zod";
import DOMPurify from "dompurify";

export const menuItemSchema = z.object({
  category: z.string().min(1).transform(val => DOMPurify.sanitize(val)),
  name: z.string().min(1).transform(val => DOMPurify.sanitize(val)),
  description: z.string().transform(val => DOMPurify.sanitize(val)),
  price: z.preprocess(
    (val) => {
      if (typeof val === 'string') return parseFloat(val.replace(/[^0-9.]/g, ''));
      return val;
    },
    z.number().min(0).catch(0)
  ),
  image: z.string().url().or(z.literal("")).transform(val => DOMPurify.sanitize(val)).catch(""),
});

export type MenuItem = z.infer<typeof menuItemSchema>;
