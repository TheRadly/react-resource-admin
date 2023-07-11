import { InputText } from "primereact/inputtext";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import InputFloatLabelWrapper from "./styled/inputFloatLabelWrapper";
import useInputFloatLabel from "./talons/useInputFloatLabel";

interface InputFloatLabelProps {
  value: any;
  onChange: any;
  isNumber?: boolean;
  disabled?: boolean;
  withoutPlaceholder?: boolean;
  isFloat?: boolean;
  fullWidth?: boolean;
  label: string;
  placeholder?: string;
}

const InputFloatLabel = ({
  label,
  placeholder,
  value,
  onChange,
  isNumber,
  isFloat,
  disabled,
  withoutPlaceholder,
  fullWidth,
}: InputFloatLabelProps) => {
  const { handleChangeInputText } = useInputFloatLabel({ isFloat, onChange });

  return (
    <InputFloatLabelWrapper fullWidth={fullWidth}>
      <label htmlFor={label}>{label}</label>
      {isNumber ? (
        <InputNumber
          placeholder={!withoutPlaceholder ? placeholder : undefined}
          defaultValue={0}
          showButtons
          disabled={disabled}
          id={label}
          min={0}
          value={Number(value) || 0}
          onChange={(e: InputNumberChangeEvent) => onChange(e.value || 0)}
        />
      ) : (
        <InputText
          type="text"
          placeholder={!withoutPlaceholder ? placeholder : undefined}
          disabled={disabled}
          id={label}
          value={value}
          onChange={handleChangeInputText}
        />
      )}
    </InputFloatLabelWrapper>
  );
};

export default InputFloatLabel;
