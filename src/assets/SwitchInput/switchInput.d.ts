interface SwitchInputProps {
    checked: boolean;
    onChange: (arg: boolean) => void;
    disabled?: boolean;
    withLabel?: boolean;
    label?: string;
    activeText?: string;
    fullWidth?: boolean;
}
declare const SwitchInput: ({ checked, onChange, disabled, withLabel, label, activeText, fullWidth, }: SwitchInputProps) => import("react/jsx-runtime").JSX.Element;
export default SwitchInput;
