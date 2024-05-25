"use client";

// -> UI lib
import { ButtonProps } from "@mui/material";

// -> Styles
import { MU_Button } from "./styles";

// -> Types
interface IButtonProps extends ButtonProps {
  label: string;
}

export function Button({ label, ...props }: IButtonProps) {
  return (
    <MU_Button {...props}>
      <span> {label} </span>
    </MU_Button>
  );
}
