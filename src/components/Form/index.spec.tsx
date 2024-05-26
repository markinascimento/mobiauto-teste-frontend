import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Form } from ".";

jest.mock("./useFormController", () => ({
  useFormController: () => ({
    models: [{ label: "model 1", value: "model 1" }],
    yearByModel: [{ label: "2024", value: "2024" }],
    selectedYear: "",
    selectedModel: "",
    selectedBrand: "",
    disableButton: false,
    disableAutocompleteModel: false,
    handleNavigationResult: jest.fn(),
    handleChangeSelectedBrand: jest.fn(),
    handleChangeSelectedModel: jest.fn(),
    handleChangeSelectedYear: jest.fn(),
  }),
}));

const options = [
  { label: "value 1", code: "1" },
  { label: "value 2", code: "2" },
  { label: "value 3", code: "3" },
  { label: "value 4", code: "4" },
];

describe("<Form />", () => {
  test("Shold render form component  in the document", () => {
    const { getByLabelText, getByText } = render(<Form options={options} />);

    expect(getByLabelText("Marca")).toBeInTheDocument();
    expect(getByLabelText("Modelo")).toBeInTheDocument();
    expect(getByLabelText("Ano")).toBeInTheDocument();
    expect(getByText("Consultar preço")).toBeInTheDocument();
  });
});
