import React from "react";
import type { CrudType } from "./models/CrudType";
import { FieldsType } from "./models/FieldsType";
interface ResourceInputsFormProps {
    title: string;
    onCancel: any;
    loading: boolean;
    children?: React.ReactNode;
    isEdit?: boolean;
    values: Array<FieldsType>;
    isCustomInputs?: boolean;
    extraFormCruds?: CrudType;
    valuesToEdit?: any;
    omitValuesToEdit?: string[];
    handleChangeField: (data: string, field: string) => void;
    formHandler: any;
    cancelLabel: string;
    saveLabel?: string;
    createLabel?: string;
}
declare const _default: React.MemoExoticComponent<({ cancelLabel, saveLabel, createLabel, title, children, onCancel, loading, isEdit, values, extraFormCruds, handleChangeField, formHandler, }: ResourceInputsFormProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
