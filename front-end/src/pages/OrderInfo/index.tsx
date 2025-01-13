import {
  LeftContainer,
  OrderInfoContainer,
  RightContainer,
  SummaryContainer,
  TextContainer,
} from "./style";

import LocationDelivery from "../../assets/images/locationDelivery.svg";
import Timer from "../../assets/images/timer.svg";
import MoneyDelivery from "../../assets/images/moneyDelivery.svg";
import BikeDelivery from "../../assets/images/bikeDelivery.svg";

export default function OrderInfo() {
  const cardTye = localStorage.getItem("coffeeDelivery-cardType");
  const street = localStorage.getItem("coffeeDelivery-street");
  const homeNumber = localStorage.getItem("coffeeDelivery-homeNumber");
  const neighborhood = localStorage.getItem("coffeeDelivery-neighborhood");
  const city = localStorage.getItem("coffeeDelivery-city");
  const uf = localStorage.getItem("coffeeDelivery-uf");

  return (
    <OrderInfoContainer>
      <LeftContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>

        <SummaryContainer>
          <TextContainer>
            <img
              src={LocationDelivery}
              alt="Localização"
              width="32px"
              height="32px"
            />
            <div>
              <p>
                Entrega em{" "}
                <span>
                  {street}, {homeNumber}
                </span>
              </p>
              <p>
                {neighborhood} - {city}, {uf}
              </p>
            </div>
          </TextContainer>

          <TextContainer>
            <img src={Timer} alt="Localização" width="32px" height="32px" />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </TextContainer>

          <TextContainer>
            <img
              src={MoneyDelivery}
              alt="Dinheiro verde"
              width="32px"
              height="32px"
            />
            <div>
              <p>Pagamento na entrega</p>
              <span>
                {cardTye === "credit"
                  ? "Cartão de crédito"
                  : cardTye === "debit"
                  ? "Cartão de débito"
                  : "Dinheiro"}
              </span>
            </div>
          </TextContainer>
        </SummaryContainer>
      </LeftContainer>
      <RightContainer>
        <div></div>
        <img src={BikeDelivery} alt="Entregar montado em uma bicicleta" />
      </RightContainer>
    </OrderInfoContainer>
  );
}
