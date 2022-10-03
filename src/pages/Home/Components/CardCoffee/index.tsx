import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";
import cafe from "../../../../assets/ExpressoTradicional.svg";
import * as S from "./styles";
console.log(cafe);
interface CardCoffeProps {
  img: string;
  tags: [];
  name: string;
  description: string;
  price: number;
}

export const CardCoffee = ({
  img,
  tags,
  name,
  description,
  price,
}: CardCoffeProps) => {
  return (
    <S.Container>
      <img src={img} alt="" />
      <S.TasteContainer>
        {tags.map((tag) => (
          <S.TasteSpan>{tag}</S.TasteSpan>
        ))}
      </S.TasteContainer>

      <h3>{name}</h3>
      <p>{description}</p>

      <footer>
        <S.PricingContainer>
          <S.CurrencyType>R$ </S.CurrencyType> <S.Price>{price}</S.Price>
        </S.PricingContainer>
        <S.CounterItem>
          <button>
            <Minus size={15} weight="fill" />
          </button>
          1
          <button>
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
