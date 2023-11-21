import { SelectType } from "../../types/InputEventTypes";
interface MultiSelectInputProps {
    label?: string;
    options: SelectType[];
    currentOption?: SelectType[];
    onChange: any;
    disabled?: boolean;
    fullWidth?: boolean;
    error?: string;
}
declare const MultiSelectInput: ({ label, options, currentOption, onChange, disabled, fullWidth, error, }: MultiSelectInputProps) => import("react/jsx-runtime").JSX.Element;
export default MultiSelectInput;
