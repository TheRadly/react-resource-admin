interface InputArrayProps {
    values: string[];
    label?: string;
    onChange: (arg: string[]) => void;
    fullWidth?: boolean;
    disabled?: boolean;
}
declare const InputArray: ({ fullWidth, values, onChange, disabled, label, }: InputArrayProps) => import("react/jsx-runtime").JSX.Element;
export default InputArray;
