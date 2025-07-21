import { useState } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { Header } from "../../components/Header/Header";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import { ProductValue } from "../../components/ProductValue/ProductValue";
import {
  Container,
  EqualSimbol,
  PackWord,
  ProductPackSizesContainer,
  ProductSize,
  ProductSizeContainer,
  ProductSizeQuantity,
} from "./PurchasePage.styled";
import { products } from "../../data/products.json";

export function PurchasePage() {
  const categories = [...new Set(products.map((p) => p.categories))];

  // Índice da categoria selecionada, começa em 0
  const [categoryIndex, setCategoryIndex] = useState(0);
  // Funções para navegar entre categorias
  const handlePrevCategory = () => {
    setCategoryIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };
  const handleNextCategory = () => {
    setCategoryIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };
  // Categoria atual
  const currentCategory = categories[categoryIndex];

  return (
    <Container>
      <Header
        category={currentCategory}
        categoryIndex={categoryIndex + 1} // +1 para mostrar na base 1
        onPrevCategory={handlePrevCategory}
        onNextCategory={handleNextCategory}
      />

      <>
        <Carousel />

        <ProductInfo />

        <ProductPackSizesContainer>
          <ProductSizeContainer>
            <ProductSizeQuantity></ProductSizeQuantity>
            <ProductSize></ProductSize>
          </ProductSizeContainer>

          <EqualSimbol>=</EqualSimbol>

          <ProductSizeContainer>
            <PackWord>PACK</PackWord>
            <ProductSizeQuantity></ProductSizeQuantity>
          </ProductSizeContainer>
        </ProductPackSizesContainer>

        <ProductValue />
      </>
    </Container>
  );
}
