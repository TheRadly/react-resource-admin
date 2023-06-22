import React from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import SwitchInputWrapper from "./styled/switchInputWrapper";

interface SwitchInputProps {
  checked: boolean;
  onChange: (arg: boolean) => void;
  disabled?: boolean;
  withLabel?: boolean;
  label?: string;
}

const SwitchInput = ({
  checked,
  onChange,
  disabled,
  withLabel = true,
  label,
}: SwitchInputProps) => (
  <SwitchInputWrapper>
    <InputSwitch
      id={label}
      checked={checked}
      onChange={(e: InputSwitchChangeEvent) => onChange(e.value as any)}
      disabled={disabled}
    />
    {withLabel && <label htmlFor={label}>{label}</label>}
  </SwitchInputWrapper>
);

export default SwitchInput;
