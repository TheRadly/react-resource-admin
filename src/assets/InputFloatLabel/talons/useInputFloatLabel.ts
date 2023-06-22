import { useCallback } from "react";

interface UseInputFloatLabel {
  isFloat?: boolean;
  onChange: any;
}

const useInputFloatLabel = ({ onChange, isFloat }: UseInputFloatLabel) => {
  const handleChangeInputText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isFloat && /^[0-9]*(\.|,)?[0-9]*$/g.test(e.target.value)) {
        onChange(e.target.value);
      } else if (!isFloat) {
        onChange(e.target.value);
      }
    },
    [isFloat, onChange]
  );

  return { handleChangeInputText };
};

export default useInputFloatLabel;
