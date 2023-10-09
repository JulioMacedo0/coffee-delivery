import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ChartItemsContext } from "../../../../context/ChartItemsContext";

import * as S from "./styles";

interface CardCoffeProps {
  id: number;
  img: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
}

export const CardCoffee = ({
  id,
  img,
  tags,
  name,
  description,
  price,
}: CardCoffeProps) => {
  const { handleAddProduct, itemsChart, handleDecreaseProduct } =
    useContext(ChartItemsContext);

  const amountItem = itemsChart.find((item) => item.id == id)?.amount || 0;

  return (
    <S.Container>
      <img src={img} alt="" />
      <S.TasteContainer>
        {tags.map((tag) => (
          <S.TasteSpan key={tag}>{tag}</S.TasteSpan>
        ))}
      </S.TasteContainer>

      <h3>{name}</h3>
      <p>{description}</p>

      <footer>
        <S.PricingContainer>
          <S.CurrencyType>R$ </S.CurrencyType> <S.Price>{price}</S.Price>
        </S.PricingContainer>
        <S.CounterItem>
          <button onClick={() => handleDecreaseProduct(id)}>
            <Minus size={15} weight="fill" />
          </button>
          {amountItem}
          <button onClick={() => handleAddProduct(id, name, img, price)}>
            <Plus size={15} weight="fill" />
          </button>
        </S.CounterItem>
        <NavLink to="payment">
          <ShoppingCartSimple size={22} weight="fill" />
        </NavLink>
      </footer>
    </S.Container>
  );
};
