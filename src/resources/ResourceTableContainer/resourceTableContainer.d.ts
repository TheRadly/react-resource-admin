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
    isCustomFields?: boolean;
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
}
declare const ResourceTableContainer: ({ pageTitle, values, loading, tableFields, paginatorCount, showMode, isCustomFields, children, deleteQueryMethod, getQueryMethod, hideSearch, excludedSearchFields, onEdit, emptyMessage, searchPlaceholder, dropdownPlaceholder, createLabel, deleteConfirmMessage, disabledTooltipDeleteLabel, onCreate, confirmDeleteMessage, onRowClick, hideCreate, tableListRows, }: ResourceTableContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceTableContainer;
