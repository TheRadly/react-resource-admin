import { TYPENAME } from "../../../staticTexts";
import { useMemo } from "react";

interface UseShowFieldProps {
  value: any;
  emptyLabel: string;
  arrayTitle: string;
  isArray?: boolean;
}

const useShowField = ({
  value,
  isArray,
  arrayTitle,
  emptyLabel,
}: UseShowFieldProps) => {
  const checkOnObject = useMemo(
    () =>
      typeof value === "object"
        ? Object.keys(value)
            .filter((key) => key !== TYPENAME)
            .map((key) => ({
              field: key,
              value: value[key],
            }))
        : value,
    [value]
  );

  const correctValue = useMemo(
    () => (Array.isArray(value) && !value.length ? emptyLabel : checkOnObject),
    [emptyLabel, value, checkOnObject]
  );

  const parsedArrayValues =
    isArray && value.length
      ? value.map((item: any) => {
          if (item.path) {
            return {
              title: arrayTitle,
              field: item.path,
              value: item.fields,
            };
          }

          return item;
        })
      : emptyLabel;

  return { correctValue, parsedArrayValues };
};

export default useShowField;
