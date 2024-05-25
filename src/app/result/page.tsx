"use client";
// -> NextJS

// -> Custom hooks
import { useSearchPrice } from "@/hooks/useSearchPrice";

export default function Result() {
  const { selectedBrand, selectedModel, selectedYear } = useSearchPrice();

  console.log({ selectedBrand, selectedModel, selectedYear });

  return (
    <div>
      <span> página de resultado </span>
    </div>
  );
}
