import { CalendarChangeEvent } from "primereact/calendar";
import { useCallback } from "react";

interface UseDateInputProps {
  onChange: (arg: any) => void;
}

const useDateInput = ({ onChange }: UseDateInputProps) => {
  const handleChangeDateInput = useCallback(
    (e: CalendarChangeEvent) => {
      const date = e.value?.toString();
      if (date) {
        const correctDate = new Date(date).toISOString();
        onChange(correctDate);
      }
    },
    [onChange]
  );

  return { handleChangeDateInput };
};

export default useDateInput;
