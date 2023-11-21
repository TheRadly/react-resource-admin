import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import useInputMultiField from "./talons/useInputMultiField";
import InputMultiFieldWrapper from "./styled/inputMultiFieldWrapper";
import ErrorMessage from "../UniversalInput/styled/errorMessage";

interface InputMultiFieldProps {
  disabled?: boolean;
  values: any[];
  onChange: (arg: object) => void;
  fullWidth?: boolean;
  error?: string;
}

const InputMultiField = ({
  disabled,
  values,
  onChange,
  fullWidth,
  error,
}: InputMultiFieldProps) => {
  const { handleChangeInput } = useInputMultiField({
    onChange,
    values,
  });

  return (
    <InputMultiFieldWrapper fullWidth={fullWidth} className="p-inputgroup">
      {values &&
        values.length &&
        values.map(({ field, value }) => (
          <>
            <span className="p-inputgroup-addon">{field}</span>
            {typeof value === "number" ? (
              <InputNumber
                value={value}
                disabled={disabled}
                onChange={(e) => handleChangeInput(field, e.value || 0)}
              />
            ) : (
              <InputText
                value={value}
                disabled={disabled}
                onChange={(e) => handleChangeInput(field, e.target.value || "")}
              />
            )}
          </>
        ))}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputMultiFieldWrapper>
  );
};

export default InputMultiField;
