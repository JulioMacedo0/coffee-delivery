import { useContext } from "react";
import {
  ChartItemsContext,
  PaymentSelectedType,
} from "../../../../context/ChartItemsContext";
import * as S from "./styles";

interface CardPaymentProps {
  PaymentMethod: string;
  icon: React.ReactNode;
  paymentSelected: PaymentSelectedType;
  payment: string;
}
export const CardPayment = ({
  PaymentMethod,
  icon,
  paymentSelected,
  payment,
}: CardPaymentProps) => {
  const { handleChangePaymentSlected } = useContext(ChartItemsContext);

  return (
    <S.Container
      PaymentMethod={PaymentMethod}
      paymentSelected={paymentSelected}
      type="button"
      onClick={() => handleChangePaymentSlected(payment)}
    >
      <span>{icon}</span>
      <p>{PaymentMethod}</p>
    </S.Container>
  );
};
