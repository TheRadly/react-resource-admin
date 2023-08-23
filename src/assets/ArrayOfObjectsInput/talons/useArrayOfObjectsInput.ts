import { useCallback, useMemo, useState } from "react";

interface UseArrayOfObjectsInputProps {
  onChange: (arg: any) => void;
  initialValue?: any;
  itemTitledBy?: string;
  values: any[];
}

const AMOUNT = "amount";

const useArrayOfObjectsInput = ({
  initialValue,
  values,
  itemTitledBy,
  onChange,
}: UseArrayOfObjectsInputProps) => {
  const [objectOfArray, setObjectOfArray] = useState<any>(initialValue);

  const arrayOfItems = useMemo(
    () =>
      itemTitledBy
        ? values.filter((item) =>
            Object.keys(item).some((key) => key === itemTitledBy)
          )
        : values,
    [itemTitledBy, values]
  );

  const arrayOfFields = useMemo(
    () =>
      Object.keys(objectOfArray).map((key) => {
        const defaultData = {
          field: key,
          value: objectOfArray[key],
        };

        if (key === AMOUNT) {
          return {
            ...defaultData,
            value: objectOfArray[key].toString(),
            isFloat: true,
          };
        }

        return defaultData;
      }),
    [objectOfArray]
  ) as any;

  const handleChangeFieldValue = useCallback(
    (field: string, data: any) =>
      setObjectOfArray({ ...objectOfArray, [field]: data }),
    [objectOfArray]
  );

  const handleSetFieldsData = useCallback(() => {
    const mutatedArr = [...values, objectOfArray];
    onChange(mutatedArr);

    setObjectOfArray(initialValue);
  }, [objectOfArray, onChange, values, initialValue]);

  return {
    arrayOfFields,
    arrayOfItems,
    handleChangeFieldValue,
    handleSetFieldsData,
  };
};

export default useArrayOfObjectsInput;
