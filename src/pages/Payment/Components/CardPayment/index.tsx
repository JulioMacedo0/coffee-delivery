import * as S from "./styles";

interface CardPaymentProps {
  PaymentMethod: string;
  icon: React.ReactNode;
}
export const CardPayment = ({ PaymentMethod, icon }: CardPaymentProps) => {
  return (
    <S.Container>
      <span>{icon}</span>
      <p>{PaymentMethod}</p>
    </S.Container>
  );
};
