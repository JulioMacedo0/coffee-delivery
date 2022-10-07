import styled from "styled-components";
import { PaymentSelectedType } from "../../../../context/ChartItemsContext";

interface ContainerProps {
  paymentSelected: PaymentSelectedType;
  PaymentMethod: string;
}

export const Container = styled.button<ContainerProps>`
  border: 1px solid
    ${(props) =>
      props.paymentSelected.data == props.PaymentMethod
        ? props.theme["purple"]
        : props.theme["base-button"]};
  border-radius: 6px;
  display: flex;
  width: 11.166875rem;
  height: 3.1875rem;
  justify-content: start;
  padding: 1rem;
  gap: 0.75rem;
  background-color: ${(props) =>
    props.paymentSelected.data == props.PaymentMethod
      ? props.theme["purple-light"]
      : props.theme["base-button"]};
  transition: background-color 0.5s;
  :hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
  cursor: pointer;
  span {
    color: ${(props) => props.theme["purple"]};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme["bate-text"]};
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;
  }
`;
