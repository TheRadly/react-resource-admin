export interface ResourceTableActionsProps {
    selectedValues?: any[];
    handleDeleteClick: () => void;
    isSelectable: boolean;
    isDisplaySearch: boolean;
    handleChangeSelectMode: () => void;
    handleChangeSearchMode: () => void;
    handleCreateButton?: () => void;
    classes?: any;
    hideSearch?: boolean;
    createLabel: string;
    deleteConfirmMessage: string;
    disabledTooltipDeleteLabel: string;
    hideCreate?: boolean;
    hideMultiSelect?: boolean;
}
