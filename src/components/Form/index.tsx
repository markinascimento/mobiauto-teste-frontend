"use client";

// -> Controller
import { useFormController } from "./useFormController";

// -> Components
import { Button } from "../Button";
import { Select } from "../Select";

// -> Styles
import { FormContainer } from "./styles";

// -> Types
interface IFormProps {
  options: Array<{ label: string; code: string }>;
}

export function Form({ options }: IFormProps) {
  const {
    models,
    yearByModel,
    selectedYear,
    selectedModel,
    selectedBrand,
    disableButton,
    disableAutocompleteModel,
    handleNavigationResult,
    handleChangeSelectedBrand,
    handleChangeSelectedModel,
    handleChangeSelectedYear,
  } = useFormController();

  return (
    <FormContainer>
      <Select
        label="Marca"
        options={options}
        value={selectedBrand}
        onChangeValue={handleChangeSelectedBrand}
      />

      <Select
        label="Modelo"
        options={models}
        value={selectedModel}
        isDisabled={disableAutocompleteModel}
        onChangeValue={handleChangeSelectedModel}
      />

      {yearByModel.length > 0 && (
        <Select
          label="Ano"
          value={selectedYear}
          options={yearByModel}
          onChangeValue={handleChangeSelectedYear}
        />
      )}

      <Button
        label="Consultar preço"
        onClick={handleNavigationResult}
        disabled={disableButton}
      />
    </FormContainer>
  );
}
