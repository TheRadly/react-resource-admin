import React from "react";
interface ResourceTableContainerProps {
    selectedValues?: any[];
    pageTitle?: string;
    values?: any[];
    loading: boolean;
    tableFields: {
        field: string;
        sortable?: boolean;
    }[];
    paginatorCount?: number;
    showMode?: boolean;
    children?: React.ReactNode;
    deleteQueryMethod?: any;
    getQueryMethod?: any;
    hideSearch?: boolean;
    excludedSearchFields?: string[];
    onEdit: () => void;
    emptyMessage: string;
    searchPlaceholder: string;
    dropdownPlaceholder: string;
    createLabel: string;
    deleteConfirmMessage: string;
    disabledTooltipDeleteLabel: string;
    onCreate?: () => void;
    confirmDeleteMessage: string;
    onRowClick: (arg: string) => void;
    hideCreate?: boolean;
    tableListRows?: number;
    hideRowActions?: boolean;
    hideMultiSelect?: boolean;
}
declare const ResourceTableContainer: ({ pageTitle, values, loading, tableFields, paginatorCount, showMode, children, deleteQueryMethod, getQueryMethod, hideSearch, excludedSearchFields, onEdit, emptyMessage, searchPlaceholder, dropdownPlaceholder, createLabel, deleteConfirmMessage, disabledTooltipDeleteLabel, onCreate, confirmDeleteMessage, onRowClick, hideCreate, tableListRows, hideRowActions, hideMultiSelect, }: ResourceTableContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceTableContainer;
