import styled from "styled-components";

export const ProductValueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height:100%
  max-height: 100%;
  background-color: white;
  gap:20px;
  padding-top: 5px;
`;

export const ProductValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuantitySelectorContainer = styled.div`
  display: flex;
  justify-center: center;
  align-items: center;
  gap: 10px;
`;

export const Paragraph = styled.p`
  font-weight: bold;
`;

export const Value = styled.p``;

export const SelectorButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.2em;
  height: 1.2em;
  color: white;
  background-color: #809dab;
  font-size: 40px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;

export const ValueSelector = styled.p`
  color: #809dab;
  border: 1px solid #809dab;
  font-weight: bold;
  padding: 5px;
  font-size: 25px;
`;
