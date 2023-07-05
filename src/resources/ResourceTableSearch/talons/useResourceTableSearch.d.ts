import type { TableSearchArgument } from "../models/TableSearchArgument";
import { DropdownChangeEvent } from "primereact/dropdown";
import type { InputEventType } from "../../../types/InputEventTypes";
import { DropdownField } from "../models/DropdownField";
interface UseResourceTableSearchProps {
    handleChangeTableSearch?: (arg: TableSearchArgument) => void;
    fields: {
        field: string;
        sortable?: boolean;
    }[];
    getQueryMethod?: any;
    excludedSearchFields?: string[];
}
declare const useResourceTableSearch: ({ handleChangeTableSearch, fields: propFields, getQueryMethod, excludedSearchFields, }: UseResourceTableSearchProps) => {
    isChecked: boolean;
    onChangeSwitch: (switchValue: boolean) => void;
    onChangeSearch: ({ target: { value } }: InputEventType) => void;
    onSelectDropdownField: ({ value }: DropdownChangeEvent) => void;
    selectedField: DropdownField | null;
    dropdownFields: any;
};
export default useResourceTableSearch;
