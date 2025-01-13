import { render, screen } from "@testing-library/react";
import PaymentBox from ".";
import CreditCardImage from "../../../../assets/images/creditCard.svg";
import userEvent from "@testing-library/user-event";

describe("PaymentBox component", () => {
  it("should have the class active on credit card", async () => {
    const user = userEvent.setup();

    render(<PaymentBox />);
    const creditCard = screen.getByTestId("creditCard");

    await user.click(creditCard);

    expect(screen.getByTestId("creditCard")).toHaveClass("active");
  });

  it("should have the class active on debit card", async () => {
    const user = userEvent.setup();

    render(<PaymentBox />);
    const debitCard = screen.getByTestId("debitCard");

    await user.click(debitCard);

    expect(screen.getByTestId("debitCard")).toHaveClass("active");
  });

  it("should have the class active on cash", async () => {
    const user = userEvent.setup();

    render(<PaymentBox />);
    const cash = screen.getByTestId("cash");

    await user.click(cash);

    expect(screen.getByTestId("cash")).toHaveClass("active");
  });
});
