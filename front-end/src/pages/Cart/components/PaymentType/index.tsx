import { MouseEventHandler, useEffect, useState } from "react";
import { PaymentTypeContainer, SelectedCard } from "./style";

export interface IPaymentType {
  title: string;
  image: string;
  onClick: MouseEventHandler;
  selected?: any;
}

export default function PaymentType({
  title,
  image,
  onClick,
  selected,
  ...rest
}: IPaymentType) {
  const [titleCrad, setTitleCard] = useState("");

  useEffect(() => {
    if (title === "credit") {
      setTitleCard("Cartão de crédito");
    } else if (title === "debit") {
      setTitleCard("Cartão de débito");
    } else {
      setTitleCard("Dinheiro");
    }
  }, []);

  return (
    <>
      {selected === title ? (
        <SelectedCard
          onClick={onClick}
          className="selectedCard active"
          {...rest}
        >
          <img src={image} alt={titleCrad} />
          <span>{titleCrad}</span>
        </SelectedCard>
      ) : (
        <PaymentTypeContainer
          onClick={onClick}
          className="selectedCard"
          {...rest}
        >
          <img src={image} alt={titleCrad} />
          <span>{titleCrad}</span>
        </PaymentTypeContainer>
      )}
    </>
  );
}
