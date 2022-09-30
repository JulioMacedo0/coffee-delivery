import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: start;
`;

export const CoffesContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 90rem;
  padding: 0rem 10rem;
  flex-direction: column;
  padding-bottom: 9.75rem;
  > h2 {
    align-self: start;
    margin-right: auto;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["bate-subtitle"]};
    margin-bottom: 3.5rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 16rem);
  gap: 2rem 2.5rem;
`;
