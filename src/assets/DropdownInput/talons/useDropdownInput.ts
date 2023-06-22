import { DropdownChangeEvent } from "primereact/dropdown";
import { useCallback, useState } from "react";

interface UseDropdownInputProps {
  onChange: (arg: string) => void;
}

const useDropdownInput = ({ onChange }: UseDropdownInputProps) => {
  const [selectedDropdown, setSelectedDropdown] = useState<string | null>(null);

  const handleChangeValue = useCallback(
    ({ value }: DropdownChangeEvent) => {
      setSelectedDropdown(value);
      onChange(value.code);
    },
    [setSelectedDropdown, onChange]
  );

  return { selectedDropdown, handleChangeValue };
};

export default useDropdownInput;
