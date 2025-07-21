import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-top: 1px solid #babec9;
  padding: 5px;
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.7em;
  height: 2.7em;
  background-color: #5ea0ad;
  background-image: url("../../src/assets/icons/collapse_all.svg");
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  color: white;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

export const ProductName = styled.h3`
  font-weight: 500;
`;

export const ProductRef = styled.h3`
  text-transform: uppercase;
  display: flex;
  gap: 5px;
  font-weight: 500;
`;

export const ProductColor = styled.span`
  color: #02454f;
  font-weight: 500;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
