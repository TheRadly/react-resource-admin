import { CrudType } from "../../../resources/ResourceInputsForm/models/CrudType";
interface UseInputFieldProps {
    item: any;
    fieldsToExclude?: string[];
    extraFormCruds?: CrudType;
}
declare const useInputField: ({ item, fieldsToExclude, extraFormCruds, }: UseInputFieldProps) => {
    fields: import("../../../types/InputEventTypes").DataFieldType[];
    handleDeleteItem: (event: any) => void;
};
export default useInputField;
