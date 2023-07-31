import { Chips } from "primereact/chips";
import useInputArray from "./talons/useInputArray";
import InputArrayWrapper from "./styled/inputArrayWrapper";

interface InputArrayProps {
  values: string[];
  label?: string;
  onChange: (arg: string[]) => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

const InputArray = ({
  fullWidth,
  values,
  onChange,
  disabled,
  label,
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
    </InputArrayWrapper>
  );
};

export default InputArray;
