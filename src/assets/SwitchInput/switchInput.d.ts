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
declare const SwitchInput: ({ checked, onChange, disabled, withLabel, label, activeText, fullWidth, error, }: SwitchInputProps) => import("react/jsx-runtime").JSX.Element;
export default SwitchInput;
