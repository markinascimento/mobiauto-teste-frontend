// -> ReactJS
import { useCallback, useState } from "react";

// -> Custom hooks
import { useSearchPrice } from "@/hooks/useSearchPrice";

// -> API
import BrandServices from "@/services/BrandServices";

// -> Types
interface IProps {
  label: string;
  code: string;
}

export function useFormController() {
  const { 
    selectedBrand,
    setSelectedBrand,
    setSelectedModel,
    setSelectedYear,
  } = useSearchPrice();

  const [models, setModels] = useState<IProps[]>([]);
  const [yearByModel, setYearByModel] = useState<IProps[]>([]);

  const handleChangeSelectedBrand = useCallback(async (brand: string) => {
    setSelectedBrand(brand)

    if(brand) {
      const modelsResult = await BrandServices.getAllModels(brand)
      setModels(modelsResult)
    }
  }, [setSelectedBrand, setModels]);
  
  const handleChangeSelectedModel = useCallback(async (model: string) => {
    setSelectedModel(model)

    if(model) {
      const yearsResult = await BrandServices.getAllYears(selectedBrand, model)
      setYearByModel(yearsResult) 
    }
  }, [setSelectedModel, selectedBrand]);

  const handleChangeSelectedYear = useCallback((year: string) => {
    setSelectedYear(year)
  }, [setSelectedYear]);

  const disableAutocompleteModel = !selectedBrand && !!models;

  return {
    models,
    yearByModel,
    disableAutocompleteModel,
    handleChangeSelectedBrand,
    handleChangeSelectedModel,
    handleChangeSelectedYear,
  }
}
