export interface ISearchPriceContextProps {
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  setSelectedBrand(brand: string): void;
  setSelectedModel(model: string): void;
  setSelectedYear(year: string): void;
}