import styled from "styled-components";
interface ContainerProps {
  iconColor: "yellow-dark" | "bate-text" | "yellow" | "purple";
}
export const Container = styled.div<ContainerProps>`
  // width: 14.4375rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 999999px;
    background-color: ${(props) => props.theme[props.iconColor]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["bate-text"]};
  }
`;
