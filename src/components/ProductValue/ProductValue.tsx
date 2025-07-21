import {
  Paragraph,
  ProductValueContainer,
  ProductValues,
  QuantitySelectorContainer,
  SelectorButton,
  Value,
  ValueSelector,
} from "./ProductValue.styled";

export const ProductValue = () => {
  return (
    <ProductValueContainer>
      <ProductValues>
        <Paragraph>Atual</Paragraph>
        <Value>R$</Value>
      </ProductValues>
      <QuantitySelectorContainer>
        <SelectorButton>&minus;</SelectorButton>
        <ValueSelector>0</ValueSelector>
        <SelectorButton>+</SelectorButton>
      </QuantitySelectorContainer>
      <ProductValues>
        <Paragraph>Acumulado</Paragraph>
        <Value>R$</Value>
      </ProductValues>
    </ProductValueContainer>
  );
};
