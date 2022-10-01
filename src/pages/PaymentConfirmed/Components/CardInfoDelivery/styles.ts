import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;
  align-items: center;
`;

interface InfoContainerProps {
  color: "purple" | "yellow" | "yellow-dark";
}

export const IconContainer = styled.div<InfoContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[props.color]};
`;
export const ContentContainer = styled.div``;
