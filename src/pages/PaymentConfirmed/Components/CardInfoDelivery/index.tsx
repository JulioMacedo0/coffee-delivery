import * as S from "./styles";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
interface CardInfoDeliveryProps {
  CardType: "Delivery" | "Prevision" | "Payment";
  color: "purple" | "yellow" | "yellow-dark";
}

export const CardInfoDelivery = ({
  CardType,
  color,
}: CardInfoDeliveryProps) => {
  if (CardType == "Delivery") {
    return (
      <S.Container>
        <S.IconContainer color={color}>
          <MapPin size={16} weight="fill" />
        </S.IconContainer>
        <S.ContentContainer>
          <p>
            Entrega em <strong>Rua Rio Grande do Sul, 940</strong>
          </p>
          <p>Tocantiopolis, TO</p>
        </S.ContentContainer>
      </S.Container>
    );
  } else if (CardType == "Prevision") {
    return (
      <S.Container>
        <S.IconContainer color={color}>
          <Clock size={16} weight="fill" />
        </S.IconContainer>
        <S.ContentContainer>
          <p>Previsão de entrega</p>
          <p>
            <strong>20 min - 30 min</strong>
          </p>
        </S.ContentContainer>
      </S.Container>
    );
  } else if (CardType == "Payment") {
    return (
      <S.Container>
        <S.IconContainer color={color}>
          <CurrencyDollar size={16} weight="fill" />
        </S.IconContainer>
        <S.ContentContainer>
          <p>Pagamento na entrega</p>
          <p>
            <strong>Cartão de Crédito</strong>
          </p>
        </S.ContentContainer>
      </S.Container>
    );
  }

  return <p>Ocorreu um erro</p>;
};
