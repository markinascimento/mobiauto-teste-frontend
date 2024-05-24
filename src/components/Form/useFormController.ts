// -> ReactJS
import { useCallback } from "react";

// -> Custom hooks
import { useSearchPrice } from "@/hooks/useSearchPrice";

// -> API
import BrandServices from "@/services/BrandServices";

export function useFormController() {
  const { 
    models,
    selectedBrand,
    setModels,
    setSelectedBrand,
  } = useSearchPrice();

  const handleChangeSelectedBrand = useCallback(async (brand: string) => {
    setSelectedBrand(brand)

    if(brand) {
      const brandsResult = await BrandServices.getAllModels(brand)
      setModels(brandsResult)
    }
  }, [setSelectedBrand, setModels]);
  
  const handleChangeSelectedModel = useCallback(async (model: string) => {
    console.log({ model })
  }, []);

  const disableAutocompleteModel = !selectedBrand && !!models;

  return {
    models,
    disableAutocompleteModel,
    handleChangeSelectedBrand,
    handleChangeSelectedModel,
  }
}
