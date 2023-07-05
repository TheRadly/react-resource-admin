import SearchInput from "../../assets/SearchInput";
import ResourceTableSearchWrapper from "./styled/resourceTableSearchWrapper";
import { Dropdown } from "primereact/dropdown";
import { TableSearchArgument } from "./models/TableSearchArgument";
import useResourceTableSearch from "./talons/useResourceTableSearch";
import { BOOLEAN_VALUES } from "./config";
import SwitchInput from "../../assets/SwitchInput/switchInput";

interface TableSearchProps {
  handleChangeTableSearch?: (arg: TableSearchArgument) => void;
  fields: { field: string; sortable?: boolean }[];
  getQueryMethod?: any;
  excludedSearchFields?: string[];
  searchPlaceholder: string;
  dropdownPlaceholder: string;
}

const ResourceTableSearch = ({
  handleChangeTableSearch,
  fields,
  getQueryMethod,
  excludedSearchFields,
  searchPlaceholder,
  dropdownPlaceholder,
}: TableSearchProps) => {
  const {
    isChecked,
    onChangeSwitch,
    dropdownFields,
    onChangeSearch,
    onSelectDropdownField,
    selectedField,
  } = useResourceTableSearch({
    handleChangeTableSearch,
    fields,
    getQueryMethod,
    excludedSearchFields,
  });

  return (
    <ResourceTableSearchWrapper>
      <Dropdown
        value={selectedField}
        onChange={onSelectDropdownField}
        options={dropdownFields}
        optionLabel="name"
        placeholder={dropdownPlaceholder}
      />
      {BOOLEAN_VALUES.includes(selectedField?.code as string) ? (
        <SwitchInput
          withLabel={false}
          checked={isChecked}
          onChange={onChangeSwitch}
        />
      ) : (
        <SearchInput
          placeholder={searchPlaceholder}
          onChange={onChangeSearch}
        />
      )}
    </ResourceTableSearchWrapper>
  );
};

export default ResourceTableSearch;
