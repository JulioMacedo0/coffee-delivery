import { useEffect, useState } from "react";
import { CardCoffee } from "../CardCoffee";
import * as S from "./styles";
import { api } from "../../../../API/api";

interface CoffesProps {
  description: string;
  id: number;
  name: string;
  photo: string;
  price: number;
  tags: [];
}

export const Content = () => {
  const [Coffes, SetCoffes] = useState<CoffesProps[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      SetCoffes(response.data);
    });
  }, []);

  return (
    <S.Container>
      <S.CoffesContainer>
        <h2>Nossos cafés</h2>
        <S.GridContainer>
          {Coffes.map((coffe) => {
            return (
              <CardCoffee
                key={coffe.id}
                description={coffe.description}
                img={coffe.photo}
                name={coffe.name}
                price={coffe.price}
                tags={coffe.tags}
              />
            );
          })}
        </S.GridContainer>
      </S.CoffesContainer>
    </S.Container>
  );
};
