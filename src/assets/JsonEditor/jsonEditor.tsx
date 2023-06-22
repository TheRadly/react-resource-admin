import React from "react";
import JsonEditorWrapper from "./styled/jsonEditorWrapper";
import Editor from "@monaco-editor/react";

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
    <Editor
      defaultLanguage="json"
      value={value}
      onChange={(val) => !disabled && onChange(val)}
    />
  </JsonEditorWrapper>
);

export default JsonEditor;
