import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoffeeCard from ".";
import CoffeeImage from "../../../../assets/images/coffees/tradicional-express.png";

const coffeeArgs = {
  id: 1,
  name: "Expresso Americano",
  description: "Expresso diluído, menos intenso que o tradicional",
  price: 10.9,
  tags: ["Tradicional"],
  image: CoffeeImage,
  isAvaliable: true,
};

describe("CoffeeCard component", () => {
  it("renders correctly", () => {
    render(<CoffeeCard coffee={coffeeArgs} />);
    expect(screen.getByText("Tradicional")).toBeInTheDocument();
  });

  it("should increment the counter", async () => {
    render(<CoffeeCard coffee={coffeeArgs} />);
    const user = userEvent.setup();

    const counter = screen.getByTestId("counter");
    const addItem = screen.getByTestId("addOneProductUnity");

    await user.click(addItem);
    expect(counter).toHaveValue(2);
  });

  it("should decrement the counter", async () => {
    render(<CoffeeCard coffee={coffeeArgs} />);
    const user = userEvent.setup();

    const counter = screen.getByTestId("counter");
    const removeItem = screen.getByTestId("removeProductUnity");

    await user.click(removeItem);
    expect(counter).toHaveValue(1);
  });

  it("should not allowed more than 99 items", async () => {
    render(<CoffeeCard coffee={coffeeArgs} />);
    const user = userEvent.setup();
    const counter = screen.getByTestId("counter");
    const addItem = screen.getByTestId("addOneProductUnity");

    for (let i = 0; i < 99; i++) {
      await user.click(addItem);
    }

    expect(counter).toHaveValue(99);
  });

  it("should not allowed less than 1 item", async () => {
    render(<CoffeeCard coffee={coffeeArgs} />);
    const user = userEvent.setup();
    const counter = screen.getByTestId("counter");
    const removeItem = screen.getByTestId("removeProductUnity");

    for (let i = 0; i < 99; i++) {
      await user.click(removeItem);
    }

    expect(counter).toHaveValue(1);
  });

  it("should add a coffee into the cart", async () => {
    const mockClickAddCart = jest.fn();
    const user = userEvent.setup();

    const { debug } = render(<CoffeeCard coffee={coffeeArgs} />);

    const addCart = screen.getByTestId("addCart");
    await user.click(addCart);
  });

  it("should not allowed less than 1 item", async () => {
    render(<CoffeeCard coffee={coffeeArgs} />);
    const user = userEvent.setup();
    const counter = screen.getByTestId("counter");
    const removeItem = screen.getByTestId("removeProductUnity");

    for (let i = 0; i < 99; i++) {
      await user.click(removeItem);
    }

    expect(counter).toHaveValue(1);
  });

  // Other tests about the user interaction with the buttons are on InputCount.test.tsx
  it("should be on the cart button", async () => {
    const user = userEvent.setup();

    render(<CoffeeCard coffee={coffeeArgs} />);

    await user.tab();
    await user.tab();
    await user.tab();
    await user.tab();

    expect(screen.getByTestId("addCart")).toHaveFocus();
  });
});
