import { Chips } from "primereact/chips";
import useInputArray from "./talons/useInputArray";
import InputArrayWrapper from "./styled/inputArrayWrapper";
import ErrorMessage from "../UniversalInput/styled/errorMessage";

interface InputArrayProps {
  values: string[];
  label?: string;
  onChange: (arg: string[]) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  error?: string;
}

const InputArray = ({
  fullWidth,
  values,
  onChange,
  disabled,
  label,
  error,
}: InputArrayProps) => {
  const { chipsValues, handleChangeChipsValues } = useInputArray({
    values,
    onChange,
  });

  return (
    <InputArrayWrapper fullWidth={fullWidth}>
      {label && <label htmlFor={label}>{label}</label>}
      <Chips
        disabled={disabled}
        id={label}
        value={chipsValues}
        onChange={handleChangeChipsValues}
        separator=","
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputArrayWrapper>
  );
};

export default InputArray;
