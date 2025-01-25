import { z } from "zod";
import { insertSchemaProduct } from "@/lib/validators";

export type Product = z.infer<typeof insertSchemaProduct> & {
  id: string;
};
