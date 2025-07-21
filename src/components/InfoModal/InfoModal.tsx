import React, { useState } from "react";
import {
  InfoModalButton,
  InfoModalContainer,
  InfoModalHeader,
  InfoModalTitle,
  CloseButton,
  InfosContainer,
  ModalOverlay,
} from "./InfoModal.styled";
import type { Product } from "../../types/Product";

interface InfoModalProps {
  product: Product | null;
}

export const InfoModal = ({ product }: InfoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  if (!product) {
    return null;
  }

  return (
    <>
      <InfoModalButton
        onClick={handleOpenModal}
        aria-label="Abrir informações do produto"
      >
        i
      </InfoModalButton>

      {isOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          {" "}
          <InfoModalContainer>
            <InfoModalHeader>
              <InfoModalTitle>Informações</InfoModalTitle>
              <CloseButton
                onClick={handleCloseModal}
                aria-label="Fechar modal de informações"
              >
                &times;
              </CloseButton>
            </InfoModalHeader>
            <InfosContainer>
              <p>
                <strong>Referência:</strong> {product.reference}
              </p>
              <p>
                <strong>Nome:</strong> {product.name}
              </p>
              <p>
                <strong>Preço:</strong> R$ {product.skus[0]?.price || "N/A"}
              </p>
              <p>
                <strong>Tamanhos Disponíveis:</strong>
              </p>
              <p>
                {product.skus.map((sku) => (
                  <p key={sku.id}>
                    {sku.size} (Estoque: {sku.stock})
                  </p>
                ))}
              </p>
            </InfosContainer>
          </InfoModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};
