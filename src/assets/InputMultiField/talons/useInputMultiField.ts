import { useCallback, useEffect, useState } from "react";

interface UseInputMultiFieldProps {
  onChange: (arg: any) => void;
  values?: any[];
}

const useInputMultiField = ({ onChange, values }: UseInputMultiFieldProps) => {
  const [isInitializeContainer, setInitializeContainer] =
    useState<boolean>(false);
  const [valuesContainer, setValuesContainer] = useState<object>();

  const handleChangeInput = useCallback(
    (field: string, value: string | number | null) => {
      setValuesContainer((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [setValuesContainer]
  );

  useEffect(() => {
    if (values?.length && !isInitializeContainer) {
      values.forEach(({ field, value }) =>
        setValuesContainer((prev) => ({
          ...prev,
          [field]: value,
        }))
      );

      setInitializeContainer(true);
    }
  }, [values, isInitializeContainer]);

  useEffect(() => {
    if (valuesContainer) {
      onChange(valuesContainer);
    }
  }, [onChange, valuesContainer]);

  return { handleChangeInput };
};

export default useInputMultiField;
