// src/components/InfoModal/InfoModal.tsx
import { useState } from "react";
import {
  CloseButton,
  InfoModalButton,
  InfoModalContainer,
  InfoModalHeader,
  InfoModalTitle,
  InfosContainer,
} from "./InfoModal.styled";
import type { Product } from "../../types/Product";

interface InfoModalProps {
  product: Product | null;
}

export const InfoModal = ({ product }: InfoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!product) {
    return null; // Não renderiza o botão se não houver produto
  }

  return (
    <>
      <InfoModalButton
        onClick={() => setIsOpen(true)}
        aria-label="Informações do produto"
      >
        i
      </InfoModalButton>

      {isOpen && (
        <InfoModalContainer>
          <InfoModalHeader>
            <InfoModalTitle>Informações do Produto</InfoModalTitle>
            <CloseButton
              onClick={() => setIsOpen(false)}
              aria-label="Fechar informações"
            >
              X
            </CloseButton>
          </InfoModalHeader>
          <InfosContainer>
            <p>**Nome do produto:** {product.name}</p>
            <p>**Referência:** {product.reference}</p>
            <p>**Marca:** {product.type}</p>
            <p>**Categoria:** {product.categories}</p>
            <p>**Gênero:** {product.gender}</p>
            {product.description && <p>**Descrição:** {product.description}</p>}
          </InfosContainer>
        </InfoModalContainer>
      )}
    </>
  );
};
