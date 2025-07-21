// src/components/Carousel/Carousel.tsx
import { InfoModal } from "../InfoModal/InfoModal";
import { SearchButton } from "../SearchButton/SearchButton";
import {
  BuyButton,
  CarouselContainer,
  CarouselInfoContainer,
  ClothesImages, // Seu styled component
  ColoredPaginationButtonLeft,
  ColoredPaginationButtonRight,
  MiniImage,
  MiniImagesCarousel,
} from "./Carousel.styled";
import type { Product } from "../../types/Product";
import { useState } from "react";
// Importa a imagem de fallback
import ImageUndefined from "../../assets/images/image_undefined.png"; // <--- ADICIONE ESTA LINHA

interface CarouselProps {
  product: Product | null;
  onPrevProduct: () => void;
  onNextProduct: () => void;
  onSearchProduct: (reference: string) => void;
}

export const Carousel = ({
  product,
  onPrevProduct,
  onNextProduct,
  onSearchProduct,
}: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return null;
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Função para lidar com erros de carregamento de imagem
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = ImageUndefined; // Define a imagem de fallback
    target.onerror = null; // Evita loop infinito se a imagem de fallback também falhar
  };

  return (
    <>
      <CarouselContainer>
        <ColoredPaginationButtonLeft
          onClick={onPrevProduct}
          aria-label="Produto anterior"
        >
          &lt;
        </ColoredPaginationButtonLeft>
        <ClothesImages
          src={product.images[currentImageIndex]?.path}
          alt={product.name}
          onError={handleImageError}
        />
        <ColoredPaginationButtonRight
          onClick={onNextProduct}
          aria-label="Próximo produto"
        >
          &gt;
        </ColoredPaginationButtonRight>
      </CarouselContainer>
      <CarouselInfoContainer>
        <InfoModal product={product} />
        <SearchButton onSearch={onSearchProduct} />
        <MiniImagesCarousel>
          {product.images.map((image, index) => (
            <MiniImage
              key={image.id}
              src={image.path}
              alt={`${product.name} thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              style={{
                border: index === currentImageIndex ? "2px solid blue" : "none",
              }}
              onError={handleImageError}
            />
          ))}
        </MiniImagesCarousel>
        <BuyButton aria-label="Adicionar ao carrinho"></BuyButton>
      </CarouselInfoContainer>
    </>
  );
};
