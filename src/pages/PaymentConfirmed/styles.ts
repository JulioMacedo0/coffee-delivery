import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 10rem;
  align-items: flex-end;

  @media (max-width: 1200px) {
    gap: 0.5rem;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 880px) {
    img {
      width: 25rem;
    }
  }
`;

export const ResumeDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 880px) {
    align-items: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["yellow-dark"]};
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme["bate-subtitle"]};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const CardDeliveryGradient = styled.div`
  padding: 1px;
  border-radius: 6px 36px;
  background: linear-gradient(
    300deg,
    rgba(128, 71, 248, 1) 0%,
    rgba(219, 172, 44, 1) 100%
  );
  width: 32.875rem;

  @media (max-width: 880px) {
    width: 22.875rem;
  }
`;

export const CardDelivery = styled.div`
  display: flex;
  width: 100%;
  height: 16.875rem;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.white};

  @media (max-width: 880px) {
    //width: 16.875rem;
  }
`;
