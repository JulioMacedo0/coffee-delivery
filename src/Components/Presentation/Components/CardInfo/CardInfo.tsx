import * as S from "./styles";
interface CardInfoProps {
  paragraph: string;
  icon: React.ReactNode;
  color: "yellow-dark" | "bate-text" | "yellow" | "purple";
}

export const CardInfo = ({ paragraph, icon, color }: CardInfoProps) => {
  console.log(color);
  return (
    <S.Container iconColor={color}>
      <span>{icon}</span>
      <p>{paragraph}</p>
    </S.Container>
  );
};
