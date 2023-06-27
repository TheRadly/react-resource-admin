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
  tableFields: string[];
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
}

const ResourceTableContainer = ({
  pageTitle,
  values,
  loading,
  tableFields,
  paginatorCount,
  showMode,
  isCustomFields,
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
  hideCreate,
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
      />
      <ResourceTableList
        confirmDeleteMessage={confirmDeleteMessage}
        onRowClick={onRowClick}
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
        isCustomFields={isCustomFields}
      >
        {children}
      </ResourceTableList>
    </ResourceTableContainerWrapper>
  );
};

export default ResourceTableContainer;
