import { MultiSelect } from "primereact/multiselect";
import MultiSelectInputWrapper from "./styled/multiSelectInputWrapper";
import useMultiSelectInput from "./talons/useMultiSelectInput";
import { SelectType } from "../../types/InputEventTypes";

interface MultiSelectInputProps {
  label?: string;
  options: SelectType[];
  currentOption?: SelectType[];
  onChange: any;
  disabled?: boolean;
  fullWidth?: boolean;
}

const MultiSelectInput = ({
  label,
  options,
  currentOption,
  onChange,
  disabled,
  fullWidth,
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
    </MultiSelectInputWrapper>
  );
};

export default MultiSelectInput;
