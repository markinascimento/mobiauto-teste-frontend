"use client";

// -> ReactJS
import { ReactNode, createContext, useState } from "react";

// -> Types
import { ISearchPriceContextProps } from "./interfaces";

export const SearchPriceContext = createContext({} as ISearchPriceContextProps);

export function SearchPriceProvider({ children }: { children: ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  
  return (
    <SearchPriceContext.Provider 
      value={{
        selectedBrand,
        selectedModel,
        selectedYear, 
        setSelectedBrand,
        setSelectedModel,
        setSelectedYear,
      }}
    >
      {children}
    </SearchPriceContext.Provider>
  );
}
