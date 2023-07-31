import TextAreaInputWrapper from "./styled/textAreaInputWrapper";
import { InputTextarea } from "primereact/inputtextarea";
import useTextAreaInput from "./talons/useTextAreaInput";

interface InputFloatLabelProps {
  value: any;
  onChange: any;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
}

const TextAreaInput = ({
  label,
  value,
  disabled,
  onChange,
  fullWidth,
}: InputFloatLabelProps) => {
  const { handleChangeTextAreaInput } = useTextAreaInput({ onChange });

  return (
    <TextAreaInputWrapper fullWidth={fullWidth}>
      {label && <label htmlFor={label}>{label}</label>}
      <InputTextarea
        autoResize
        disabled={disabled}
        value={value}
        onChange={handleChangeTextAreaInput}
        cols={10}
      />
    </TextAreaInputWrapper>
  );
};

export default TextAreaInput;
