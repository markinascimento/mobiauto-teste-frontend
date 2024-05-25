import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinerContainer = styled.div`
  border: 10px solid #fff;
  border-top: 10px solid #6609c8;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  animation: ${spin} 1s linear infinite;
`;
