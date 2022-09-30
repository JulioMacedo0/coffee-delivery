import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import cafe from "../../../../assets/ExpressoTradicional.svg";
import * as S from "./styles";
export const CardCoffee = () => {
  return (
    <S.Container>
      <img src={cafe} alt="" />
      <div>
        <S.TasteSpan>tradicional</S.TasteSpan>
      </div>

      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <footer>
        <S.PricingContainer>
          <S.CurrencyType>R$ </S.CurrencyType> <S.Price>9,90</S.Price>
        </S.PricingContainer>
        <S.CounterItem>
          <button>
            <Minus size={14} weight="fill" />
          </button>
          1
          <button>
            <Plus size={14} weight="fill" />
          </button>
        </S.CounterItem>
        <button>
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </footer>
    </S.Container>
  );
};
