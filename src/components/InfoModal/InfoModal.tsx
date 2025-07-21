import {
  CloseButton,
  InfoModalButton,
  InfoModalContainer,
  InfoModalHeader,
  InfoModalTitle,
  InfosContainer,
} from "./InfoModal.styled";

export const InfoModal = () => {
  return (
    <>
      <InfoModalButton>i</InfoModalButton>

      <InfoModalContainer>
        <InfoModalHeader>
          <InfoModalTitle>Informações</InfoModalTitle>
          <CloseButton>X</CloseButton>
        </InfoModalHeader>
        <InfosContainer>
          <p>Nome do produto: </p>
          <p>Referência: </p>
          <p>Marca: </p>
          <p>Categoria: </p>
          <p>Gênero: </p>
        </InfosContainer>
      </InfoModalContainer>
    </>
  );
};
