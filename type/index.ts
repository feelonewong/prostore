import { z } from "zod";
import {
  cartItemSchema,
  insertCartItemSchema,
  insertSchemaProduct,
} from "@/lib/validators";

export type Product = z.infer<typeof insertSchemaProduct> & {
  id: string;
  rating: string;
};

export type Cart = z.infer<typeof insertCartItemSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
