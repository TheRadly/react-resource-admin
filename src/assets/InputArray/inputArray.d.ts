interface InputArrayProps {
    values: string[];
    label?: string;
    onChange: (arg: string[]) => void;
    fullWidth?: boolean;
    disabled?: boolean;
    error?: string;
}
declare const InputArray: ({ fullWidth, values, onChange, disabled, label, error, }: InputArrayProps) => import("react/jsx-runtime").JSX.Element;
export default InputArray;
