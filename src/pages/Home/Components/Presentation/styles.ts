import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const ContentContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 34rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 22.5rem;
    width: 36.75rem;
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
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme["bate-subtitle"]};
  }
`;

export const InfoBottomContainer = styled.div`
  height: 5.25rem;
  width: 35.4375rem;
  display: flex;
  justify-content: space-between;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
