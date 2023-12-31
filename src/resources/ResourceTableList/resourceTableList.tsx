import React from "react";
import { Column } from "primereact/column";
import {
  DataTable,
  DataTableSelectionChangeEvent,
  DataTableSortEvent,
} from "primereact/datatable";
import EditColumnTemplate from "./editDeleteColumnTemplate";
import { DEFAULT_LIMIT, ID } from "../../staticTexts";
import {
  Paginator,
  PaginatorCurrentPageReportOptions,
} from "primereact/paginator";
import ResourceTableListWrapper from "./styled/resourceTableListWrapper";
import useResourceTableList from "./talons/useResourceTableList";
import { capitalize } from "lodash";

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
  fields: { field: string; sortable?: boolean }[];
  paginatorCount?: number;
  handleSortField: (event: DataTableSortEvent) => void;
  showMode?: boolean;
  deleteQueryMethod: any;
  getQueryMethod: any;
  confirmDeleteMessage: string;
  onRowClick: (arg: string) => void;
  onClone?: (row: any) => void;
  rows?: number;
  hideRowActions?: boolean;
  hideClone?: boolean;
}

const ResourceTableList = ({
  values,
  loading,
  emptyMessage,
  children,
  isSelectable,
  onSelectionChange,
  onClickEditField,
  selection,
  isPaginator = true,
  fields,
  getQueryMethod,
  paginatorCount,
  handleSortField,
  showMode = false,
  deleteQueryMethod,
  confirmDeleteMessage,
  onRowClick,
  onClone,
  rows,
  hideRowActions = false,
  hideClone = false,
}: ResourceTableListProps) => {
  const {
    handleChangePagination,
    paginatorFirst,
    handleRowClick,
    handleDeleteField,
  } = useResourceTableList({
    getQueryMethod,
    showMode,
    deleteQueryMethod,
    onRowClick,
  });

  const paginatorTemplate = {
    layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
    CurrentPageReport: (options: PaginatorCurrentPageReportOptions) =>
      `${options.first} - ${options.last} of ${options.totalRecords}`,
  };

  return (
    <ResourceTableListWrapper>
      <DataTable
        selection={selection}
        onSelectionChange={onSelectionChange}
        selectionMode={
          isSelectable ? "checkbox" : showMode ? "single" : undefined
        }
        value={values}
        rows={rows || DEFAULT_LIMIT}
        dataKey="id"
        loading={loading}
        onSort={handleSortField}
        sortMode="single"
        emptyMessage={emptyMessage}
        onRowClick={(e) => !isSelectable && handleRowClick(e)}
      >
        {isSelectable && <Column selectionMode="multiple" />}
        {children ||
          (fields &&
            fields.length &&
            fields.map(({ field, sortable = true }) => (
              <Column
                field={field}
                header={capitalize(field)}
                sortable={sortable}
              />
            )))}
        {!hideRowActions && !isSelectable && (
          <Column
            field={ID}
            body={(row) => (
              <EditColumnTemplate
                confirmDeleteMessage={confirmDeleteMessage}
                hideClone={hideClone}
                onClickEdit={() => onClickEditField && onClickEditField(row.id)}
                onClickDelete={() => handleDeleteField(row.id)}
                onClickClone={() => onClone && onClone(row)}
              />
            )}
          />
        )}
      </DataTable>
      {isPaginator && !loading && (
        <Paginator
          template={paginatorTemplate}
          first={paginatorFirst}
          rows={DEFAULT_LIMIT}
          totalRecords={paginatorCount || 0}
          onPageChange={handleChangePagination}
        />
      )}
    </ResourceTableListWrapper>
  );
};

export default ResourceTableList;
