interface ResourceTableActionsProps {
    selectedValues?: any[];
    isSelectable: boolean;
    pageTitle?: string;
    hideSearch?: boolean;
    hideActions?: boolean;
    hideTitle?: boolean;
    handleChangeTableSearch?: (arg: any) => void;
    handleDeleteClick: () => void;
    handleChangeSelectMode: () => void;
    tableFields: {
        field: string;
        sortable?: boolean;
    }[];
    getQueryMethod?: any;
    excludedSearchFields?: string[];
    createLabel: string;
    deleteConfirmMessage: string;
    disabledTooltipDeleteLabel: string;
    onCreate?: () => void;
    searchPlaceholder: string;
    dropdownPlaceholder: string;
    hideCreate?: boolean;
}
declare const ResourceTableToolbar: ({ handleDeleteClick, handleChangeSelectMode, handleChangeTableSearch, selectedValues, pageTitle, isSelectable, hideTitle, hideActions, hideSearch, tableFields, getQueryMethod, excludedSearchFields, createLabel, deleteConfirmMessage, disabledTooltipDeleteLabel, onCreate, searchPlaceholder, dropdownPlaceholder, hideCreate, }: ResourceTableActionsProps) => import("react/jsx-runtime").JSX.Element;
export default ResourceTableToolbar;
