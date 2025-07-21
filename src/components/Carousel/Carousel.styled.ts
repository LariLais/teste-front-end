import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 66vh;
  position: relative;
`;

export const ColoredPaginationButtonLeft = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5em;
  height: 2.5em;
  background-color: #809dab;
  color: white;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  left: 3%;
  z-index: 10;
`;

export const ColoredPaginationButtonRight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5em;
  height: 2.5em;
  background-color: #809dab;
  color: white;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  right: 3%;
  x-index: 10;
`;

export const ClothesImages = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CarouselInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 4em;
  border-top: 3px solid #809dab;
`;

export const BuyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.7em;
  height: 2.7em;
  background-color: #809dab;
  background-image: url("../../src/assets/icons/add_shopping_cart.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  color: white;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

export const MiniImagesCarousel = styled.div`
  display: flex;
  gap: 10px;
`;

export const MiniImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #809dab;
`;
