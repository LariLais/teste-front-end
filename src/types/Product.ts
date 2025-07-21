import type { Image } from "./Image";
import type { Sku } from "./Sku";

export type Product = {
  id: number;
  name: string;
  hexCode: string;
  skus: Sku;
  reference: string;
  type: string;
  gender: string;
  promptDelivery: boolean;
  description: null;
  categories: string;
  subcategories: string;
  images: Image;
};
