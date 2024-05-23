"use client";
import AutoComplete from "../AutoComplete";
// -> Styles
import { FormContainer } from "./styles";

// -> Types
interface IFormProps {
  options: Array<{ label: string; code: string }>;
}

export function Form({ options }: IFormProps) {
  return (
    <FormContainer>
      <AutoComplete label="Marca" options={options} />
    </FormContainer>
  );
}
