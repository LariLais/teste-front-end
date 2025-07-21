import React, { useState } from "react";
import {
  SearchButtonModal,
  SearchButtonContainer,
  SearchButtonHeader,
  SearchButtonTitle,
  CloseButton,
  SearchContainer,
  InputRef,
  ButtonRef,
  ModalOverlay,
} from "./SearchButton.styled";

interface SearchButtonProps {
  onSearch: (reference: string) => void;
}

export const SearchButton = ({ onSearch }: SearchButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
    setSearchValue("");
    handleCloseModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      <SearchButtonModal
        onClick={handleOpenModal}
        aria-label="Abrir busca de produto"
      />

      {isOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          {" "}
          <SearchButtonContainer>
            <SearchButtonHeader>
              <SearchButtonTitle>Buscar Produto</SearchButtonTitle>
              <CloseButton
                onClick={handleCloseModal}
                aria-label="Fechar modal de busca"
              >
                &times;
              </CloseButton>
            </SearchButtonHeader>
            <SearchContainer>
              <InputRef
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="00.00.000"
              />
              <ButtonRef onClick={handleSearchClick}>Buscar</ButtonRef>
            </SearchContainer>
          </SearchButtonContainer>
        </ModalOverlay>
      )}
    </>
  );
};
