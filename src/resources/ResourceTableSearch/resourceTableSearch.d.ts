import { TableSearchArgument } from "./models/TableSearchArgument";
interface TableSearchProps {
    handleChangeTableSearch?: (arg: TableSearchArgument) => void;
    fields: {
        field: string;
        sortable?: boolean;
    }[];
    getQueryMethod?: any;
    excludedSearchFields?: string[];
    searchPlaceholder: string;
    dropdownPlaceholder: string;
}
declare const ResourceTableSearch: ({ handleChangeTableSearch, fields, getQueryMethod, excludedSearchFields, searchPlaceholder, dropdownPlaceholder, }: TableSearchProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceTableSearch;
