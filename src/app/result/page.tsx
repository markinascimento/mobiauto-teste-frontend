'use client'
// -> NextJS
import { redirect } from "next/navigation"

// -> Custom hooks
import { useSearchPrice } from "@/hooks/useSearchPrice"

export default function Result() {
  const {
    selectedBrand, selectedModel, selectedYear
  } = useSearchPrice()

  if(!selectedBrand || !selectedModel || !selectedYear) {
    return redirect('/')
  }

  return (
    <div>
      <span> página de resultado </span>
    </div>
  )
}
