import { Toolbar } from "primereact/toolbar";
import ResourceTableTitle from "../ResourceTableTitle";
import ResourceTableActions from "../ResourceTableActions/resourceTableActions";
import useResourceTableActions from "./talons/useResourceTableToolbar";
import ResourceTableSearch from "../ResourceTableSearch/resourceTableSearch";
import ResourceTableToolbarWrapper from "./styled/resourceTableToolbarWrapper";

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
  tableFields: string[];
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

const ResourceTableToolbar = ({
  handleDeleteClick,
  handleChangeSelectMode,
  handleChangeTableSearch,
  selectedValues,
  pageTitle,
  isSelectable,
  hideTitle,
  hideActions,
  hideSearch,
  tableFields,
  getQueryMethod,
  excludedSearchFields,
  createLabel,
  deleteConfirmMessage,
  disabledTooltipDeleteLabel,
  onCreate,
  searchPlaceholder,
  dropdownPlaceholder,
  hideCreate,
}: ResourceTableActionsProps) => {
  const { handleChangeSearchMode, isDisplaySearch } = useResourceTableActions();

  const start = !hideTitle ? (
    <ResourceTableTitle>{pageTitle}</ResourceTableTitle>
  ) : null;
  const end = !hideActions ? (
    <ResourceTableActions
      hideCreate={hideCreate}
      createLabel={createLabel}
      deleteConfirmMessage={deleteConfirmMessage}
      disabledTooltipDeleteLabel={disabledTooltipDeleteLabel}
      selectedValues={selectedValues}
      isSelectable={isSelectable}
      isDisplaySearch={isDisplaySearch}
      hideSearch={hideSearch}
      handleChangeSelectMode={handleChangeSelectMode}
      handleCreateButton={onCreate}
      handleChangeSearchMode={handleChangeSearchMode}
      handleDeleteClick={handleDeleteClick}
    />
  ) : null;

  return (
    <>
      <ResourceTableToolbarWrapper>
        <Toolbar start={start} end={end} />
      </ResourceTableToolbarWrapper>
      {!hideSearch && !isSelectable && isDisplaySearch ? (
        <ResourceTableSearch
          dropdownPlaceholder={dropdownPlaceholder}
          searchPlaceholder={searchPlaceholder}
          excludedSearchFields={excludedSearchFields}
          getQueryMethod={getQueryMethod}
          handleChangeTableSearch={handleChangeTableSearch}
          fields={tableFields}
        />
      ) : null}
    </>
  );
};

export default ResourceTableToolbar;
