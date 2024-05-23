"use client";

import { ReactNode, createContext } from "react";

export const SearchPriceContext = createContext({});

export function SearchPriceProvider({ children }: { children: ReactNode }) {
  console.log({ oi: "aqui" });

  return (
    <SearchPriceContext.Provider value={{}}>
      {children}
    </SearchPriceContext.Provider>
  );
}
