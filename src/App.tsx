import ResourceTableContainer from "./resources/ResourceTableContainer";

const App = () => (
  <ResourceTableContainer
    pageTitle="Accounts"
    values={[]}
    loading={false}
    tableFields={[]}
    paginatorCount={1}
    showMode
    deleteQueryMethod={() => {}}
    getQueryMethod={() => {}}
    onEdit={() => {}}
    emptyMessage="Empty array"
    searchPlaceholder="Search placeholder"
    dropdownPlaceholder="Dropdown placeholder"
    createLabel="Create"
    deleteConfirmMessage="Are you sure to want to delete this item?"
    disabledTooltipDeleteLabel="Select items for enable delete button"
    onCreate={() => {}}
    confirmDeleteMessage="Are you sure to want to delete this item?"
    onRowClick={() => {}}
  />
);

export default App;
