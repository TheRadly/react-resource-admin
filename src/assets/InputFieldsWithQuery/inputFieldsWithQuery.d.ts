import { CrudType } from "../../resources/ResourceInputsForm/models/CrudType";
interface InputFieldsWithQueryProps {
    label: string;
    emptyLabel?: string;
    values: any[];
    isShowQueryContainer?: boolean;
    handleShowQueryContainer?: (item?: any) => void;
    fieldsToExclude?: string[];
    extraFormCruds?: CrudType;
    fullWidth?: boolean;
    disabled?: boolean;
    closeTooltipLabel?: string;
    addTooltipLabel?: string;
    deleteTooltipLabel?: string;
    editTooltipLabel?: string;
}
declare const InputFieldsWithQuery: ({ label, emptyLabel, values, isShowQueryContainer, handleShowQueryContainer, fieldsToExclude, extraFormCruds, fullWidth, disabled, closeTooltipLabel, addTooltipLabel, deleteTooltipLabel, editTooltipLabel, }: InputFieldsWithQueryProps) => import("react/jsx-runtime").JSX.Element;
export default InputFieldsWithQuery;
