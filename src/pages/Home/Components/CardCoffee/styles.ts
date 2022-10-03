import styled from "styled-components";

export const Container = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 6px;
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  align-items: center;
  background-color: ${(props) => props.theme["base-card"]};

  padding: 0px 0.25rem;
  img {
    position: relative;
    top: -20px;
    width: 7.5rem;
    height: 7.5rem;
  }

  h3 {
    color: ${(props) => props.theme["bate-subtitle"]};
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  > p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
    margin-bottom: 2.0625rem;
  }

  footer {
    width: 100%;
    height: 2.375rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > a {
      border-radius: 6px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      background-color: ${(props) => props.theme["purple-darl"]};
      color: ${(props) => props.theme["white"]};
      transition: background-color 0.5s;
      :hover {
        background-color: ${(props) => props.theme["purple"]};
      }
    }
  }
`;

export const TasteContainer = styled.span`
  display: flex;
  gap: 0.156rem;
  margin-bottom: 1rem;
`;

export const TasteSpan = styled.span`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;

  text-transform: uppercase;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const CurrencyType = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-align: right;
  color: ${(props) => props.theme["bate-text"]};
`;

export const Price = styled.span`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.875rem;
  text-align: right;
  color: ${(props) => props.theme["bate-text"]};
`;

export const CounterItem = styled.span`
  padding: 8px 12px;
  border-radius: 6px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-title"]};
  gap: 0.5rem;

  button {
    border: none;
    background-color: inherit;
    color: ${(props) => props.theme["purple"]};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme["purple-darl"]};
    }
  }
`;
