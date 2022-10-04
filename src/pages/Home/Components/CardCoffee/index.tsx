import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styles";

interface CardCoffeProps {
  id: number;
  img: string;
  tags: [];
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
  interface ChartItemType {
    id: number;
    name: string;
    img: string;
    price: string;
    amount: number;
  }

  const [itemsChart, setItemsChart] = useState<ChartItemType[]>([]);

  useEffect(() => {
    const StotredItems = localStorage.getItem(
      "@coffe-delivery:chart-items1.0.0"
    );

    if (StotredItems) {
      setItemsChart(JSON.parse(StotredItems));
    }
  }, []);

  function handlleAddProduct() {
    const existProduct = itemsChart.find((item) => item.id == id);

    if (existProduct) {
      const newItems = itemsChart.map((item) => {
        if (item.id == id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem(
        "@coffe-delivery:chart-items1.0.0",
        JSON.stringify(newItems)
      );
      setItemsChart(newItems);
    } else {
      const newItems = [...itemsChart, { id, name, img, price, amount: 1 }];
      localStorage.setItem(
        "@coffe-delivery:chart-items1.0.0",
        JSON.stringify(newItems)
      );
      setItemsChart(newItems);
    }
  }

  function handlleDecreaseProduct() {
    const newItems = itemsChart.map((item) => {
      if (item.id == id) {
        return { ...item, amount: item.amount > 0 ? item.amount - 1 : 0 };
      } else {
        return item;
      }
    });
    localStorage.setItem(
      "@coffe-delivery:chart-items1.0.0",
      JSON.stringify(newItems)
    );
    setItemsChart(newItems);
  }

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
          <button onClick={() => handlleDecreaseProduct()}>
            <Minus size={15} weight="fill" />
          </button>
          {amountItem}
          <button onClick={() => handlleAddProduct()}>
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
