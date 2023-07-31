import { useCallback } from "react";

interface UseTextAreaInputProps {
  onChange: (arg: any) => void;
}

const useTextAreaInput = ({ onChange }: UseTextAreaInputProps) => {
  const handleChangeTextAreaInput = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return { handleChangeTextAreaInput };
};

export default useTextAreaInput;
