import React from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import useInputMultiField from "./talons/useInputMultiField";
import InputMultiFieldWrapper from "./styled/inputMultiFieldWrapper";

interface InputMultiFieldProps {
  disabled?: boolean;
  values: any[];
  onChange: (arg: object) => void;
  fullWidth?: boolean;
}

const InputMultiField = ({
  disabled,
  values,
  onChange,
  fullWidth,
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
    </InputMultiFieldWrapper>
  );
};

export default InputMultiField;
