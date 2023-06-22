interface SwitchInputProps {
    checked: boolean;
    onChange: (arg: boolean) => void;
    disabled?: boolean;
    withLabel?: boolean;
    label?: string;
}
declare const SwitchInput: ({ checked, onChange, disabled, withLabel, label, }: SwitchInputProps) => import("react/jsx-runtime").JSX.Element;
export default SwitchInput;
