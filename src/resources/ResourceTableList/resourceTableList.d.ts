import React from "react";
import { DataTableSelectionChangeEvent, DataTableSortEvent } from "primereact/datatable";
interface ResourceTableListProps {
    values: any[] | undefined;
    loading: boolean;
    emptyMessage: string;
    children?: React.ReactNode;
    isSelectable?: boolean;
    onSelectionChange?: (event: DataTableSelectionChangeEvent<any[]>) => void;
    onClickEditField?: (arg: string) => void;
    selection?: any;
    isPaginator?: boolean;
    isCustomFields?: boolean;
    fields: string[];
    paginatorCount?: number;
    handleSortField: (event: DataTableSortEvent) => void;
    showMode?: boolean;
    deleteQueryMethod: any;
    getQueryMethod: any;
    confirmDeleteMessage: string;
    onRowClick: (arg: string) => void;
    rows?: number;
}
declare const ResourceTableList: ({ values, loading, emptyMessage, children, isSelectable, onSelectionChange, onClickEditField, selection, isPaginator, fields, isCustomFields, getQueryMethod, paginatorCount, handleSortField, showMode, deleteQueryMethod, confirmDeleteMessage, onRowClick, rows, }: ResourceTableListProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceTableList;
