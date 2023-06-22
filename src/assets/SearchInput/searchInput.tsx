import React from "react";
import { InputText } from "primereact/inputtext";
import useSearchInput from "./talons/useSearchInput";
import { SEARCH_ICON, SEARCH_INPUT } from "../../staticTexts";

interface SearchInputProps {
  placeholder: string;
  onChange?: (arg: any) => void;
}

const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
  const { handleKeyUp } = useSearchInput({ onChange });

  return (
    <div className="p-input-icon-left">
      <i className={SEARCH_ICON}></i>
      <InputText
        onKeyDownCapture={handleKeyUp}
        type={SEARCH_INPUT}
        onInput={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
