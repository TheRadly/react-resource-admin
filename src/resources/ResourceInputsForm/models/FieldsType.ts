import { SelectType } from "../../../types/InputEventTypes";

export type FieldsType = {
  field: string;
  label?: string;
  isArray?: boolean;
  isDisabled?: boolean;
  excludeFields?: string[];
  value: string | number | { name: string; code: string }[];
  activeValue?: SelectType;
  isMultiInput?: boolean;
  isJson?: boolean;
  withChildQuery?: boolean;
  isFloat?: boolean;
  isDate?: boolean;
  placeholder?: string;
  isTextArea?: boolean;
  isMultiSelect?: boolean;
  initialValue?: any;
  itemTitledBy?: string;
  isArrayWithObject?: boolean;
  emptyLabel?: string;
  fullWidth?: boolean;
};
