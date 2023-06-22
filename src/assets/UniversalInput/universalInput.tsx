import React from "react";
import InputFloatLabel from "../InputFloatLabel/inputFloatLabel";
import TYPES from "./config";
import SwitchInput from "../SwitchInput/switchInput";
import DropdownInput from "../DropdownInput/dropdownInput";
import { SelectType } from "../../types/InputEventTypes";
import InputMultiField from "../InputMultiField";
import JsonEditor from "../JsonEditor/jsonEditor";
import { memo } from "react";
import InputFieldsWithQuery from "../InputFieldsWithQuery/inputFieldsWithQuery";
import InputArray from "../InputArray";
import { CrudType } from "../../resources/ResourceInputsForm/models/CrudType";

interface UniversalInputProps {
  value: any;
  onChange: (arg: any) => void;
  disabled?: boolean;
  dropdownValues?: any;
  currentOption?: SelectType;
  isMultiInput?: boolean;
  isJson?: boolean;
  withChildQuery?: boolean;
  isShowQueryContainer?: boolean;
  handleShowQueryContainer?: (arg?: any) => void;
  isArray?: boolean;
  isDisabled?: boolean;
  fieldsToExcludeInQueryInput?: string[];
  extraFormCruds?: CrudType;
  isFloat?: boolean;
  fullWidth?: boolean;
  label: string;
  placeholder?: string;
  emptyLabel?: string;
  closeTooltipLabel?: string;
  addTooltipLabel?: string;
  deleteTooltipLabel?: string;
  editTooltipLabel?: string;
}

const UniversalInput = ({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  currentOption,
  isMultiInput,
  isJson,
  withChildQuery,
  isShowQueryContainer,
  handleShowQueryContainer,
  isArray,
  isDisabled,
  fieldsToExcludeInQueryInput,
  extraFormCruds,
  isFloat,
  fullWidth,
  emptyLabel,
  closeTooltipLabel,
  addTooltipLabel,
  deleteTooltipLabel,
  editTooltipLabel,
}: UniversalInputProps) => (
  <>
    {typeof value === TYPES.NUMBER && (
      <InputFloatLabel
        fullWidth={fullWidth}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        isNumber
      />
    )}
    {typeof value === TYPES.BOOLEAN && (
      <SwitchInput
        label={label}
        checked={value}
        onChange={onChange}
        disabled={disabled}
      />
    )}
    {isArray && (
      <InputArray
        disabled={disabled}
        fullWidth={fullWidth}
        values={value}
        label={label}
        onChange={onChange}
      />
    )}
    {Array.isArray(value) && withChildQuery && (
      <InputFieldsWithQuery
        closeTooltipLabel={closeTooltipLabel}
        addTooltipLabel={addTooltipLabel}
        deleteTooltipLabel={deleteTooltipLabel}
        editTooltipLabel={editTooltipLabel}
        emptyLabel={emptyLabel}
        disabled={disabled}
        fullWidth={fullWidth}
        extraFormCruds={extraFormCruds}
        isShowQueryContainer={isShowQueryContainer}
        handleShowQueryContainer={handleShowQueryContainer}
        label={label}
        values={value}
        fieldsToExclude={fieldsToExcludeInQueryInput}
      />
    )}
    {typeof value === TYPES.OBJECT &&
      !isMultiInput &&
      !withChildQuery &&
      !isArray && (
        <DropdownInput
          disabled={disabled}
          fullWidth={fullWidth}
          currentOption={currentOption}
          onChange={onChange}
          options={value}
          placeholder={placeholder}
        />
      )}
    {typeof value === TYPES.OBJECT && isMultiInput && (
      <InputMultiField
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={onChange}
        values={value}
      />
    )}
    {typeof value === TYPES.STRING && isJson && (
      <JsonEditor
        disabled={disabled}
        fullWidth={fullWidth}
        label={label}
        value={value}
        onChange={onChange}
      />
    )}
    {typeof value === TYPES.STRING && !isJson && (
      <InputFloatLabel
        fullWidth={fullWidth}
        isFloat={isFloat}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDisabled || disabled}
      />
    )}
  </>
);

export default memo(UniversalInput);