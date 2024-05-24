"use client";

// -> ReactJS
import { ReactNode, createContext, useCallback, useState } from "react";

// -> Types
import { ISearchPriceContextProps, IModelsProps } from "./interfaces";
import { BrandDTO } from "@/dtos/BrandDTO";

export const SearchPriceContext = createContext({} as ISearchPriceContextProps);

export function SearchPriceProvider({ children }: { children: ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const [models, setModels] = useState<IModelsProps[]>([]);

  return (
    <SearchPriceContext.Provider 
      value={{
        models,
        selectedBrand,
        setModels,
        setSelectedBrand
      }}
    >
      {children}
    </SearchPriceContext.Provider>
  );
}
