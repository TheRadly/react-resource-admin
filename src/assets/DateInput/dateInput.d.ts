import { Nullable } from "primereact/ts-helpers";
interface DateInputProps {
    label: string;
    onChange: (arg: Nullable<string | Date | Date[]>) => void;
    fullWidth?: boolean;
    disabled?: boolean;
    value: any;
}
declare const DateInput: ({ label, onChange, fullWidth, disabled, value, }: DateInputProps) => import("react/jsx-runtime").JSX.Element;
export default DateInput;
