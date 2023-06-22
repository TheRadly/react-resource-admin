import { useCallback } from "react";

interface UseSearchInputProps {
  onChange?: (arg: any) => void;
}

const useSearchInput = ({ onChange }: UseSearchInputProps) => {
  const handleKeyUp = useCallback(
    (e: any) => {
      if (e.code === "Enter" && onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  return { handleKeyUp };
};

export default useSearchInput;
