interface InputFloatLabelProps {
    value: any;
    onChange: any;
    isNumber?: boolean;
    disabled?: boolean;
    withoutPlaceholder?: boolean;
    isFloat?: boolean;
    fullWidth?: boolean;
    label?: string;
    placeholder?: string;
    error?: string;
}
declare const InputFloatLabel: ({ label, placeholder, value, onChange, isNumber, isFloat, disabled, withoutPlaceholder, fullWidth, error, }: InputFloatLabelProps) => import("react/jsx-runtime").JSX.Element;
export default InputFloatLabel;
