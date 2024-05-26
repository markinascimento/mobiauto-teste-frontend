import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Select } from ".";

const options = [
  { label: "value 1", code: "1" },
  { label: "value 2", code: "2" },
  { label: "value 3", code: "3" },
];

describe("<Select />", () => {
  test("Should render select in the document", () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <Select
        value=""
        label="Testing"
        options={options}
        onChangeValue={handleChange}
      />
    );

    expect(getByTestId("select-id")).toBeInTheDocument();
  });

  test("Should not render component when disabled", () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <Select
        value=""
        isDisabled
        label="Testing"
        onChangeValue={handleChange}
        options={options}
      />
    );

    fireEvent.click(getByTestId("select-id"));

    expect(handleChange).not.toHaveBeenCalled();
  });

  test("Should render values in the document", () => {
    const handleSelectValue = jest.fn();

    render(
      <Select
        label="Select Label"
        value=""
        options={options}
        onChangeValue={handleSelectValue}
      />
    );

    fireEvent.mouseDown(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("value 1"));

    expect(screen.getByText("value 1")).toBeInTheDocument();
  });
});
