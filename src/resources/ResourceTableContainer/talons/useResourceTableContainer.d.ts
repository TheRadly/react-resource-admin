import { DataTableSortEvent } from "primereact/datatable";
import { TableSearchArgument } from "../../ResourceTableSearch/models/TableSearchArgument";
interface UseResourceTableContainer {
    getQueryMethod?: any;
    deleteQueryMethod?: any;
}
declare const useResourceTableContainer: ({ getQueryMethod, deleteQueryMethod, }: UseResourceTableContainer) => {
    handleDeleteClick: () => void;
    handleSortField: ({ sortField }: DataTableSortEvent) => void;
    handleChangeTableSearch: ({ search, byField }: TableSearchArgument) => void;
    handleChangeSelection: (event: {
        value: any;
    }) => void;
    handleChangeSelectMode: () => void;
    handleChangeEditable: () => void;
    isSelectable: boolean;
    isEditable: boolean;
    selectedValues: [];
};
export default useResourceTableContainer;
