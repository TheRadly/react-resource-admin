import { useCallback, useEffect, useMemo, useState } from "react";

interface UseCurrenciesInputProps {
  initialValues: string[];
  values: { currency: string; amount: string | number }[];
  onChange: (arg: any) => void;
}

const useCurrenciesInput = ({
  initialValues,
  values,
  onChange,
}: UseCurrenciesInputProps) => {
  const [firstLoad, setFirstLoad] = useState<boolean>(false);

  const correctValues = useMemo(
    () =>
      initialValues?.reduce(
        (
          acc: { currency: string; amount: string; placeholder: string }[],
          value: string
        ) => {
          const currentValue = values?.find((val) => val.currency === value);

          acc.push({
            currency: value,
            amount: currentValue
              ? typeof currentValue.amount === "number"
                ? currentValue.amount.toString()
                : currentValue.amount
              : "",
            placeholder: "0.00",
          });

          return acc;
        },
        []
      ),
    [initialValues, values]
  );

  const handleChangeCurrencies = useCallback(
    (currency: string, amount: string) => {
      const mutatedArr = correctValues.map((value) => {
        if (value.currency === currency) {
          return {
            ...value,
            amount,
          };
        }

        return value;
      });

      onChange(mutatedArr);
    },
    [correctValues, onChange]
  );

  useEffect(() => {
    if (!firstLoad) {
      onChange(correctValues);
      setFirstLoad(true);
    }
  }, []);

  return { correctValues, handleChangeCurrencies };
};

export default useCurrenciesInput;
