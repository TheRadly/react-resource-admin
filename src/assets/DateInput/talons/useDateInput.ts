import { CalendarChangeEvent } from "primereact/calendar";
import { useCallback } from "react";

interface UseDateInputProps {
  onChange: (arg: any) => void;
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
