"use client";

// -> Controller
import { useResultController } from "./useResultController";

// -> Styles
import { Amount, BoxResult, ResultContainer } from "./styles";

export default function Result() {
  const { isLoading, checkValueResult } = useResultController();

  return (
    <ResultContainer>
      {isLoading && <span> carregando... </span>}

      {!isLoading && checkValueResult !== undefined && (
        <>
          <h2> Resultado </h2>

          <BoxResult>
            <h1> Tabela fipe: Preço {checkValueResult?.AnoModelo} </h1>

            <Amount>{checkValueResult?.Valor ?? "R$ 0,00"}</Amount>

            <small> Este é o preço de compra do veículo </small>
          </BoxResult>
        </>
      )}
    </ResultContainer>
  );
}
