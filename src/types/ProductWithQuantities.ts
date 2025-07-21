import type { Product } from "./Product";

export type ProductWithQuantities = Product & {
  currentQuantity: number;
  accumulatedQuantity: number;
};
