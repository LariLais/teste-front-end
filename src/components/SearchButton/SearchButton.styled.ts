import styled from "styled-components";

export const SearchButtonModal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3em;
  height: 3.3em;
  background-color: #809dab;
  background-image: url("../../src/assets/icons/search.svg");
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  color: white;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;
export const SearchButtonContainer = styled.div`
  display: none;
  flex-direction: column;
  width: 400px;
  position: absolute;
  top: 20%;
  left: 38%;
  transform: translate(-20%, -20%);
  border-radius: 5px 5px 0 0;
`;

export const SearchButtonHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #809dab;
  color: white;
  font-weight: bold;
  height: 50px;
  position: relative;
  border-radius: 5px 5px 0 0;
`;

export const SearchButtonTitle = styled.p`
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

export const SearchContainer = styled.p`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const InputRef = styled.input`
  background-color: #f2f2f2;
  border-radius: 5px;
  width: 250px;
  height: 35px;
  border: none;
  padding-left: 10px;
`;

export const ButtonRef = styled.button`
  background-color: #6f97ab;
  color: white;
  border-radius: 5px;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;
