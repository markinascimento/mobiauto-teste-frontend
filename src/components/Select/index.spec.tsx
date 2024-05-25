import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Select } from ".";

const options = [
  { label: "value 1", code: "1" },
  { label: "value 2", code: "2" },
  { label: "value 3", code: "3" },
  { label: "value 4", code: "4" },
  { label: "value 5", code: "5" },
];

describe("<Select />", () => {
  test("Should render select in the document", () => {
    const { getByLabelText } = render(
      <Select
        label="Testing"
        onChangeValue={jest.fn()}
        options={options}
        value=""
      />
    );

    expect(getByLabelText("Testing")).toBeInTheDocument();
  });
});
