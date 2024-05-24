"use client";

// -> Controller
import { useFormController } from "./useFormController";

// -> Components
import AutoComplete from "../AutoComplete";

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
    disableAutocompleteModel,
    handleChangeSelectedBrand,
    handleChangeSelectedModel,
    handleChangeSelectedYear,
  } = useFormController()

  return (
    <FormContainer>
      <AutoComplete 
        label="Marca" 
        options={options} 
        onChangeValue={handleChangeSelectedBrand} 
      />

      <AutoComplete 
        label="Modelo"
        options={models} 
        isDisabled={disableAutocompleteModel} 
        onChangeValue={handleChangeSelectedModel} 
      />

      {yearByModel.length > 0 && (
        <AutoComplete 
          label="Ano"
          options={yearByModel} 
          onChangeValue={handleChangeSelectedYear} 
        />
      )}
    </FormContainer>
  );
}
