import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const ContentContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  // height: 34rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  img {
    width: 29.75rem;
    // height: 22.5rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    //  height: 22.5rem;
    width: 36.75rem;
  }

  @media (max-width: 1365px) {
    img {
      width: 25.75rem;
      height: 18.5rem;
    }

    > div {
      //  height: 18.5rem;
      width: 32.75rem;
    }
  }

  @media (max-width: 1235px) {
    flex-direction: column-reverse;
    gap: 0.5rem;
    img {
      width: 23.75rem;
      height: 16.5rem;
    }

    > div {
      //   height: 16.5rem;
      width: 30.75rem;
    }
  }

  @media (max-width: 415px) {
    > div {
      //   height: 20.5rem;
    }
    img {
      width: 20.75rem;
      //    height: 13.5rem;
    }
  }
`;

export const InfoTopContainer = styled.div`
  h1 {
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-title"]};
    font-weight: 800;
    font-size: 2.98rem;
    margin-bottom: 1rem;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["bate-subtitle"]};
  }

  @media (max-width: 1365px) {
    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 1235px) {
    h1 {
      text-align: center;
      font-size: 2rem;
    }

    p {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 500px) {
    padding: 0rem 1rem;
    > h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 415px) {
    padding: 0rem 5rem;
    > h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfoBottomContainer = styled.div`
  //  height: 5.25rem;

  width: 35.4375rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1365px) {
    //  height: 5.25rem;
    width: 33.4375rem;
  }
  @media (max-width: 1235px) {
    //  height: 5.25rem;
    width: 33.4375rem;
  }

  @media (max-width: 555px) {
    flex-direction: column;
    gap: 0.3125rem;
    align-items: start;
    // height: 5.25rem;
    width: 19rem;
  }

  @media (max-width: 415px) {
    flex-direction: column;
    //   height: 5.25rem;
  }
`;

export const CardInfoContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  @media (max-width: 555px) {
    gap: 0.3125rem;
  }
`;
