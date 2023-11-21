import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import SwitchInputWrapper from "./styled/switchInputWrapper";
import SwitchInnerWrapper from "./styled/switchInnerWrapper";
import ErrorMessage from "../UniversalInput/styled/errorMessage";

interface SwitchInputProps {
  checked: boolean;
  onChange: (arg: boolean) => void;
  disabled?: boolean;
  withLabel?: boolean;
  label?: string;
  activeText?: string;
  fullWidth?: boolean;
  error?: string;
}

const SwitchInput = ({
  checked,
  onChange,
  disabled,
  withLabel = true,
  label,
  activeText,
  fullWidth = false,
  error,
}: SwitchInputProps) => (
  <SwitchInputWrapper fullWidth={fullWidth}>
    {withLabel && <label htmlFor={label}>{label}</label>}
    <SwitchInnerWrapper>
      <InputSwitch
        id={label}
        checked={checked}
        onChange={(e: InputSwitchChangeEvent) => onChange(e.value as any)}
        disabled={disabled}
      />
      {activeText && <span>{activeText}</span>}
    </SwitchInnerWrapper>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </SwitchInputWrapper>
);

export default SwitchInput;
