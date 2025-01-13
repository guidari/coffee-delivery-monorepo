import { render, screen } from "@testing-library/react";
import PaymentType from ".";
import CreditCardImage from "../../../../assets/images/creditCard.svg";
import userEvent from "@testing-library/user-event";

describe("PaymentType component", () => {
  it("renders correctly", async () => {
    const mockClick = jest.fn();
    const user = userEvent.setup();

    render(
      <PaymentType
        title="titulo"
        image={CreditCardImage}
        onClick={mockClick}
        // selected={}
      />
    );
    // const card = screen.getByTestId("card");

    // await user.click(card);
    // expect(mockClick).toHaveBeenCalled();
  });
  // it("should focus on the card box", async () => {
  //   const mockClick = jest.fn();
  //   const user = userEvent.setup();

  //   render(
  //     <PaymentType
  //       title="titulo"
  //       image={CreditCardImage}
  //       onClick={mockClick}
  //       // selected={}
  //     />
  //   );

  //   await user.tab();

  //   expect(screen.getByTestId("cardBox")).toHaveFocus();
  // });
});
