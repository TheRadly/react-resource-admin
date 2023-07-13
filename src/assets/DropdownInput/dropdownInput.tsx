import { Dropdown } from "primereact/dropdown";
import DropdownInputWrapper from "./styled/dropdownInputWrapper";
import useDropdownInput from "./talons/useDropdownInput";
import type { SelectType } from "../../types/InputEventTypes";

interface DropdownInputProps {
  label?: string;
  placeholder?: string;
  onChange: (arg: string) => void;
  options: SelectType[];
  currentOption?: SelectType;
  fullWidth?: boolean;
  disabled?: boolean;
}

const DropdownInput = ({
  label,
  onChange,
  options,
  currentOption,
  fullWidth,
  disabled,
  placeholder,
}: DropdownInputProps) => {
  const { selectedDropdown, handleChangeValue } = useDropdownInput({
    onChange,
  });

  return (
    <DropdownInputWrapper fullWidth={fullWidth}>
      {label && <label htmlFor={label}>{label}</label>}
      <Dropdown
        id={label}
        disabled={disabled}
        value={selectedDropdown || currentOption}
        onChange={handleChangeValue}
        optionLabel="name"
        options={options}
        placeholder={placeholder}
      />
    </DropdownInputWrapper>
  );
};

export default DropdownInput;
