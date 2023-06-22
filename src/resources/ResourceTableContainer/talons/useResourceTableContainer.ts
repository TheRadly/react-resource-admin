import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { ASC_SORT, DESC_SORT } from "../../../staticTexts";
import { DataTableSortEvent } from "primereact/datatable";
import { TableSearchArgument } from "../../ResourceTableSearch/models/TableSearchArgument";

interface UseResourceTableContainer {
  getQueryMethod?: any;
  deleteQueryMethod?: any;
}

const useResourceTableContainer = ({
  getQueryMethod,
  deleteQueryMethod,
}: UseResourceTableContainer) => {
  const [order, setOrder] = useState<string>(ASC_SORT);
  const [selectedValues, setSelectedValues] = useState<[]>([]);
  const [isSelectable, setSelectable] = useState<boolean>(false);
  const [isEditable, setEditable] = useState<boolean>(false);
  const [isDeleteClicked, setDeleteClicked] = useState<boolean>(false);

  const debouncedGetSearchValue = _.debounce(
    ({ search, byField }: TableSearchArgument) => {
      getQueryMethod({
        extraSortFields: {
          filter: {
            [byField]: search,
          },
        },
      });
    },
    1000
  );

  // This callback called from another head space into DOM. If try get selected balances into callback body
  // We get empty arr []. For this I did lifehack with setState, and call deleteBalances into useEffect
  const handleDeleteClick = useCallback(() => {
    setDeleteClicked(true);
  }, [setDeleteClicked]);

  const handleChangeEditable = useCallback(() => {
    setEditable((prev) => !prev);
  }, [setEditable]);

  const handleChangeSelection = useCallback(
    (event: { value: any }) => {
      setSelectedValues(event.value);
    },
    [setSelectedValues]
  );

  const handleChangeSelectMode = useCallback(() => {
    setSelectable((prev) => {
      if (prev) {
        setSelectedValues([]);
      }

      return !prev;
    });
  }, [setSelectedValues, setSelectable]);

  const handleSortField = useCallback(
    ({ sortField }: DataTableSortEvent) => {
      setOrder((prev) => (prev === ASC_SORT ? DESC_SORT : ASC_SORT));

      if (order) {
        getQueryMethod({
          extraSortFields: {
            sort: {
              by: sortField,
              order,
            },
          },
        });
      }
    },
    [order, setOrder, getQueryMethod]
  );

  const handleChangeTableSearch = useCallback(
    ({ search, byField }: TableSearchArgument) => {
      debouncedGetSearchValue({ search, byField });
    },
    [debouncedGetSearchValue]
  );

  useEffect(() => {
    if (isDeleteClicked && selectedValues.length) {
      const parsedIds = selectedValues.map(({ id }) => id);

      deleteQueryMethod({ variables: { ids: parsedIds } });
      setDeleteClicked(false);
      setSelectedValues([]);
    }
  }, [isDeleteClicked, selectedValues, deleteQueryMethod]);

  return {
    handleDeleteClick,
    handleSortField,
    handleChangeTableSearch,
    handleChangeSelection,
    handleChangeSelectMode,
    handleChangeEditable,
    isSelectable,
    isEditable,
    selectedValues,
  };
};

export default useResourceTableContainer;
