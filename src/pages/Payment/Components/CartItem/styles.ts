import styled from "styled-components";

export const Wrapper = styled.div``;

export const Divider = styled.div`
  margin: 22px 0;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const TitleProduct = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme["bate-subtitle"]};
`;

export const PricingContainer = styled.div`
  margin-right: auto;
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["bate-text"]};
  }
`;

export const ButtonsCotainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const BaseButton = styled.button`
  padding: 0.375rem;
  align-items: center;
  border-radius: 6px;
  justify-content: space-around;
  display: flex;
  background-color: ${(props) => props.theme["base-button"]};
  height: 2rem;
  border: none;
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const ButtonCount = styled(BaseButton)`
  width: 4.5rem;
  > span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const DeleteButton = styled(BaseButton)`
  width: 5.6875rem;

  > span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: ${(props) => props.theme["bate-text"]};
    text-transform: uppercase;
  }
`;
