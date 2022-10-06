import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 10rem;

  @media (max-width: 1425px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  color: ${(props) => props.theme["bate-subtitle"]};
  margin-bottom: 0.75rem;

  @media (max-width: 1425px) {
    margin-top: 0.5rem;
    text-align: center;
  }
`;

export const AddressContainer = styled.div`
  border-radius: 6px;
  display: flex;

  flex-direction: column;
  gap: 0.75rem;
  // width: 40rem;
  //  height: 23.25rem;
  margin-bottom: 0.75rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  gap: 2rem;
  //height: 23.25rem;

  header {
    div {
      display: flex;
      align-items: center;
    }
    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const BaseInput = styled.input`
  padding: 0.75rem;
  height: 2.625rem;
  outline: none;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 4px;
  :focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;

export const CepInput = styled(BaseInput)`
  width: 12.5rem;

  @media (max-width: 900px) {
    width: 18rem;
  }

  @media (max-width: 450px) {
    width: 12.5rem;
  }
`;

export const StreetInput = styled(BaseInput)`
  @media (max-width: 900px) {
    width: 18rem;
  }

  @media (max-width: 450px) {
    width: 12.5rem;
  }
`;
export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
  @media (max-width: 900px) {
    width: 6.25rem;
  }

  @media (max-width: 450px) {
    width: 12.5rem;
  }
`;
export const ComplementInput = styled(BaseInput)`
  width: 21.75rem;
  @media (max-width: 900px) {
    width: 10.875rem;
  }

  @media (max-width: 450px) {
    width: 12.5rem;
  }
`;
export const DistrictInput = styled(BaseInput)`
  width: 12.5rem;
  @media (max-width: 900px) {
    width: 6.25rem;
  }

  @media (max-width: 450px) {
    width: 12.5rem;
  }
`;
export const CityInput = styled(BaseInput)`
  width: 17.25rem;

  @media (max-width: 900px) {
    width: 10.875rem;
  }

  @media (max-width: 450px) {
    width: 12.5rem;
  }
`;
export const UfInput = styled(BaseInput)`
  width: 3.75rem;

  @media (max-width: 450px) {
    width: 12.5rem;
  }
`;

export const ChosePaymentContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  header {
    div {
      display: flex;
      align-items: center;
    }
    svg {
      color: ${(props) => props.theme["purple"]};
    }
  }
`;

export const PaymentCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    align-items: center;
    gap: 0.5rem;
    flex-direction: column;
  }
`;

export const Span = styled.span`
  margin-left: 0.5rem;
  color: ${(props) => props.theme["bate-subtitle"]};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
`;

export const P = styled.p`
  margin-left: 1.875rem;
  color: ${(props) => props.theme["bate-text"]};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
`;

export const ResumePricingItem = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 6px;
  display: flex;
  flex-direction: column;

  text-align: center;
  gap: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  // width: 28rem;

  @media (max-width: 420px) {
    padding: 1.5rem;
  }

  @media (max-width: 375px) {
    padding: 1rem;
  }
  > svg {
    margin: auto;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  a {
    transition: color 0.5s;
    color: ${(props) => props.theme["yellow"]};
    :hover {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SpanBase = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: ${(props) => props.theme["bate-text"]};
  line-height: 130%;
`;

export const SpanTitle = styled(SpanBase)`
  font-size: 0.875rem;
`;

export const SpanTralling = styled(SpanBase)`
  font-size: 1rem;
`;

export const SpanStrongTitle = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme["bate-subtitle"]};
`;

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${(props) => props.theme["yellow"]};
  height: 2.875rem;
  color: ${(props) => props.theme["white"]};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;
  border-radius: 6px;
  transition: background-color 0.5s;

  :hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
