// -> UI lib
import { TextField } from "@mui/material";

// -> Styles
import { AutoCompleteContainer } from "./styles";

// -> Types
interface IAutoCompleteProps {
  label: string;
  isDisabled?: boolean;
  options: Array<{ label: string; code: string }>;
  onChangeValue(value: string): void;
}

export default function AutoComplete({ label, isDisabled, options, onChangeValue }: IAutoCompleteProps) {
  return (
    <AutoCompleteContainer
      disablePortal
      disabled={isDisabled}
      id="combo-box-demo"
      options={options}
      onChange={(event, value: any) => {
        if(value) {
          return onChangeValue(value.code)
        }

        onChangeValue('')
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
