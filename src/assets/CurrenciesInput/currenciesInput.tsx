import { memo } from "react";
import UniversalInput from "../UniversalInput";
import ErrorMessage from "../UniversalInput/styled/errorMessage";
import {
  CurrenciesInputContainer,
  CurrenciesInputWrapper,
} from "./styled/currenciesInputWrapper";
import useCurrenciesInput from "./talons/useCurrenciesInput";

interface CurrenciesInputProps {
  label?: string;
  values: { currency: string; amount: string | number }[];
  fullWidth?: boolean;
  initialValues: string[];
  onChange: (arg: any) => void;
  emptyMessage?: string;
  disabled?: boolean;
  error?: string;
}

const CurrenciesInput = ({
  label,
  values,
  fullWidth,
  initialValues,
  onChange,
  emptyMessage,
  disabled,
  error,
}: CurrenciesInputProps) => {
  const { correctValues, handleChangeCurrencies } = useCurrenciesInput({
    initialValues,
    values,
    onChange,
  });

  return (
    <CurrenciesInputWrapper fullWidth={fullWidth}>
      {label && <label>{label}</label>}
      <CurrenciesInputContainer>
        {correctValues
          ? correctValues.map((correctValue) => (
              <UniversalInput
                isDisabled={disabled}
                isFloat
                placeholder={correctValue.placeholder}
                withoutUpperCasing
                label={correctValue.currency}
                value={correctValue.amount}
                onChange={(amount) =>
                  handleChangeCurrencies(correctValue.currency, amount)
                }
              />
            ))
          : emptyMessage || null}
      </CurrenciesInputContainer>
      {error ? (
        <>
          {Array.isArray(error) ? (
            error.map((err) => <ErrorMessage>{err?.amount}</ErrorMessage>)
          ) : (
            <ErrorMessage>{error}</ErrorMessage>
          )}
        </>
      ) : null}
    </CurrenciesInputWrapper>
  );
};

export default memo(CurrenciesInput);
