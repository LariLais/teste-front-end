import {
  ProductColor,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  ProductRef,
  ToggleButton,
} from "./ProductInfo.styled";

export const ProductInfo = () => {
  return (
    <>
      <ProductInfoContainer>
        <ToggleButton></ToggleButton>
        <ProductName>Jaqueta</ProductName>
        <ProductRef>
          <ProductColor>REF:</ProductColor>
        </ProductRef>
        <ProductRef>
          <ProductColor>R$</ProductColor>
          <ProductPrice></ProductPrice>
        </ProductRef>
      </ProductInfoContainer>
    </>
  );
};
