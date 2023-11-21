import ErrorMessage from "../UniversalInput/styled/errorMessage";
import JsonEditorWrapper from "./styled/jsonEditorWrapper";

interface JsonEditorProps {
  value: any;
  onChange: (arg: any) => void;
  label?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  error?: string;
}

const JsonEditor = ({
  label,
  value,
  onChange,
  fullWidth = true,
  disabled,
  error,
}: JsonEditorProps) => (
  <JsonEditorWrapper fullWidth={fullWidth}>
    {label && <span>{label}</span>}
    <div>Test!</div>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </JsonEditorWrapper>
);

export default JsonEditor;
