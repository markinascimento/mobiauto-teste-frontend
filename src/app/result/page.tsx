"use client";

// -> Controller
import { useResultController } from "./useResultController";

// -> Components
import { Spinner } from "@/components/Spinner";

// -> Styles
import { Amount, BoxLoading, BoxResult, ResultContainer } from "./styles";

export default function Result() {
  const { isLoading, checkValueResult } = useResultController();

  return (
    <ResultContainer>
      {isLoading && (
        <BoxLoading>
          <Spinner />
        </BoxLoading>
      )}

      {!isLoading && checkValueResult !== undefined && (
        <>
          <h2> Resultado </h2>

          <BoxResult>
            <h1>
              Tabela fipe: Preço
              {` ${checkValueResult.Modelo} - ${checkValueResult?.AnoModelo}`}
            </h1>

            <Amount>{checkValueResult?.Valor ?? "R$ 0,00"}</Amount>

            <small> Este é o preço de compra do veículo </small>
          </BoxResult>
        </>
      )}
    </ResultContainer>
  );
}
