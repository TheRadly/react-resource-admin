/// <reference types="react" />
interface CurrenciesInputProps {
    label?: string;
    values: {
        currency: string;
        amount: string | number;
    }[];
    fullWidth?: boolean;
    initialValues: string[];
    onChange: (arg: any) => void;
    emptyMessage?: string;
    disabled?: boolean;
    error?: string;
}
declare const _default: import("react").MemoExoticComponent<({ label, values, fullWidth, initialValues, onChange, emptyMessage, disabled, error, }: CurrenciesInputProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
