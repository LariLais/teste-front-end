import {
  ButtonRef,
  CloseButton,
  InputRef,
  SearchButtonContainer,
  SearchButtonHeader,
  SearchButtonModal,
  SearchContainer,
} from "./SearchButton.styled";

export const SearchButton = () => {
  return (
    <>
      <SearchButtonModal></SearchButtonModal>

      <SearchButtonContainer>
        <SearchButtonHeader>
          BUSCAR POR REF
          <CloseButton>X</CloseButton>
        </SearchButtonHeader>
        <SearchContainer>
          <InputRef />
          <ButtonRef>Buscar</ButtonRef>
        </SearchContainer>
      </SearchButtonContainer>
    </>
  );
};
