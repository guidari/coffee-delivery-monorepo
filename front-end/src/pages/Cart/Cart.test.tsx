import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from ".";

describe("Cart component", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
  });
});
