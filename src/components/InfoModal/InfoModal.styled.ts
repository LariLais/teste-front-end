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
  display: none;
  flex-direction: column;
  width: 400px;
  position: absolute;
  top: 20%;
  left: 38%;
  transform: translate(-20%, -20%);
  border-radius: 5px 5px 0 0;
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
  font-size: 20px;
  right: 0.3em;
  top: 0.3em;
  cursor: pointer;
`;

export const InfosContainer = styled.p`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;
