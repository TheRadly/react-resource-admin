import { CrudType } from "../../resources/ResourceInputsForm/models/CrudType";
interface InputFieldProps {
    deleteTooltip?: string;
    editTooltip?: string;
    item: object;
    fieldsToExclude?: string[];
    extraFormCruds?: CrudType;
    handleShowQueryContainer?: (item?: any) => void;
}
declare const InputField: ({ deleteTooltip, editTooltip, item, fieldsToExclude, extraFormCruds, handleShowQueryContainer, }: InputFieldProps) => import("react/jsx-runtime").JSX.Element;
export default InputField;
