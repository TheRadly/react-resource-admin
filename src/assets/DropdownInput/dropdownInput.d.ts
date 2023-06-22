import type { SelectType } from "../../types/InputEventTypes";
interface DropdownInputProps {
    placeholder?: string;
    onChange: (arg: string) => void;
    options: SelectType[];
    currentOption?: SelectType;
    fullWidth?: boolean;
    disabled?: boolean;
}
declare const DropdownInput: ({ onChange, options, currentOption, fullWidth, disabled, placeholder, }: DropdownInputProps) => import("react/jsx-runtime").JSX.Element;
export default DropdownInput;
