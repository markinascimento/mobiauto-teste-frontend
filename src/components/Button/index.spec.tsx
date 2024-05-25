import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  test("Should render button in the document", () => {
    const { getByTestId } = render(<Button label="Consultar preço" />);

    expect(getByTestId("button-id")).toBeInTheDocument();
  });

  test("Should not called when disabeld", () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Button label="Consultar preço" onClick={handleClick} disabled={true} />
    );

    fireEvent.click(getByTestId("button-id"));

    expect(handleClick).not.toHaveBeenCalled();
  });

  test("Should called when click", () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Button label="Consultar preço" onClick={handleClick} />
    );

    fireEvent.click(getByTestId("button-id"));

    expect(handleClick).toHaveBeenCalled();
  });
});
