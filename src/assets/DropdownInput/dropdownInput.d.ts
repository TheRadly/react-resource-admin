import type { SelectType } from "../../types/InputEventTypes";
interface DropdownInputProps {
    label?: string;
    placeholder?: string;
    onChange: (arg: string) => void;
    options: SelectType[];
    currentOption?: SelectType;
    fullWidth?: boolean;
    disabled?: boolean;
    returnFullObjectEvent?: boolean;
    withSearch?: boolean;
    error?: string;
}
declare const DropdownInput: ({ label, onChange, options, currentOption, fullWidth, disabled, placeholder, withSearch, returnFullObjectEvent, error, }: DropdownInputProps) => import("react/jsx-runtime").JSX.Element;
export default DropdownInput;
