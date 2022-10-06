import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
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
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["bate-subtitle"]};
    margin-bottom: 3.5rem;
  }

  @media (max-width: 1235px) {
    justify-content: center;

    > h2 {
      text-align: center;
    }
  }

  @media (max-width: 415px) {
    padding: 0rem 5rem;
    > h2 {
      font-size: 1.5rem;
    }
  }
`;

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 16rem);
  gap: 2rem 2.5rem;

  @media (max-width: 1325px) {
    grid-template-columns: repeat(3, 16rem);
  }

  @media (max-width: 1235px) {
    grid-template-columns: repeat(2, 16rem);
    justify-content: center;
  }

  @media (max-width: 570px) {
    grid-template-columns: repeat(1, 16rem);
    justify-content: center;
  }
`;
