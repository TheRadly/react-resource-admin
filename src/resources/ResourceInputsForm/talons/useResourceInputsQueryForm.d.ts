/// <reference types="react" />
import type { CrudType } from "../models/CrudType";
import { FieldsType } from "../models/FieldsType";
interface UseResourceInputsQueryForm {
    extraFormCruds: CrudType;
    item?: any;
    handleCloseQueryContainer?: () => void;
}
declare const useResourceInputsQueryForm: ({ extraFormCruds, item, handleCloseQueryContainer, }: UseResourceInputsQueryForm) => {
    loading: any;
    handleSubmit: (e?: import("react").FormEvent<HTMLFormElement> | undefined) => void;
    arrayOfValues: FieldsType[];
    handleChangeField: (value: string | number | boolean, field: string) => void;
    submitLocale: string;
};
export default useResourceInputsQueryForm;
