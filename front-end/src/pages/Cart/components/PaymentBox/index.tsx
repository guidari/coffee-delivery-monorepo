import { useState } from "react";
import { Instrunctions } from "../AdressSectionBox/style";
import PaymentType from "../PaymentType";
import { PaymentBoxContainer, PaymentTypes } from "./style";

import Money from "../../../../assets/images/money.svg";
import CreditCard from "../../../../assets/images/creditCard.svg";
import DebitCard from "../../../../assets/images/debitCard.svg";
import Cash from "../../../../assets/images/cash.svg";

export default function PaymentBox() {
  const [cardSelected, setcCardSelected] = useState("credit");

  function changeCard(cardType: string) {
    setcCardSelected(cardType);
    localStorage.setItem("coffeeDelivery-cardType", cardType);
  }

  return (
    <PaymentBoxContainer>
      <Instrunctions>
        <img src={Money} alt="Icone de dinheiro" />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Instrunctions>

      <PaymentTypes>
        <PaymentType
          title="credit"
          image={CreditCard}
          onClick={() => changeCard("credit")}
          selected={cardSelected}
          data-testid="creditCard"
        />
        <PaymentType
          title="debit"
          image={DebitCard}
          onClick={() => changeCard("debit")}
          selected={cardSelected}
          data-testid="debitCard"
        />
        <PaymentType
          title="cash"
          image={Cash}
          onClick={() => changeCard("cash")}
          selected={cardSelected}
          data-testid="cash"
        />
      </PaymentTypes>
    </PaymentBoxContainer>
  );
}
