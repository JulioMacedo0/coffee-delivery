import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  SmileySad,
} from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ChartItemsContext } from "../../context/ChartItemsContext";
import { CardPayment } from "./Components/CardPayment";
import { CartItem } from "./Components/CartItem";

import * as S from "./styles";

export const Payment = () => {
  const { itemsChart } = useContext(ChartItemsContext);

  const totalItens = itemsChart
    .map((item) => item.amount * parseFloat(item.price))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const deliveryPrice = 3.5;
  const total = totalItens + deliveryPrice;
  const existItems = itemsChart.length > 0;
  return (
    <S.Container>
      <S.ContentContainer>
        <div>
          <S.Title>Complete seu pedido</S.Title>
          <S.AddressContainer>
            <S.FormContainer>
              <header>
                <div>
                  <MapPinLine size={22} />
                  <S.Span>Endereço de Entrega</S.Span>
                </div>

                <S.P>Informe o endereço onde deseja receber seu pedido</S.P>
              </header>

              <form action="">
                <S.CepInput placeholder="CEP" />
                <S.StreetInput placeholder="Rua" />
                <S.InputContainer>
                  <S.NumberInput placeholder="Número" />
                  <S.ComplementInput placeholder="Complemento" />
                </S.InputContainer>
                <S.InputContainer>
                  <S.DistrictInput placeholder="Bairro" />
                  <S.CityInput placeholder="Cidade" />
                  <S.UfInput placeholder="UF" />
                </S.InputContainer>
              </form>
            </S.FormContainer>
          </S.AddressContainer>

          <S.ChosePaymentContainer>
            <header>
              <div>
                <CurrencyDollar size={22} />
                <S.Span>Pagamento</S.Span>
              </div>

              <S.P>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.P>
            </header>
            <S.PaymentCardsContainer>
              <CardPayment
                PaymentMethod="cartão de crédito"
                icon={<CreditCard size={16} />}
              />
              <CardPayment
                PaymentMethod="cartão de débito"
                icon={<Bank size={16} />}
              />
              <CardPayment
                PaymentMethod="dinheiro"
                icon={<Money size={16} />}
              />
            </S.PaymentCardsContainer>
          </S.ChosePaymentContainer>
        </div>

        <div>
          <S.Title>Cafés selecionados</S.Title>
          <S.ResumePricingItem>
            {!existItems && (
              <S.Title>
                Seu carrinho de compras está vazio <br /> volte as{" "}
                <NavLink to="/">compras.</NavLink>{" "}
              </S.Title>
            )}
            {!existItems && <SmileySad size={52} />}
            <ul>
              {itemsChart.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    amount={item.amount}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                );
              })}
            </ul>

            <S.PricingContainer>
              <S.TotalItems>
                <S.SpanTitle>Total de itens</S.SpanTitle>
                <S.SpanTralling>R$ {totalItens.toFixed(2)}</S.SpanTralling>
              </S.TotalItems>

              <S.Delivery>
                <S.SpanTitle>Entrega</S.SpanTitle>
                <S.SpanTralling>R$ {deliveryPrice.toFixed(2)}</S.SpanTralling>
              </S.Delivery>

              <S.Total>
                <S.SpanStrongTitle>Total</S.SpanStrongTitle>
                <S.SpanStrongTitle>R$ {total.toFixed(2)}</S.SpanStrongTitle>
              </S.Total>
            </S.PricingContainer>
            <S.ConfirmButton>confirmar pedido</S.ConfirmButton>
          </S.ResumePricingItem>
        </div>
      </S.ContentContainer>
    </S.Container>
  );
};
