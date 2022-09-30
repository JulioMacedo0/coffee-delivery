import { CardCoffee } from "../CardCoffee";
import * as S from "./styles";

export const Content = () => {
  return (
    <S.Container>
      <S.CoffesContainer>
        <h2>Nossos cafés</h2>
        <S.GridContainer>
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
          <CardCoffee />
        </S.GridContainer>
      </S.CoffesContainer>
    </S.Container>
  );
};
