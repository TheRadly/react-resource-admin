/// <reference types="react" />
import type { CrudType } from "../models/CrudType";
import { FieldsType } from "../models/FieldsType";
interface UseResourceInputsQueryForm {
    extraFormCruds: CrudType;
    item?: any;
    handleCloseQueryContainer?: () => void;
    filterItems?: FieldsType[];
    saveLabel?: string;
    createLabel?: string;
}
declare const useResourceInputsQueryForm: ({ extraFormCruds, item, handleCloseQueryContainer, filterItems, saveLabel, createLabel, }: UseResourceInputsQueryForm) => {
    loading: any;
    handleSubmit: (e?: import("react").FormEvent<HTMLFormElement> | undefined) => void;
    arrayOfValues: FieldsType[];
    handleChangeField: (value: string | number | boolean, field: string) => void;
    submitLocale: string | undefined;
};
export default useResourceInputsQueryForm;
