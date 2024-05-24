import { BrandDTO } from "@/dtos/BrandDTO";

export interface IModelsProps {
  label: string;
  code: string;
}

export interface ISearchPriceContextProps {
  models: IModelsProps[];
  selectedBrand: string;
  setModels(brands: IModelsProps[]): void;
  setSelectedBrand(value: string): void;
}