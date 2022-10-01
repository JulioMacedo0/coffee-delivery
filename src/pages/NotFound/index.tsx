import * as S from "./styles";
import cat from "../../assets/cat.gif";
export const NotFound = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <h1> 404</h1>
        <h1>Desculpe, não conseguimos achar essa página...</h1>
        <h1> mas olha esse gato fofo</h1>
        <img src={cat} alt="" />
      </S.ContentContainer>
    </S.Container>
  );
};
