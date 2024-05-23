// -> ReactJS
import { useContext } from "react";

// -> Context API
import { SearchPriceContext } from "../context/SearchPriceContext";

export function useSearchPrice() {
  return useContext(SearchPriceContext);
}
