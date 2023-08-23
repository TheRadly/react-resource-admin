interface ArrayOfObjectsInputProps {
    label?: string;
    values: any[];
    fullWidth?: boolean;
    initialValue?: any;
    itemTitledBy?: string;
    onChange: (arg: any) => void;
    emptyMessage?: string;
    disabled?: boolean;
}
declare const ArrayOfObjectsInput: ({ label, values, fullWidth, initialValue, itemTitledBy, onChange, emptyMessage, disabled, }: ArrayOfObjectsInputProps) => import("react/jsx-runtime").JSX.Element;
export default ArrayOfObjectsInput;
