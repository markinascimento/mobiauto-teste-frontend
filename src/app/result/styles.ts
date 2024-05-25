import { styled } from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  gap: 1rem;
  width: 100vw;
  height: 100vh;

  > h2 {
    color: #121212;
    font-weight: 500;
  }
`;

export const BoxResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 1rem;
  border-radius: 1rem;
  background-color: #cdf2ee;

  > h1 {
    color: #121212;
    font-size: 1.5rem;
  }

  > small {
    color: #9394a1;
  }
`;

export const Amount = styled.span`
  background-color: #00a38c;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  color: white;
  font-size: 1.5rem;
`;
