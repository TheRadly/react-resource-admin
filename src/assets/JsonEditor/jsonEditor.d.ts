interface JsonEditorProps {
    value: any;
    onChange: (arg: any) => void;
    label?: string;
    fullWidth?: boolean;
    disabled?: boolean;
}
declare const JsonEditor: ({ label, value, onChange, fullWidth, disabled, }: JsonEditorProps) => import("react/jsx-runtime").JSX.Element;
export default JsonEditor;
