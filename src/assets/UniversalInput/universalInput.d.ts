/// <reference types="react" />
import { SelectType } from "../../types/InputEventTypes";
import { CrudType } from "../../resources/ResourceInputsForm/models/CrudType";
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
}
declare const _default: import("react").MemoExoticComponent<({ label: propLabel, placeholder, value, onChange, disabled, currentOption, isMultiInput, isMultiSelect, withChildQuery, handleShowQueryContainer, fieldsToExcludeInQueryInput, extraFormCruds, fullWidth, emptyLabel, isArray, isDisabled, isFloat, isJson, isShowQueryContainer, isDate, isTextArea, closeTooltipLabel, addTooltipLabel, deleteTooltipLabel, editTooltipLabel, }: UniversalInputProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
