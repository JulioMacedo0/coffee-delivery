import styled from "styled-components";

export const Container = styled.div`
  border-radius: 6px;
  display: flex;
  width: 11.166875rem;
  height: 3.1875rem;
  justify-content: start;
  padding: 1rem;
  gap: 0.75rem;
  background-color: ${(props) => props.theme["base-button"]};
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
