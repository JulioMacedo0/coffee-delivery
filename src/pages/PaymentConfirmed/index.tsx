import * as S from "./styles";
import ilustration from "../../assets/Illustration.svg";
import { CardInfoDelivery } from "./Components/CardInfoDelivery";
export const PaymentConfirmed = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.ResumeDeliveryContainer>
          <S.Header>
            <S.Title>Uhu! Pedido confirmado</S.Title>
            <S.Paragraph>
              Agora é só aguarda que logo o café chegará até você
            </S.Paragraph>
          </S.Header>
          <S.CardDelivery>
            <CardInfoDelivery CardType="Delivery" color="purple" />
            <CardInfoDelivery CardType="Prevision" color="yellow" />
            <CardInfoDelivery CardType="Payment" color="yellow-dark" />
          </S.CardDelivery>
        </S.ResumeDeliveryContainer>
        <img src={ilustration} alt="" />
      </S.ContentContainer>
    </S.Container>
  );
};
