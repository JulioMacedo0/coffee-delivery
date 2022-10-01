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
`;

export const ResumeDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme["bate-subtitle"]};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
`;

export const CardDelivery = styled.div`
  display: flex;
  width: 32.875rem;
  height: 16.875rem;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid red;
`;
