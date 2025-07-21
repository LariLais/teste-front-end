import {
  ProductColor,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  ProductRef,
  ToggleButton,
} from "./ProductInfo.styled";
import type { Product } from "../../types/Product";

interface ProductInfoProps {
  product: Product | null;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  if (!product) {
    return null;
  }

  const price = product.skus.length > 0 ? product.skus[0].price : "N/A";

  return (
    <>
      <ProductInfoContainer>
        <ToggleButton aria-label="Toggle informações"></ToggleButton>
        <ProductName>{product.name}</ProductName>
        <ProductRef>
          <ProductColor>REF:</ProductColor>
          {product.reference}
        </ProductRef>
        <ProductRef>
          <ProductColor>R$</ProductColor> <ProductPrice> {price}</ProductPrice>
        </ProductRef>
      </ProductInfoContainer>
    </>
  );
};
