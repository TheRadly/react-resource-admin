import React from "react";
import ResourceTableToolbar from "../ResourceTableToolbar";
import ResourceTableContainerWrapper from "./styled/resourceTableContainerWrapper";
import ResourceTableList from "../ResourceTableList";
import useResourceTableContainer from "./talons/useResourceTableContainer";

interface ResourceTableContainerProps {
  selectedValues?: any[];
  pageTitle?: string;
  values?: any[];
  loading: boolean;
  tableFields: { field: string; sortable?: boolean }[];
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

const ResourceTableContainer = ({
  pageTitle,
  values,
  loading,
  tableFields,
  paginatorCount,
  showMode,
  children,
  deleteQueryMethod,
  getQueryMethod,
  hideSearch,
  excludedSearchFields,
  onEdit,
  emptyMessage,
  searchPlaceholder,
  dropdownPlaceholder,
  createLabel,
  deleteConfirmMessage,
  disabledTooltipDeleteLabel,
  onCreate,
  confirmDeleteMessage,
  onRowClick,
  onClone,
  hideCreate,
  hideClone,
  tableListRows,
  hideRowActions,
  hideMultiSelect,
  extraToolbarItem,
}: ResourceTableContainerProps) => {
  const {
    handleDeleteClick,
    handleSortField,
    handleChangeTableSearch,
    handleChangeSelection,
    handleChangeSelectMode,
    isSelectable,
    selectedValues,
  } = useResourceTableContainer({
    getQueryMethod,
    deleteQueryMethod,
  });

  return (
    <ResourceTableContainerWrapper>
      <ResourceTableToolbar
        extraToolbarItem={extraToolbarItem}
        hideCreate={hideCreate}
        searchPlaceholder={searchPlaceholder}
        dropdownPlaceholder={dropdownPlaceholder}
        createLabel={createLabel}
        deleteConfirmMessage={deleteConfirmMessage}
        disabledTooltipDeleteLabel={disabledTooltipDeleteLabel}
        onCreate={onCreate}
        hideSearch={hideSearch}
        getQueryMethod={getQueryMethod}
        tableFields={tableFields}
        handleChangeTableSearch={handleChangeTableSearch}
        selectedValues={selectedValues}
        isSelectable={isSelectable}
        handleChangeSelectMode={handleChangeSelectMode}
        handleDeleteClick={handleDeleteClick}
        pageTitle={pageTitle}
        excludedSearchFields={excludedSearchFields}
        hideMultiSelect={hideMultiSelect}
      />
      <ResourceTableList
        rows={tableListRows}
        confirmDeleteMessage={confirmDeleteMessage}
        onRowClick={onRowClick}
        onClone={onClone}
        hideClone={hideClone}
        deleteQueryMethod={deleteQueryMethod}
        getQueryMethod={getQueryMethod}
        handleSortField={handleSortField}
        onClickEditField={onEdit}
        isSelectable={isSelectable}
        selection={selectedValues}
        onSelectionChange={handleChangeSelection}
        values={values}
        loading={loading}
        emptyMessage={emptyMessage}
        fields={tableFields}
        paginatorCount={paginatorCount}
        showMode={showMode}
        hideRowActions={hideRowActions}
      >
        {children}
      </ResourceTableList>
    </ResourceTableContainerWrapper>
  );
};

export default ResourceTableContainer;
