import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  background-color: #809dab;
  align-items: center;
  width: 100%;
  height: 2.5em;
`;

export const BackButtonHeader = styled.p`
  color: white;
  font-weight: bold;
`;

export const CategoryDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const WhiteButton = styled.button`
  background-color: white;
  color: #809dab;
  width: 2em;
  height: 2em;
  border-radius: 100%;
  font-weight: 900;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TitleCategory = styled.p`
  text-transform: uppercase;
  color: #809dab;
  font-weight: bold;
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
