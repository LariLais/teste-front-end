import { InfoModal } from "../InfoModal/InfoModal";
import { SearchButton } from "../SearchButton/SearchButton";
import {
  BuyButton,
  CarouselContainer,
  CarouselInfoContainer,
  ClothesImages,
  ColoredPaginationButtonLeft,
  ColoredPaginationButtonRight,
  MiniImage,
  MiniImagesCarousel,
} from "./Carousel.styled";
import type { Product } from "../../types/Product";
import { useState } from "react";

import ImageUndefined from "../../assets/images/image_undefined.png";

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

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = ImageUndefined;
    target.onerror = null;
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
                border: index === currentImageIndex ? "2px solid gray" : "none",
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
