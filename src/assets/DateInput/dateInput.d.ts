interface DateInputProps {
    label: string;
    onChange: (arg: any) => void;
    fullWidth?: boolean;
    disabled?: boolean;
    value: string | Date;
}
declare const DateInput: ({ label, onChange, fullWidth, disabled, value, }: DateInputProps) => import("react/jsx-runtime").JSX.Element;
export default DateInput;
