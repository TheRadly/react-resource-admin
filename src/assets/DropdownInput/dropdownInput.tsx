import { Dropdown } from "primereact/dropdown";
import DropdownInputWrapper from "./styled/dropdownInputWrapper";
import useDropdownInput from "./talons/useDropdownInput";
import type { SelectType } from "../../types/InputEventTypes";
import ErrorMessage from "../UniversalInput/styled/errorMessage";

interface DropdownInputProps {
  label?: string;
  placeholder?: string;
  onChange: (arg: string) => void;
  options: SelectType[];
  currentOption?: SelectType;
  fullWidth?: boolean;
  disabled?: boolean;
  returnFullObjectEvent?: boolean;
  withSearch?: boolean;
  error?: string;
}

const DropdownInput = ({
  label,
  onChange,
  options,
  currentOption,
  fullWidth,
  disabled,
  placeholder,
  withSearch,
  returnFullObjectEvent,
  error,
}: DropdownInputProps) => {
  const { selectedDropdown, handleChangeValue } = useDropdownInput({
    onChange,
    returnFullObjectEvent,
  });

  return (
    <DropdownInputWrapper fullWidth={fullWidth}>
      {label && <label htmlFor={label}>{label}</label>}
      <Dropdown
        id={label}
        filter={withSearch}
        disabled={disabled}
        value={selectedDropdown || currentOption}
        onChange={handleChangeValue}
        optionLabel="name"
        options={options}
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </DropdownInputWrapper>
  );
};

export default DropdownInput;
