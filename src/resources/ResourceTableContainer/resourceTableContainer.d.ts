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
    onClone?: (row: any) => void;
    confirmDeleteMessage: string;
    onRowClick: (arg: string) => void;
    hideCreate?: boolean;
    hideClone?: boolean;
    tableListRows?: number;
    hideRowActions?: boolean;
    hideMultiSelect?: boolean;
    extraToolbarItem?: React.ReactNode;
}
declare const ResourceTableContainer: ({ pageTitle, values, loading, tableFields, paginatorCount, showMode, children, deleteQueryMethod, getQueryMethod, hideSearch, excludedSearchFields, onEdit, emptyMessage, searchPlaceholder, dropdownPlaceholder, createLabel, deleteConfirmMessage, disabledTooltipDeleteLabel, onCreate, confirmDeleteMessage, onRowClick, onClone, hideCreate, hideClone, tableListRows, hideRowActions, hideMultiSelect, extraToolbarItem, }: ResourceTableContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceTableContainer;
