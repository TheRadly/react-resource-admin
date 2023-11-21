import InputFloatLabel from "../InputFloatLabel/inputFloatLabel";
import TYPES from "./config";
import SwitchInput from "../SwitchInput/switchInput";
import DropdownInput from "../DropdownInput/dropdownInput";
import { SelectType } from "../../types/InputEventTypes";
import InputMultiField from "../InputMultiField";
import JsonEditor from "../JsonEditor/jsonEditor";
import { memo, useMemo } from "react";
import InputFieldsWithQuery from "../InputFieldsWithQuery/inputFieldsWithQuery";
import InputArray from "../InputArray";
import { CrudType } from "../../resources/ResourceInputsForm/models/CrudType";
import DateInput from "../DateInput/dateInput";
import toFirstUpperCase from "../../utils/toFirstUpperCase";
import TextAreaInput from "../TextAreaInput/textAreaInput";
import MultiSelectInput from "../MultiSelectInput/multiSelectInput";
import ArrayOfObjectsInput from "../ArrayOfObjectsInput/arrayOfObjectsInput";
import CurrenciesInput from "../CurrenciesInput";

interface UniversalInputProps {
  value: any;
  onChange: (arg: any) => void;
  disabled?: boolean;
  dropdownValues?: any;
  currentOption?: SelectType | any;
  isMultiInput?: boolean;
  isJson?: boolean;
  withChildQuery?: boolean;
  isShowQueryContainer?: boolean;
  handleShowQueryContainer?: (arg?: any) => void;
  isArray?: boolean;
  isDisabled?: boolean;
  isDate?: boolean;
  isTextArea?: boolean;
  fieldsToExcludeInQueryInput?: string[];
  extraFormCruds?: CrudType;
  isFloat?: boolean;
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  emptyLabel?: string;
  closeTooltipLabel?: string;
  addTooltipLabel?: string;
  deleteTooltipLabel?: string;
  editTooltipLabel?: string;
  isMultiSelect?: boolean;
  isArrayWithObjects?: boolean;
  initialValue?: any;
  itemTitledBy?: string;
  withoutUpperCasing?: boolean;
  returnFullObjectEvent?: boolean;
  withSearch?: boolean;
  isCurrencies?: boolean;
  error?: string;
}

const UniversalInput = ({
  label: propLabel,
  placeholder,
  value,
  onChange,
  disabled,
  currentOption,
  isMultiInput,
  isMultiSelect,
  withChildQuery,
  handleShowQueryContainer,
  fieldsToExcludeInQueryInput,
  extraFormCruds,
  fullWidth,
  emptyLabel,
  isArray,
  isDisabled,
  isFloat,
  isJson,
  isShowQueryContainer,
  isDate,
  isTextArea,
  isArrayWithObjects,
  closeTooltipLabel,
  addTooltipLabel,
  deleteTooltipLabel,
  editTooltipLabel,
  initialValue,
  itemTitledBy,
  withoutUpperCasing,
  returnFullObjectEvent,
  withSearch,
  isCurrencies,
  error,
}: UniversalInputProps) => {
  const label = useMemo(() => {
    if (withoutUpperCasing && propLabel) {
      return propLabel;
    } else if (propLabel) {
      return toFirstUpperCase(propLabel, true);
    }

    return undefined;
  }, [propLabel, withoutUpperCasing]);

  return (
    <>
      {Array.isArray(value) && isCurrencies && (
        <CurrenciesInput
          error={error}
          label={label}
          values={value}
          initialValues={initialValue}
          emptyMessage={emptyLabel}
          fullWidth={fullWidth}
          disabled={disabled}
          onChange={onChange}
        />
      )}
      {Array.isArray(value) && isArrayWithObjects && (
        <ArrayOfObjectsInput
          error={error}
          label={label}
          fullWidth={fullWidth}
          disabled={disabled}
          onChange={onChange}
          initialValue={initialValue}
          values={value}
          itemTitledBy={itemTitledBy}
          emptyMessage={emptyLabel}
        />
      )}
      {Array.isArray(value) && isMultiSelect && (
        <MultiSelectInput
          error={error}
          currentOption={currentOption}
          fullWidth={fullWidth}
          disabled={disabled}
          label={label}
          options={value}
          onChange={onChange}
        />
      )}
      {isTextArea && (
        <TextAreaInput
          error={error}
          fullWidth={fullWidth}
          disabled={disabled}
          label={label}
          value={value}
          onChange={onChange}
        />
      )}
      {typeof value === TYPES.NUMBER && (
        <InputFloatLabel
          error={error}
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
          error={error}
          label={label}
          checked={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}
      {isArray && (
        <InputArray
          error={error}
          disabled={disabled}
          fullWidth={fullWidth}
          values={value}
          label={label}
          onChange={onChange}
        />
      )}
      {Array.isArray(value) && withChildQuery && (
        <InputFieldsWithQuery
          error={error}
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
        !isDate &&
        !isMultiInput &&
        !isMultiSelect &&
        !withChildQuery &&
        !isArrayWithObjects &&
        !isArray &&
        !isCurrencies && (
          <DropdownInput
            error={error}
            label={label}
            returnFullObjectEvent={returnFullObjectEvent}
            disabled={disabled}
            fullWidth={fullWidth}
            currentOption={currentOption}
            onChange={onChange}
            withSearch={withSearch}
            options={value}
            placeholder={placeholder}
          />
        )}
      {typeof value === TYPES.OBJECT && isMultiInput && (
        <InputMultiField
          error={error}
          fullWidth={fullWidth}
          disabled={disabled}
          onChange={onChange}
          values={value}
        />
      )}
      {isDate && (
        <DateInput
          error={error}
          disabled={disabled}
          fullWidth={fullWidth}
          label={label}
          value={value}
          onChange={onChange}
        />
      )}
      {typeof value === TYPES.STRING && isJson && (
        <JsonEditor
          error={error}
          disabled={disabled}
          fullWidth={fullWidth}
          label={label}
          value={value}
          onChange={onChange}
        />
      )}
      {typeof value === TYPES.STRING && !isJson && !isDate && !isTextArea && (
        <InputFloatLabel
          error={error}
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
};

export default memo(UniversalInput);
