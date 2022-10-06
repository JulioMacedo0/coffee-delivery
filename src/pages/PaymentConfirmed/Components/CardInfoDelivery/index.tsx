import * as S from "./styles";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { ChartItemsContext } from "../../../../context/ChartItemsContext";
interface CardInfoDeliveryProps {
  CardType: "Delivery" | "Prevision" | "Payment";
  color: "purple" | "yellow" | "yellow-dark";
}

export const CardInfoDelivery = ({
  CardType,
  color,
}: CardInfoDeliveryProps) => {
  const { street, houseNumber, city, state, paymentSelected } =
    useContext(ChartItemsContext);

  if (CardType == "Delivery") {
    return (
      <S.Container>
        <S.IconContainer color={color}>
          <MapPin size={16} weight="fill" />
        </S.IconContainer>
        <S.ContentContainer>
          <p>
            Entrega em
            <strong>
              {street}, {houseNumber}
            </strong>
          </p>
          <p>
            {city},<S.stateUpperCase>{state}</S.stateUpperCase>
          </p>
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
            <strong>{paymentSelected}</strong>
          </p>
        </S.ContentContainer>
      </S.Container>
    );
  }

  return <p>Ocorreu um erro</p>;
};
