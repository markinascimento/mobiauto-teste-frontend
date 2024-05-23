import { TextField } from "@mui/material";
import { AutoCompleteContainer } from "./styles";

// -> Types
interface IAutoCompleteProps {
  label: string;
  options: Array<{ label: string; code: string }>;
}

export default function AutoComplete({ label, options }: IAutoCompleteProps) {
  return (
    <AutoCompleteContainer
      disablePortal
      id="combo-box-demo"
      options={options}
      onChange={(event, value: any) => {
        alert(`A marca selecionada foi a ${value.label}`);
        console.log({ event, value });
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
