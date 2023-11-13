import { DropdownChangeEvent } from "primereact/dropdown";
import { useCallback, useState } from "react";

interface UseDropdownInputProps {
  onChange: (arg: string) => void;
  returnFullObjectEvent?: boolean;
}

const useDropdownInput = ({
  onChange,
  returnFullObjectEvent,
}: UseDropdownInputProps) => {
  const [selectedDropdown, setSelectedDropdown] = useState<string | null>(null);

  const handleChangeValue = useCallback(
    ({ value }: DropdownChangeEvent) => {
      setSelectedDropdown(value);
      onChange(returnFullObjectEvent ? value : value.code);
    },
    [setSelectedDropdown, onChange, returnFullObjectEvent]
  );

  return { selectedDropdown, handleChangeValue };
};

export default useDropdownInput;
