import { MultiSelect } from "primereact/multiselect";
import MultiSelectInputWrapper from "./styled/multiSelectInputWrapper";
import useMultiSelectInput from "./talons/useMultiSelectInput";
import { SelectType } from "../../types/InputEventTypes";
import ErrorMessage from "../UniversalInput/styled/errorMessage";

interface MultiSelectInputProps {
  label?: string;
  options: SelectType[];
  currentOption?: SelectType[];
  onChange: any;
  disabled?: boolean;
  fullWidth?: boolean;
  error?: string;
}

const MultiSelectInput = ({
  label,
  options,
  currentOption,
  onChange,
  disabled,
  fullWidth,
  error,
}: MultiSelectInputProps) => {
  const { handleChangeMultiSelect, selectedOption } = useMultiSelectInput({
    onChange,
  });

  return (
    <MultiSelectInputWrapper fullWidth={fullWidth}>
      {label && <label htmlFor={label}>{label}</label>}
      <MultiSelect
        id={label}
        options={options}
        disabled={disabled}
        value={selectedOption || currentOption}
        onChange={handleChangeMultiSelect}
        optionLabel="name"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </MultiSelectInputWrapper>
  );
};

export default MultiSelectInput;
