// -> ReactJS
import { useEffect, useState } from "react";

// -> NextJS
import { useRouter } from "next/navigation";

// -> Custom hooks
import { useSearchPrice } from "@/hooks/useSearchPrice";

// -> API
import BrandServices from "@/services/BrandServices";

// -> Types
import { ResultDTO } from "@/dtos/ResultDTO";

export function useResultController() {
  const router = useRouter();

  const { selectedBrand, selectedModel, selectedYear, setSelectedBrand } =
    useSearchPrice();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkValueResult, setCheckValueResult] = useState<
    ResultDTO | undefined
  >(undefined);

  useEffect(() => {
    if (!selectedBrand || !selectedModel || !selectedYear) {
      return router.back();
    }

    (async () => {
      try {
        setIsLoading(true);
        const result = await BrandServices.checkValue(
          selectedBrand,
          selectedModel,
          selectedYear
        );
        setCheckValueResult(result);
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    checkValueResult,
  };
}
