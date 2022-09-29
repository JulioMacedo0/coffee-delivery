import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 500px;
  justify-content: center;
  align-items: start;
`;

export const CoffesContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 90rem;
  padding: 0rem 10rem;
  h2 {
    align-self: start;
    margin-right: auto;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme["bate-subtitle"]};
  }
`;
