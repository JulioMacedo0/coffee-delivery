import { MapPin, ShoppingCart } from "phosphor-react";
import * as S from "./styles";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div>
          <S.LocaleDiv>
            <MapPin size={22} weight="fill" />
            <p>Tocantinopolis, TO</p>
          </S.LocaleDiv>

          <NavLink to="/payment">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </div>
      </S.HeaderContainer>
    </S.Container>
  );
};
