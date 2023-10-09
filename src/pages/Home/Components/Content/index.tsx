import { useEffect, useState } from "react";
import { CardCoffee } from "../CardCoffee";
import * as S from "./styles";
import { api } from "../../../../API/api";
import { coffes } from "../../../../Data/coffes";

interface CoffesProps {
  description: string;
  id: number;
  name: string;
  photo: string;
  price: number;
  tags: string[];
}

export const Content = () => {
  const [Coffes, SetCoffes] = useState<CoffesProps[]>([]);

  useEffect(() => {
    // api.get("/products").then((response) => {
    //   SetCoffes(response.data);
    // });

    SetCoffes(coffes);
  }, []);

  return (
    <S.Container>
      <S.CoffesContainer>
        <h2>Nossos cafés</h2>
        <S.GridContainer>
          {Coffes.map((coffe) => (
            <CardCoffee
              id={coffe.id}
              key={coffe.id.toString()}
              description={coffe.description}
              img={coffe.photo}
              name={coffe.name}
              price={coffe.price.toFixed(2)}
              tags={coffe.tags}
            />
          ))}
        </S.GridContainer>
      </S.CoffesContainer>
    </S.Container>
  );
};
