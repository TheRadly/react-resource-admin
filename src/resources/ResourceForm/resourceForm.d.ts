import { FieldsType } from "../ResourceInputsForm/models/FieldsType";
import { CrudType } from "../ResourceInputsForm/models/CrudType";
interface ResourceFormProps {
    isEdit?: boolean;
    onCancel: () => void;
    typeName?: string;
    values: Array<FieldsType>;
    loading?: boolean;
    children?: any;
    extraFormCruds?: CrudType;
    isShowQueryContainer?: boolean;
    handleShowQueryContainer?: (item: any) => void;
    formHandler: any;
    handleChangeField?: (data: string, field: string | number | boolean) => void;
    saveLabel?: string;
    createLabel?: string;
    cancelLabel: string;
    hideCancel?: boolean;
}
declare const ResourceForm: ({ loading, children, values, extraFormCruds, isShowQueryContainer, isEdit, handleShowQueryContainer, handleChangeField, formHandler, onCancel, saveLabel, createLabel, cancelLabel, hideCancel, }: ResourceFormProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceForm;
