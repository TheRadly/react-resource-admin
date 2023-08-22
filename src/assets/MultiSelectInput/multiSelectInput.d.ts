import { SelectType } from "../../types/InputEventTypes";
interface MultiSelectInputProps {
    label?: string;
    options: SelectType[];
    currentOption?: SelectType[];
    onChange: any;
    disabled?: boolean;
    fullWidth?: boolean;
}
declare const MultiSelectInput: ({ label, options, currentOption, onChange, disabled, fullWidth, }: MultiSelectInputProps) => import("react/jsx-runtime").JSX.Element;
export default MultiSelectInput;
