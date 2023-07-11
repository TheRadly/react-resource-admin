import { useCallback, useEffect, useMemo, useState } from "react";
import type { TableSearchArgument } from "../models/TableSearchArgument";
import { DropdownChangeEvent } from "primereact/dropdown";
import type { InputEventType } from "../../../types/InputEventTypes";
import { DropdownField } from "../models/DropdownField";
import { BOOLEAN_VALUES } from "../config";
import { capitalize } from "lodash";

const NONE = "none";

interface UseResourceTableSearchProps {
  handleChangeTableSearch?: (arg: TableSearchArgument) => void;
  fields: { field: string; sortable?: boolean }[];
  getQueryMethod?: any;
  excludedSearchFields?: string[];
}

const useResourceTableSearch = ({
  handleChangeTableSearch,
  fields: propFields,
  getQueryMethod,
  excludedSearchFields,
}: UseResourceTableSearchProps) => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const [selectedField, setSelectedField] = useState<DropdownField | null>(
    null
  );

  const [savedFields, setSavedFields] = useState<any>(null);

  const fields = useMemo(
    () =>
      excludedSearchFields
        ? propFields.filter(
            ({ field }) => !excludedSearchFields.includes(field)
          )
        : propFields,
    [excludedSearchFields, propFields]
  );

  const onChangeSearch = useCallback(
    ({ target: { value } }: InputEventType) => {
      if (
        handleChangeTableSearch &&
        selectedField &&
        selectedField.code !== NONE
      ) {
        handleChangeTableSearch({
          search: value,
          byField: selectedField.code,
        });
      }
    },
    [selectedField, handleChangeTableSearch]
  );

  const onChangeSwitch = useCallback(
    (switchValue: boolean) => {
      setChecked(switchValue);
      if (handleChangeTableSearch && selectedField) {
        handleChangeTableSearch({
          search: switchValue,
          byField: selectedField.code,
        });
      }
    },
    [selectedField, setChecked, handleChangeTableSearch]
  );

  const onSelectDropdownField = useCallback(
    ({ value }: DropdownChangeEvent) => {
      setSelectedField(value);

      if (value.code === NONE && getQueryMethod) {
        getQueryMethod();
      }

      if (BOOLEAN_VALUES.includes(value.code) && handleChangeTableSearch) {
        handleChangeTableSearch({
          search: false,
          byField: value.code,
        });
      }
    },
    [handleChangeTableSearch, getQueryMethod, setSelectedField]
  );

  const dropdownFields = useMemo(
    () => [
      { name: "None", code: NONE },
      ...fields.map(({ field }) => ({
        name: capitalize(field),
        code: field,
      })),
    ],
    [fields]
  ) as DropdownField[];

  useEffect(() => {
    if (dropdownFields && dropdownFields.length > 1) {
      setSavedFields(dropdownFields);
    }
  }, [dropdownFields, setSavedFields]);

  useEffect(() => {
    return () => getQueryMethod();
  }, [getQueryMethod]);

  return {
    isChecked,
    onChangeSwitch,
    onChangeSearch,
    onSelectDropdownField,
    selectedField,
    dropdownFields: dropdownFields.length > 1 ? dropdownFields : savedFields,
  };
};

export default useResourceTableSearch;
