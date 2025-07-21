import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 100vh;
  border: 2px solid black;
`;

export const ProductPackSizesContainer = styled.div`
  width: 100%;
  height: 4.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #809dab;
  gap: 10px;
  position: relative;
`;

export const ProductSizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProductSizeQuantity = styled.p`
  width: 40px;
  height: 30px;
  background-color: white;
  border-radius: 10px;
  position: relative;
`;

export const ProductSize = styled.p`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #809dab;
  border: 1px solid white;
  border-radius: 100%;
  position: absolute;
  top: 3px;
`;

export const EqualSimbol = styled.p`
  color: white;
  font-size: 18px;
`;

export const PackWord = styled.p`
  position: absolute;
  font-size: 10px;
  color: white;
  top: 8px;
`;
