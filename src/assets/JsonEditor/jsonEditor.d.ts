interface JsonEditorProps {
    value: any;
    onChange: (arg: any) => void;
    label?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    error?: string;
}
declare const JsonEditor: ({ label, value, onChange, fullWidth, disabled, error, }: JsonEditorProps) => import("react/jsx-runtime").JSX.Element;
export default JsonEditor;
