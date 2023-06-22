import { DataTableRowClickEvent } from "primereact/datatable";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { useCallback, useState } from "react";

interface UseResourceTableListProps {
  deleteQueryMethod?: any;
  getQueryMethod: any;
  showMode?: boolean;
  onRowClick: (arg: string) => void;
}

const useResourceTableList = ({
  deleteQueryMethod,
  getQueryMethod,
  showMode,
  onRowClick,
}: UseResourceTableListProps) => {
  const [paginatorFirst, setPaginatorFirst] = useState(0);

  const handleChangePagination = useCallback(
    (event: PaginatorPageChangeEvent) => {
      setPaginatorFirst(event.first);
      getQueryMethod({ extraPaginationFields: { page: event.page + 1 } });
    },
    [setPaginatorFirst, getQueryMethod]
  );

  const handleRowClick = useCallback(
    ({ data }: DataTableRowClickEvent) => {
      if (showMode) {
        onRowClick(data.id);
      }
    },
    [onRowClick, showMode]
  );

  const handleDeleteField = useCallback(
    (id: string) => {
      deleteQueryMethod({
        variables: {
          ids: [id],
        },
      });
    },
    [deleteQueryMethod]
  );

  return {
    handleRowClick,
    handleDeleteField,
    handleChangePagination,
    paginatorFirst,
  };
};

export default useResourceTableList;
