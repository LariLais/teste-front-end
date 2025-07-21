// src/components/ProductValue/ProductValue.tsx
import {
  Paragraph,
  ProductValueContainer,
  ProductValues,
  QuantitySelectorContainer,
  SelectorButton,
  Value,
  ValueSelector,
} from "./ProductValue.styled";
import type { ProductWithQuantities } from "../../types/ProductWithQuantities";
import { useState, useEffect } from "react";

interface ProductValueProps {
  product: ProductWithQuantities | null;
  updateProductQuantities: (
    productId: number,
    currentQuantity: number,
    accumulatedQuantity: number
  ) => void;
}

export const ProductValue = ({
  product,
  updateProductQuantities,
}: ProductValueProps) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [accumulatedQuantity, setAccumulatedQuantity] = useState(0);

  const selectedSku = product?.skus[0] || {
    id: "",
    size: "",
    stock: 0,
    price: "0",
    minQuantity: 1,
    multipleQuantity: 1,
  };

  const { minQuantity, multipleQuantity, stock } = selectedSku;

  useEffect(() => {
    if (product) {
      setCurrentQuantity(product.currentQuantity);
      setAccumulatedQuantity(product.accumulatedQuantity);
    } else {
      setCurrentQuantity(0);
      setAccumulatedQuantity(0);
    }
  }, [product]);

  const handleQuantityChange = (delta: number) => {
    if (!product || product.skus.length === 0) {
      return;
    }

    let newCalculatedQuantity = currentQuantity + delta;

    // --- LÓGICA REVISADA PARA IR ATÉ 0 ---

    // 1. Caso especial: Se estou em 'minQuantity' (e minQuantity > 0) e clico para diminuir,
    // devo ir para 0 diretamente.
    if (delta < 0 && currentQuantity === minQuantity && minQuantity > 0) {
      newCalculatedQuantity = 0;
    }
    // 2. Caso especial: Se estou em 0 e clico para aumentar,
    // devo ir para 'minQuantity' (se minQuantity > 0) ou 'multipleQuantity' (se minQuantity é 0 ou 1).
    else if (delta > 0 && currentQuantity === 0) {
      newCalculatedQuantity = minQuantity > 0 ? minQuantity : multipleQuantity;
    }
    // 3. Casos Gerais: Aplica a lógica de múltiplos e garante que não seja negativo
    else {
      // Garante que não seja negativo antes de aplicar múltiplos
      newCalculatedQuantity = Math.max(0, newCalculatedQuantity);

      if (delta > 0) {
        // Aumentando
        // Arredonda para o próximo múltiplo se necessário
        if (newCalculatedQuantity % multipleQuantity !== 0) {
          newCalculatedQuantity =
            Math.ceil(newCalculatedQuantity / multipleQuantity) *
            multipleQuantity;
        }
      } else if (delta < 0) {
        // Diminuindo
        // Arredonda para o múltiplo anterior se necessário
        if (newCalculatedQuantity % multipleQuantity !== 0) {
          newCalculatedQuantity =
            Math.floor(newCalculatedQuantity / multipleQuantity) *
            multipleQuantity;
        }
        // Garante que não caia abaixo de minQuantity (a menos que já seja 0)
        if (newCalculatedQuantity > 0 && newCalculatedQuantity < minQuantity) {
          newCalculatedQuantity = minQuantity;
        }
      }
    }

    // 4. Garante que a quantidade não excede o estoque disponível
    newCalculatedQuantity = Math.min(newCalculatedQuantity, stock);

    // 5. Se o estoque for 0, a quantidade final também deve ser 0
    if (stock === 0) {
      newCalculatedQuantity = 0;
    }

    // --- FIM DA LÓGICA REVISADA ---

    if (newCalculatedQuantity !== currentQuantity) {
      const newAccumulatedQuantity =
        accumulatedQuantity + (newCalculatedQuantity - currentQuantity);
      setCurrentQuantity(newCalculatedQuantity);
      setAccumulatedQuantity(newAccumulatedQuantity);
      updateProductQuantities(
        product.id,
        newCalculatedQuantity,
        newAccumulatedQuantity
      );
    }
  };

  if (!product) {
    return null;
  }

  const pricePerUnit = parseFloat(selectedSku.price || "0");
  const currentTotalValue = (currentQuantity * pricePerUnit).toFixed(2);
  const accumulatedTotalValue = (accumulatedQuantity * pricePerUnit).toFixed(2);

  return (
    <ProductValueContainer>
      <ProductValues>
        <Paragraph>Atual</Paragraph>
        <Value>R$ {currentTotalValue}</Value>
      </ProductValues>
      <QuantitySelectorContainer>
        <SelectorButton
          onClick={() => handleQuantityChange(-multipleQuantity)}
          // Desabilita o botão '-' quando a quantidade atual é 0.
          // Ou quando está em 'minQuantity' e minQuantity > 0.
          disabled={currentQuantity === 0}
          aria-label="Diminuir quantidade"
        >
          &minus;
        </SelectorButton>
        <ValueSelector>{currentQuantity}</ValueSelector>
        <SelectorButton
          onClick={() => handleQuantityChange(multipleQuantity)}
          // Desabilita o botão '+' se a quantidade já atingiu o estoque disponível
          disabled={currentQuantity >= stock}
          aria-label="Aumentar quantidade"
        >
          +
        </SelectorButton>
      </QuantitySelectorContainer>
      <ProductValues>
        <Paragraph>Acumulado</Paragraph>
        <Value>R$ {accumulatedTotalValue}</Value>
      </ProductValues>
    </ProductValueContainer>
  );
};
