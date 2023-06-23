import JsonEditorWrapper from "./styled/jsonEditorWrapper";

interface JsonEditorProps {
  value: any;
  onChange: (arg: any) => void;
  label: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const JsonEditor = ({
  label,
  value,
  onChange,
  fullWidth = true,
  disabled,
}: JsonEditorProps) => (
  <JsonEditorWrapper fullWidth={fullWidth}>
    <span>{label}</span>
    <div>Test!</div>
  </JsonEditorWrapper>
);

export default JsonEditor;
