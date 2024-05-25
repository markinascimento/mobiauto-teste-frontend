import { FormControl, InputLabel, Select } from "@mui/material";
import { styled } from "styled-components";

export const MU_SelecteContainer = styled(FormControl)`
  width: 100%;
  max-width: 430px;
  cursor: not-allowed !important;
`;

export const MU_Label = styled(InputLabel)`
  color: #aeabab;
`;

export const MU_Select = styled(Select)`
  width: 100%;
  border-radius: 0.25rem;

  &.Mui-disabled {
    opacity: 0.4;
  }
`;
