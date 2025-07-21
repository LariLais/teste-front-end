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

  useEffect(() => {
    if (product) {
      setCurrentQuantity(product.currentQuantity);
      setAccumulatedQuantity(product.accumulatedQuantity);
    } else {
      // Reseta as quantidades se nenhum produto estiver selecionado
      setCurrentQuantity(0);
      setAccumulatedQuantity(0);
    }
  }, [product]);

  const handleQuantityChange = (delta: number) => {
    if (!product || product.skus.length === 0) return;

    // Pegamos o primeiro SKU para aplicar as regras de min/multiple quantity
    // Você pode ajustar isso se tiver uma forma de selecionar um SKU específico
    const selectedSku = product.skus[0];
    const { minQuantity, multipleQuantity, stock } = selectedSku;

    let newCurrentQuantity = currentQuantity + delta;

    // --- LÓGICA DE minQuantity e multipleQuantity ---

    // 1. Aplicar a regra de multipleQuantity na adição
    if (delta > 0) { // Se estiver adicionando
        // Garante que a quantidade adicionada é um múltiplo
        // Se a quantidade atual + delta não for um múltiplo, ajusta para o próximo múltiplo válido
        const nextMultiple = Math.ceil(newCurrentQuantity / multipleQuantity) * multipleQuantity;
        newCurrentQuantity = Math.max(newCurrentQuantity, nextMultiple);

    } else if (delta < 0) { // Se estiver subtraindo
        // Garante que a quantidade removida ainda respeite os múltiplos
        const previousMultiple = Math.floor(newCurrentQuantity / multipleQuantity) * multipleQuantity;
        newCurrentQuantity = Math.min(newCurrentQuantity, previousMultiple);
    }

    // 2. Garantir a quantidade mínima
    newCurrentQuantity = Math.max(newCurrentQuantity, minQuantity);

    // 3. Garantir que não excede o estoque disponível
    newCurrentQuantity = Math.min(newCurrentQuantity, stock);

    // --- FIM DA LÓGICA ---

    // Atualiza as quantidades
    if (newCurrentQuantity !== currentQuantity) {
      const newAccumulatedQuantity = accumulatedQuantity + (newCurrentQuantity - currentQuantity); // Adiciona apenas a diferença efetiva
      setCurrentQuantity(newCurrentQuantity);
      setAccumulatedQuantity(newAccumulatedQuantity);
      updateProductQuantities(
        product.id,
        newCurrentQuantity,
        newAccumulatedQuantity
      );
    }
  };

  if (!product) {
    return null;
  }

  // Preço do primeiro SKU para cálculo do valor total
  const pricePerUnit = parseFloat(product.skus[0]?.price || "0");
  const currentTotalValue = (currentQuantity * pricePerUnit).toFixed(2);
  const accumulatedTotalValue = (accumulatedQuantity * pricePerUnit).toFixed(
    2
  );

  return (
    <ProductValueContainer>
      <ProductValues>
        <Paragraph>Atual</Paragraph>
        <Value>R$ {currentTotalValue}</Value>
      </ProductValues>
      <QuantitySelectorContainer>
        <SelectorButton
          onClick={() => handleQuantityChange(-1)} // Clicar -1 tenta diminuir uma unidade
          aria-label="Diminuir quantidade"
        >
          &minus;
        </SelectorButton>
        <ValueSelector>{currentQuantity}</ValueSelector>
        <SelectorButton
          onClick={() => handleQuantityChange(1)} // Clicar +1 tenta aumentar uma unidade
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