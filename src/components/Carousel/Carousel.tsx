import { InfoModal } from "../InfoModal/InfoModal";
import { SearchButton } from "../SearchButton/SearchButton";
import {
  BuyButton,
  CarouselContainer,
  CarouselInfoContainer,
  ClothesImages,
  ColoredPaginationButtonLeft,
  ColoredPaginationButtonRight,
  MiniImagesCarousel,
} from "./Carousel.styled";

export const Carousel = () => {
  return (
    <>
      <CarouselContainer>
        <ColoredPaginationButtonLeft>&lt;</ColoredPaginationButtonLeft>
        <ClothesImages></ClothesImages>
        <ColoredPaginationButtonRight>&gt;</ColoredPaginationButtonRight>
      </CarouselContainer>
      <CarouselInfoContainer>
        <InfoModal></InfoModal>
        <SearchButton></SearchButton>
        <MiniImagesCarousel></MiniImagesCarousel>
        <BuyButton></BuyButton>
      </CarouselInfoContainer>
    </>
  );
};
