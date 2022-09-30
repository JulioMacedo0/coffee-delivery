import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const HeaderContainer = styled.div`
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
    }
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
