import { ChipsChangeEvent } from "primereact/chips";
import { useCallback, useEffect, useState } from "react";

interface UseInputArrayProps {
  values: string[];
  onChange: (arg: string[]) => void;
}

const useInputArray = ({ values, onChange }: UseInputArrayProps) => {
  const [chipsValues, setChipsValues] = useState<string[]>([]);

  const handleChangeChipsValues = useCallback(
    ({ value }: ChipsChangeEvent) => {
      setChipsValues(value as string[]);
      onChange(value as string[]);
    },
    [onChange, setChipsValues]
  );

  useEffect(() => {
    if (values && values.length >= 1) {
      setChipsValues(values);
    }
  }, [values, setChipsValues]);

  return { chipsValues, handleChangeChipsValues };
};

export default useInputArray;
