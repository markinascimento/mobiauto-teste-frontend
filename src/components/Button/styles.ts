import { Button } from "@mui/material";
import { styled } from "styled-components";

export const MU_Button = styled(Button)`
  width: 100%;
  max-width: 215px;
  min-height: 52px;
  border-radius: 0.25rem;
  background-color: #6609c8;
  color: #ffffff;
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;

  &.MuiButton-root:hover {
    background-color: #6f25bd;
  }

  &:disabled {
    background-color: #d0d0d0;
  }
`;
