interface InputFloatLabelProps {
    value: any;
    onChange: any;
    isNumber?: boolean;
    disabled?: boolean;
    withoutPlaceholder?: boolean;
    type?: string;
    isFloat?: boolean;
    fullWidth?: boolean;
    label: string;
    placeholder?: string;
}
declare const InputFloatLabel: ({ label, placeholder, value, onChange, isNumber, isFloat, disabled, withoutPlaceholder, type, fullWidth, }: InputFloatLabelProps) => import("react/jsx-runtime").JSX.Element;
export default InputFloatLabel;
