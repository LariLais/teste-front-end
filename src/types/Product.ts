import type { Image } from "./Image";
import type { Sku } from "./Sku";

export type Product = {
  id: number;
  name: string;
  hexCode: string | null;
  skus: Sku[];
  reference: string;
  type: string;
  gender: string;
  promptDelivery: boolean;
  description: string | null;
  categories: string;
  subcategories: string | null;
  images: Image[];
};
