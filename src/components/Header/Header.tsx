// src/components/Header/Header.tsx
import {
  BackButtonHeader,
  CategoryDiv,
  HeaderContainer,
  TitleCategory,
  WhiteButton,
} from "./Header.styled";

interface HeaderProps {
  category: string;
  categoryIndex?: number; // novo, opcional
  onPrevCategory: () => void;
  onNextCategory: () => void;
}

export const Header = ({
  category,
  categoryIndex,
  onPrevCategory,
  onNextCategory,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <BackButtonHeader aria-label="Voltar">&lt;</BackButtonHeader>
      <CategoryDiv>
        <WhiteButton onClick={onPrevCategory} aria-label="Categoria anterior">
          &lt;
        </WhiteButton>
        <TitleCategory>
          {categoryIndex !== undefined && ` (${categoryIndex})`} {category}
        </TitleCategory>
        <WhiteButton onClick={onNextCategory} aria-label="Próxima categoria">
          &gt;
        </WhiteButton>
      </CategoryDiv>
      {/* Botão de funções - sem funcionalidade */}
      <WhiteButton aria-label="Botão F">F</WhiteButton>
    </HeaderContainer>
  );
};
