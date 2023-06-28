import { Dropdown } from "primereact/dropdown";
import DropdownInputWrapper from "./styled/dropdownInputWrapper";
import useDropdownInput from "./talons/useDropdownInput";
import type { SelectType } from "../../types/InputEventTypes";

interface DropdownInputProps {
  placeholder?: string;
  onChange: (arg: string) => void;
  options: SelectType[];
  currentOption?: SelectType;
  fullWidth?: boolean;
  disabled?: boolean;
}

const DropdownInput = ({
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
      <Dropdown
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
