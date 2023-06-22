import { DataTableRowClickEvent } from "primereact/datatable";
import { PaginatorPageChangeEvent } from "primereact/paginator";
interface UseResourceTableListProps {
    deleteQueryMethod?: any;
    getQueryMethod: any;
    showMode?: boolean;
    onRowClick: (arg: string) => void;
}
declare const useResourceTableList: ({ deleteQueryMethod, getQueryMethod, showMode, onRowClick, }: UseResourceTableListProps) => {
    handleRowClick: ({ data }: DataTableRowClickEvent) => void;
    handleDeleteField: (id: string) => void;
    handleChangePagination: (event: PaginatorPageChangeEvent) => void;
    paginatorFirst: number;
};
export default useResourceTableList;
