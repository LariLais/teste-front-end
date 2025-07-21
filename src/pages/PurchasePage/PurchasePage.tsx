// src/pages/PurchasePage/PurchasePage.tsx
import { useState, useEffect, useMemo } from "react";
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
  ProductSizesList,
} from "./PurchasePage.styled";
import { useProducts } from "../../hooks/useProducts";

export function PurchasePage() {
  const { products, updateProductQuantities } = useProducts();
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.categories))];
  }, [products]);

  const [categoryIndex, setCategoryIndex] = useState(0);

  const productsInCurrentCategory = useMemo(() => {
    const category = categories[categoryIndex];
    return products.filter((p) => p.categories === category);
  }, [products, categories, categoryIndex]);

  useEffect(() => {
    setCurrentProductIndex(0);
  }, [categoryIndex]);

  const currentProduct = productsInCurrentCategory[currentProductIndex] || null;

  const handlePrevCategory = () => {
    setCategoryIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };
  const handleNextCategory = () => {
    setCategoryIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === 0 ? productsInCurrentCategory.length - 1 : prev - 1
    );
  };
  const handleNextProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === productsInCurrentCategory.length - 1 ? 0 : prev + 1
    );
  };

  const handleSearchProduct = (reference: string) => {
    const foundProductIndex = productsInCurrentCategory.findIndex(
      (p) => p.reference.toLowerCase() === reference.toLowerCase()
    );
    if (foundProductIndex !== -1) {
      setCurrentProductIndex(foundProductIndex);
    } else {
      alert("Produto não encontrado!");
    }
  };

  return (
    <Container>
      <Header
        category={categories[categoryIndex] || ""}
        categoryIndex={categoryIndex + 1}
        onPrevCategory={handlePrevCategory}
        onNextCategory={handleNextCategory}
      />

      {currentProduct ? (
        <>
          <Carousel
            product={currentProduct}
            onPrevProduct={handlePrevProduct}
            onNextProduct={handleNextProduct}
            onSearchProduct={handleSearchProduct}
          />

          <ProductInfo product={currentProduct} />

          <ProductPackSizesContainer>
            <ProductSizesList>
              {currentProduct.skus.map((sku) => (
                <ProductSizeContainer key={sku.id}>
                  <ProductSizeQuantity>{sku.stock}</ProductSizeQuantity>
                  <ProductSize>{sku.size}</ProductSize>
                </ProductSizeContainer>
              ))}
            </ProductSizesList>

            <EqualSimbol>=</EqualSimbol>

            <ProductSizeContainer>
              <PackWord>PACK</PackWord>
              <ProductSizeQuantity>
                {currentProduct.skus[0]?.multipleQuantity || 0}
              </ProductSizeQuantity>
            </ProductSizeContainer>
          </ProductPackSizesContainer>

          <ProductValue
            product={currentProduct}
            updateProductQuantities={updateProductQuantities}
          />
        </>
      ) : (
        <p>Nenhum produto encontrado para esta categoria.</p>
      )}
    </Container>
  );
}
