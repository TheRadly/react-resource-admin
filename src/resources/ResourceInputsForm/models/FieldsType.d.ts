import { SelectType } from "../../../types/InputEventTypes";
export type FieldsType = {
    field: string;
    isArray?: boolean;
    isDisabled?: boolean;
    excludeFields?: string[];
    value: string | number | {
        name: string;
        code: string;
    }[];
    activeValue?: SelectType;
    isMultiInput?: boolean;
    isJson?: boolean;
    withChildQuery?: boolean;
    isFloat?: boolean;
    isDate?: boolean;
    placeholder?: string;
    isTextArea?: boolean;
};
