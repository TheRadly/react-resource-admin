import TextAreaInputWrapper from "./styled/textAreaInputWrapper";
import { InputTextarea } from "primereact/inputtextarea";
import useTextAreaInput from "./talons/useTextAreaInput";
import ErrorMessage from "../UniversalInput/styled/errorMessage";

interface InputFloatLabelProps {
  value: any;
  onChange: any;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  error?: string;
}

const TextAreaInput = ({
  label,
  value,
  disabled,
  onChange,
  fullWidth,
  error,
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
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </TextAreaInputWrapper>
  );
};

export default TextAreaInput;
