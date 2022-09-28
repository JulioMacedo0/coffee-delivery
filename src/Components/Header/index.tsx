import { MapPin, ShoppingCart } from "phosphor-react";
import * as S from './styles';
import logo from '../../assets/Logo.svg'
export const Header = () => {
  return (
    <S.Container>
   <S.HeaderContainer>
    <img src={logo} alt="logo" />
    <div>
      <S.LocaleDiv>
      <MapPin size={22} weight="fill" />
      <p>Tocantinopolis, TO</p>
      </S.LocaleDiv>

    <S.ButtonChart> <ShoppingCart size={22} weight="fill" /></S.ButtonChart>
    </div>
   </S.HeaderContainer>
   </S.Container>
  )
}
