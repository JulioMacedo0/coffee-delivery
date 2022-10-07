import { MapPin, ShoppingCart } from "phosphor-react";
import * as S from "./styles";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { ChartItemsContext } from "../../context/ChartItemsContext";
import { useContext } from "react";

export const Header = () => {
  const { itemsChart } = useContext(ChartItemsContext);
  const amaountItems = itemsChart
    .map((item) => item.amount)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  return (
    <S.Container>
      <S.HeaderContainer existItems={itemsChart.length > 0}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div>
          <S.LocaleDiv>
            <MapPin size={22} weight="fill" />
            <p>Bauru, SP</p>
          </S.LocaleDiv>

          <NavLink to="/payment">
            {itemsChart.length > 0 && <span>{amaountItems}</span>}
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </div>
      </S.HeaderContainer>
    </S.Container>
  );
};
