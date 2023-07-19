import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import SwitchInputWrapper from "./styled/switchInputWrapper";
import SwitchInnerWrapper from "./styled/switchInnerWrapper";

interface SwitchInputProps {
  checked: boolean;
  onChange: (arg: boolean) => void;
  disabled?: boolean;
  withLabel?: boolean;
  label?: string;
  activeText?: string;
  fullWidth?: boolean;
}

const SwitchInput = ({
  checked,
  onChange,
  disabled,
  withLabel = true,
  label,
  activeText,
  fullWidth = false,
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
  </SwitchInputWrapper>
);

export default SwitchInput;
