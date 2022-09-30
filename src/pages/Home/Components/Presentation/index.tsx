import * as S from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Intro from "../../../../assets/Intro.svg";
import { CardInfo } from "./Components/CardInfo/CardInfo";

export const Presentation = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <div>
          <S.InfoTopContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delevery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </S.InfoTopContainer>

          <S.InfoBottomContainer>
            <S.CardInfoContainer>
              <CardInfo
                icon={<ShoppingCart size={16} weight="fill" />}
                paragraph="Compra simples e segura"
                color="yellow-dark"
              />
              <CardInfo
                icon={<Timer size={16} weight="fill" />}
                paragraph="Entrega rápida e rastreada"
                color="yellow"
              />
            </S.CardInfoContainer>

            <S.CardInfoContainer>
              <CardInfo
                icon={<Package size={16} weight="fill" />}
                paragraph="Embalagem mantém o café intacto"
                color="bate-text"
              />
              <CardInfo
                icon={<Coffee size={16.6} weight="fill" />}
                paragraph="O café chega fresquinho até você"
                color="purple"
              />
            </S.CardInfoContainer>
          </S.InfoBottomContainer>
        </div>

        <img src={Intro} alt="" />
      </S.ContentContainer>
    </S.Container>
  );
};
