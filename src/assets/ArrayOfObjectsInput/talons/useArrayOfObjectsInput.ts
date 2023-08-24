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
  const [indexEditItem, setIndexEditItem] = useState<number | null>(null);
  const [isEditMode, setEditMode] = useState<boolean>(false);
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

  const handleRemoveItem = useCallback(
    (propIndex: number) => {
      if (values.length) {
        const newArray = values.filter(
          (_: any, index: number) => index !== propIndex
        );

        onChange(newArray);
      }
    },
    [onChange, values]
  );

  const handleEditItem = useCallback((item: any, index: number) => {
    setEditMode(true);
    setObjectOfArray(item);
    setIndexEditItem(index);
  }, []);

  const handleSetEditedFieldData = useCallback(() => {
    const newArray = values.filter((item, index) =>
      item.id ? item.id !== objectOfArray.id : index !== indexEditItem
    );

    newArray.push(objectOfArray);
    onChange(newArray);

    setEditMode(false);
    setIndexEditItem(null);
    setObjectOfArray(initialValue);
  }, [indexEditItem, objectOfArray, values, onChange, initialValue]);

  return {
    isEditMode,
    arrayOfFields,
    arrayOfItems,
    handleChangeFieldValue,
    handleSetFieldsData,
    handleSetEditedFieldData,
    handleRemoveItem,
    handleEditItem,
  };
};

export default useArrayOfObjectsInput;
