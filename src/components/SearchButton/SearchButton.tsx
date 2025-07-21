// src/components/SearchButton/SearchButton.tsx
import { useState } from "react";
import {
  ButtonRef,
  CloseButton,
  InputRef,
  SearchButtonContainer,
  SearchButtonHeader,
  SearchButtonModal,
  SearchContainer,
} from "./SearchButton.styled";

interface SearchButtonProps {
  onSearch: (reference: string) => void;
}

export const SearchButton = ({ onSearch }: SearchButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
    setIsOpen(false);
    setSearchValue(""); // Limpa o input após a busca
  };

  return (
    <>
      <SearchButtonModal
        onClick={() => setIsOpen(true)}
        aria-label="Buscar produto por referência"
      ></SearchButtonModal>

      {isOpen && (
        <SearchButtonContainer>
          <SearchButtonHeader>
            BUSCAR POR REF
            <CloseButton
              onClick={() => setIsOpen(false)}
              aria-label="Fechar busca"
            >
              X
            </CloseButton>
          </SearchButtonHeader>
          <SearchContainer>
            <InputRef
              type="text"
              placeholder="Digite a referência"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <ButtonRef onClick={handleSearch} aria-label="Buscar">
              Buscar
            </ButtonRef>
          </SearchContainer>
        </SearchButtonContainer>
      )}
    </>
  );
};
