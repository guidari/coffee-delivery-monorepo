import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import InputAdress from ".";
import FakeImage from "../../assets/images/coffees/american-express.png";
import { AdressFormData } from "../../pages/Cart";
import userEvent from "@testing-library/user-event";

const Wrapper = (props: any) => {
  const formMethods = useForm<AdressFormData>();

  return <FormProvider {...formMethods}>{props.children}</FormProvider>;
};

describe("InputAdress component", () => {
  it("renders correctly the with the provider", () => {
    render(
      <Wrapper>
        <InputAdress placeholder="titulo" registerName="titulo" type="button" />
      </Wrapper>
    );

    expect(screen.queryByPlaceholderText("titulo")).toBeInTheDocument();
  });
  it("should focus on the input", async () => {
    render(
      <Wrapper>
        <InputAdress placeholder="titulo" registerName="titulo" type="button" />
      </Wrapper>
    );

    const user = userEvent.setup();

    await user.tab();

    expect(screen.getByTestId("input")).toHaveFocus();
  });
});
