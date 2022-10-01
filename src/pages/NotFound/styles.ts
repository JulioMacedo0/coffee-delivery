import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  justify-items: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 10rem;

  h1 {
    font-family: "Baloo 2", cursive;
    color: #272221;
    font-weight: 800;
    font-size: 2.98rem;
    text-align: center;
  }

  @media (max-width: 757px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 1rem;
    }

    img {
      width: 250px;
    }

    padding: 2rem 5rem;
  }
`;
