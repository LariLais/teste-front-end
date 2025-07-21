// src/hooks/useProducts.ts
import { useEffect, useState } from "react";
import { products as productsData } from "../data/products.json";
import type { ProductWithQuantities } from "../types/ProductWithQuantities";

export function useProducts() {
  const [products, setProducts] = useState<ProductWithQuantities[]>([]);

  useEffect(() => {
    // Inicializa os produtos com as quantidades zeradas
    const initializedProducts = productsData.map((product) => ({
      ...product,
      currentQuantity: 0,
      accumulatedQuantity: 0,
    }));
    setProducts(initializedProducts);
  }, []);

  const updateProductQuantities = (
    productId: number,
    currentQuantity: number,
    accumulatedQuantity: number
  ) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, currentQuantity, accumulatedQuantity }
          : product
      )
    );
  };

  return { products, updateProductQuantities };
}
