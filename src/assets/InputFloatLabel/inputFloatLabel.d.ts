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
}
declare const InputFloatLabel: ({ label, placeholder, value, onChange, isNumber, isFloat, disabled, withoutPlaceholder, fullWidth, }: InputFloatLabelProps) => import("react/jsx-runtime").JSX.Element;
export default InputFloatLabel;
