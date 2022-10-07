import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  SmileySad,
} from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { ChartItemsContext } from "../../context/ChartItemsContext";
import { CardPayment } from "./Components/CardPayment";
import { CartItem } from "./Components/CartItem";

import * as S from "./styles";

export const Payment = () => {
  const {
    itemsChart,
    onChangeSetCep,
    onChangeSetScreet,
    onChangeSetHouseNumber,
    onChangeSetComplement,
    onChangeSetDistrict,
    onChangeSetCity,
    onChangeSetState,
    inputData,
    cep,
    street,
    houseNumber,
    complement,
    district,
    city,
    state,
    paymentSelected,
  } = useContext(ChartItemsContext);

  const totalItens = itemsChart
    .map((item) => item.amount * parseFloat(item.price))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  useEffect(() => {}, [inputData]);

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
                <S.WarpperInput>
                  <S.CepInput
                    placeholder="CEP"
                    onChange={(event) => onChangeSetCep(event.target.value)}
                    value={cep}
                  />
                  <S.Error>Este campo deve ser preenchido</S.Error>
                </S.WarpperInput>
                <S.WarpperInput>
                  <S.StreetInput
                    placeholder="Rua"
                    value={street}
                    onChange={(event) => onChangeSetScreet(event.target.value)}
                  />
                  <S.Error>Este campo deve ser preenchido</S.Error>
                </S.WarpperInput>
                <S.InputContainer>
                  <S.WarpperInput>
                    <S.NumberInput
                      placeholder="Número"
                      value={houseNumber}
                      onChange={(event) =>
                        onChangeSetHouseNumber(event.target.value)
                      }
                    />
                    <S.Error>Este campo deve ser preenchido</S.Error>
                  </S.WarpperInput>

                  <S.WarpperInput>
                    <S.ComplementInput
                      placeholder="Complemento"
                      onChange={(event) =>
                        onChangeSetComplement(event.target.value)
                      }
                      value={complement}
                    />
                    <S.Error>Este campo deve ser preenchido</S.Error>
                  </S.WarpperInput>
                </S.InputContainer>

                <S.InputContainer>
                  <S.WarpperInput>
                    <S.DistrictInput
                      placeholder="Bairro"
                      onChange={(event) =>
                        onChangeSetDistrict(event.target.value)
                      }
                      value={district}
                    />
                    <S.Error>Este campo deve ser preenchido</S.Error>
                  </S.WarpperInput>

                  <S.WarpperInput>
                    <S.CityInput
                      placeholder="Cidade"
                      value={city}
                      onChange={(event) => onChangeSetCity(event.target.value)}
                    />
                    <S.Error>Este campo deve ser preenchido</S.Error>
                  </S.WarpperInput>

                  <S.WarpperInput>
                    <S.UfInput
                      placeholder="UF"
                      value={state}
                      onChange={(event) => onChangeSetState(event.target.value)}
                    />
                    <S.Error>Este campo deve ser preenchido</S.Error>
                  </S.WarpperInput>
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
                paymentSelected={paymentSelected}
                payment="cartão de crédito"
                PaymentMethod="cartão de crédito"
                icon={<CreditCard size={16} />}
              />
              <CardPayment
                paymentSelected={paymentSelected}
                payment="cartão de débito"
                PaymentMethod="cartão de débito"
                icon={<Bank size={16} />}
              />
              <CardPayment
                paymentSelected={paymentSelected}
                payment="dinheiro"
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
