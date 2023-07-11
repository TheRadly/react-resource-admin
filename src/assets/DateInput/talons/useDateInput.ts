import { CalendarChangeEvent } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { useCallback } from "react";

interface UseDateInputProps {
  onChange: (val: Nullable<string | Date | Date[]>) => void;
}

const useDateInput = ({ onChange }: UseDateInputProps) => {
  const handleChangeDateInput = useCallback(
    (e: CalendarChangeEvent) => {
      onChange(e.value);
    },
    [onChange]
  );

  return { handleChangeDateInput };
};

export default useDateInput;
