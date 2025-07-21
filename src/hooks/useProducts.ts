import { useEffect, useState } from "react";
import type { Product } from "../types/Product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(products);
  }, []);
  return products;
}
