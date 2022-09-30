import * as S from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import img from "../../../../assets/ExpressoTradicional.svg";
export const CartItem = () => {
  return (
    <S.Container>
      <S.ProductContainer>
        <img src={img} alt="" />
        <div>
          <S.TitleProduct>Expresso Tradicional</S.TitleProduct>
          <S.ButtonsCotainer>
            <S.ButtonCount>
              <Minus />
              <span>{1}</span>
              <Plus size={14} />
            </S.ButtonCount>
            <S.DeleteButton>
              <Trash size={14} />
              <span>remover</span>
            </S.DeleteButton>
          </S.ButtonsCotainer>
        </div>

        <S.PricingContainer>
          <span>R$ 9,90</span>
        </S.PricingContainer>
      </S.ProductContainer>
    </S.Container>
  );
};
