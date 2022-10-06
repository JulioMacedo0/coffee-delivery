import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
`;

interface HeaderContainerProps {
  existItems: boolean;
}
export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  max-width: 90rem;
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      margin-left: 0.75rem;
      background-color: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};
      height: 2.375rem;
      width: 2.375rem;
      border: none;
      transition: background-color 0.5s;
      :hover {
        background-color: ${(props) => props.theme["yellow"]};
      }

      svg {
        position: relative;
        left: ${(props) => (props.existItems ? "-8px" : "0px")};
      }

      span {
        position: relative;
        top: -20px;
        right: -25px;
        background-color: ${(props) => props.theme["yellow-dark"]};
        width: 1.125rem;
        height: 1.125rem;
        color: ${(props) => props.theme.white};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 700px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 415px) {
    padding: 2rem 2rem;
  }
`;

export const LocaleDiv = styled.div`
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme["purple-darl"]};
  background-color: ${(props) => props.theme["purple-light"]};
  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    line-height: 1.1375rem;
    font-weight: 400;
  }

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
