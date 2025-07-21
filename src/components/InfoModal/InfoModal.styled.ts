import styled from "styled-components";

export const InfoModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8em;
  height: 1.8em;
  background-color: #809dab;
  color: white;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  font-size: 25px;
`;

export const InfoModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InfoModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #809dab;
  height: 50px;
  position: relative;
  border-radius: 5px 5px 0 0;
`;

export const InfoModalTitle = styled.p`
  font-size: larger;
  color: white;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 30px;
  right: 0.3em;
  top: 0.3em;
  cursor: pointer;
`;

export const InfosContainer = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: white;
  border-radius: 0 0 5px 5px;
`;

export const ModalOverlay = styled.div`
  position: fixed; /* Fixa na tela */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
