import * as S from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { ChartItemsContext } from "../../../../context/ChartItemsContext";

interface CartItemProps {
  amount: number;
  id: number;
  name: string;
  img: string;
  price: string;
}
export const CartItem = ({ id, amount, img, price, name }: CartItemProps) => {
  const { handlleAddProduct, handlleDecreaseProduct } =
    useContext(ChartItemsContext);

  return (
    <S.Wrapper>
      <S.Container>
        <S.ProductContainer>
          <img src={img} alt="" />
          <div>
            <S.TitleProduct>{name}</S.TitleProduct>
            <S.ButtonsCotainer>
              <S.ButtonCount>
                <button onClick={() => handlleDecreaseProduct(id)}>
                  <Minus size={15} />
                </button>
                <span>{amount}</span>
                <button onClick={() => handlleAddProduct(id, name, img, price)}>
                  <Plus size={15} />
                </button>
              </S.ButtonCount>
              <S.DeleteButton>
                <Trash size={14} />
                <span>remover</span>
              </S.DeleteButton>
            </S.ButtonsCotainer>
          </div>

          <S.PricingContainer>
            <span>R$ {price}</span>
          </S.PricingContainer>
        </S.ProductContainer>
      </S.Container>
      <S.Divider />
    </S.Wrapper>
  );
};
