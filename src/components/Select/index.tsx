"use client";

// -> UI lib
import { MenuItem } from "@mui/material";

// -> Styles
import { MU_Label, MU_Select, MU_SelecteContainer } from "./styles";

// -> Types
interface ISelectProps {
  label: string;
  value: string;
  isDisabled?: boolean;
  options: Array<{ label: string; code: string }>;
  onChangeValue(value: string): void;
}

export function Select({
  label,
  value,
  options,
  isDisabled,
  onChangeValue,
}: ISelectProps) {
  return (
    <MU_SelecteContainer>
      <MU_Label id={label}>{label}</MU_Label>
      <MU_Select
        id="demo-simple-select"
        disabled={isDisabled}
        labelId={label}
        value={value}
        label={label}
        onChange={({ target: { value } }) => {
          if (value) {
            return onChangeValue(String(value));
          }
          onChangeValue("");
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.code} value={option.code}>
            {option.label}
          </MenuItem>
        ))}
      </MU_Select>
    </MU_SelecteContainer>
  );
}
