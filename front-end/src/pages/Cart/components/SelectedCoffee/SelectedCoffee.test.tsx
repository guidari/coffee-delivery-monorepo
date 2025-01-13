import { render, screen } from "@testing-library/react";
import SelectedCoffee from ".";
import CoffeeImage from "../../../../assets/images/coffees/american-express.png";
import CoffeeCard from "../../../Home/components/CoffeeCard";
import userEvent from "@testing-library/user-event";
import { ShoppingCartProvider } from "../../../../context/ShoppingCartContext";

describe("SelectedCoffee component", () => {
  it("renders correctly", () => {
    render(
      <ShoppingCartProvider>
        <SelectedCoffee
          id={1}
          name="titulo"
          image={CoffeeImage}
          price={9.9}
          quantity={1}
        />
      </ShoppingCartProvider>
    );
  });

  it("should increment the counter", async () => {
    const { debug } = render(
      <ShoppingCartProvider>
        <SelectedCoffee
          id={1}
          name="titulo"
          image={CoffeeImage}
          price={9.9}
          quantity={1}
        />
      </ShoppingCartProvider>
    );
    const user = userEvent.setup();

    const counter = screen.getByTestId("counter");
    const addItem = screen.getByTestId("addOneProductUnity");

    await user.click(addItem);
    expect(counter).toHaveValue(2);
  });

  it("should decrement the counter", async () => {
    render(
      <ShoppingCartProvider>
        <SelectedCoffee
          id={1}
          name="titulo"
          image={CoffeeImage}
          price={9.9}
          quantity={1}
        />
      </ShoppingCartProvider>
    );
    const user = userEvent.setup();

    const counter = screen.getByTestId("counter");
    const removeItem = screen.getByTestId("removeProductUnity");

    await user.click(removeItem);
    expect(counter).toHaveValue(1);
  });

  it("should not allowed more than 99 items", async () => {
    const { debug } = render(
      <ShoppingCartProvider>
        <SelectedCoffee
          id={1}
          name="titulo"
          image={CoffeeImage}
          price={9.9}
          quantity={1}
        />
      </ShoppingCartProvider>
    );

    const user = userEvent.setup();
    const counter = screen.getByTestId("counter");
    const addItem = screen.getByTestId("addOneProductUnity");

    for (let i = 0; i < 99; i++) {
      await user.click(addItem);
    }

    expect(counter).toHaveValue(99);
  });

  it("should not allowed less than 1 item", async () => {
    render(
      <ShoppingCartProvider>
        <SelectedCoffee
          id={1}
          name="titulo"
          image={CoffeeImage}
          price={9.9}
          quantity={1}
        />
      </ShoppingCartProvider>
    );
    const user = userEvent.setup();
    const counter = screen.getByTestId("counter");
    const removeItem = screen.getByTestId("removeProductUnity");

    for (let i = 0; i < 99; i++) {
      await user.click(removeItem);
    }

    expect(counter).toHaveValue(1);
  });
  it("should have a valid number", async () => {
    render(
      <ShoppingCartProvider>
        <SelectedCoffee
          id={1}
          name="titulo"
          image={CoffeeImage}
          price={9.9}
          quantity={1}
        />
      </ShoppingCartProvider>
    );
    const user = userEvent.setup();
    const counter: HTMLInputElement = screen.getByTestId("counter");
    const removeItem = screen.getByTestId("removeProductUnity");
    await user.click(removeItem);

    expect(Number(counter.value)).toBeGreaterThan(0);
    expect(Number(counter.value)).toBeLessThan(100);
  });

  // Other tests about the user interaction with the buttons are on InputCount.test.tsx
  it("should be on the plus button", async () => {
    const user = userEvent.setup();

    render(
      <ShoppingCartProvider>
        <SelectedCoffee
          id={1}
          name="titulo"
          image={CoffeeImage}
          price={9.9}
          quantity={1}
        />
      </ShoppingCartProvider>
    );

    await user.tab();
    await user.tab();
    await user.tab();
    await user.tab();

    expect(screen.getByTestId("removeCoffee")).toHaveFocus();
  });
});
