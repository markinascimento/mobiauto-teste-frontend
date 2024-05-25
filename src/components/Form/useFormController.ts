// -> ReactJS
import { useCallback, useState } from "react";

// -> NextJS
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const {
    selectedBrand,
    selectedModel,
    selectedYear,
    setSelectedBrand,
    setSelectedModel,
    setSelectedYear,
  } = useSearchPrice();

  const [models, setModels] = useState<IProps[]>([]);
  const [yearByModel, setYearByModel] = useState<IProps[]>([]);

  const handleChangeSelectedBrand = useCallback(
    async (brand: string) => {
      setSelectedBrand(brand);
      setModels([]);
      setYearByModel([]);
      setSelectedModel("");
      setSelectedYear("");

      if (brand) {
        const modelsResult = await BrandServices.getAllModels(brand);
        setModels(modelsResult);
      }
    },
    [
      setSelectedBrand,
      setModels,
      setYearByModel,
      setSelectedModel,
      setSelectedYear,
    ]
  );

  const handleChangeSelectedModel = useCallback(
    async (model: string) => {
      setSelectedModel(model);

      if (model) {
        const yearsResult = await BrandServices.getAllYears(
          selectedBrand,
          model
        );
        setYearByModel(yearsResult);
      }
    },
    [setSelectedModel, selectedModel, selectedBrand]
  );

  const handleChangeSelectedYear = useCallback(
    (year: string) => {
      setSelectedYear(year);
    },
    [setSelectedYear]
  );

  const handleNavigationResult = useCallback(() => {
    return router.push("/result", { scroll: false });
  }, []);

  const disableAutocompleteModel = !selectedBrand || !models;
  const disableButton = !selectedBrand || !selectedModel || !selectedYear;

  return {
    models,
    yearByModel,
    selectedYear,
    selectedBrand,
    disableButton,
    selectedModel,
    disableAutocompleteModel,
    handleNavigationResult,
    handleChangeSelectedBrand,
    handleChangeSelectedModel,
    handleChangeSelectedYear,
  };
}
