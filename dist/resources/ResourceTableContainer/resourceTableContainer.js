"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _ResourceTableToolbar = _interopRequireDefault(require("../ResourceTableToolbar"));
var _resourceTableContainerWrapper = _interopRequireDefault(require("./styled/resourceTableContainerWrapper"));
var _ResourceTableList = _interopRequireDefault(require("../ResourceTableList"));
var _useResourceTableContainer = _interopRequireDefault(require("./talons/useResourceTableContainer"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceTableContainer = _ref => {
  let {
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
    hideCreate,
    tableListRows,
    hideRowActions,
    hideMultiSelect
  } = _ref;
  const {
    handleDeleteClick,
    handleSortField,
    handleChangeTableSearch,
    handleChangeSelection,
    handleChangeSelectMode,
    isSelectable,
    selectedValues
  } = (0, _useResourceTableContainer.default)({
    getQueryMethod,
    deleteQueryMethod
  });
  return (0, _jsxRuntime.jsxs)(_resourceTableContainerWrapper.default, {
    children: [(0, _jsxRuntime.jsx)(_ResourceTableToolbar.default, {
      hideCreate: hideCreate,
      searchPlaceholder: searchPlaceholder,
      dropdownPlaceholder: dropdownPlaceholder,
      createLabel: createLabel,
      deleteConfirmMessage: deleteConfirmMessage,
      disabledTooltipDeleteLabel: disabledTooltipDeleteLabel,
      onCreate: onCreate,
      hideSearch: hideSearch,
      getQueryMethod: getQueryMethod,
      tableFields: tableFields,
      handleChangeTableSearch: handleChangeTableSearch,
      selectedValues: selectedValues,
      isSelectable: isSelectable,
      handleChangeSelectMode: handleChangeSelectMode,
      handleDeleteClick: handleDeleteClick,
      pageTitle: pageTitle,
      excludedSearchFields: excludedSearchFields,
      hideMultiSelect: hideMultiSelect
    }), (0, _jsxRuntime.jsx)(_ResourceTableList.default, {
      rows: tableListRows,
      confirmDeleteMessage: confirmDeleteMessage,
      onRowClick: onRowClick,
      deleteQueryMethod: deleteQueryMethod,
      getQueryMethod: getQueryMethod,
      handleSortField: handleSortField,
      onClickEditField: onEdit,
      isSelectable: isSelectable,
      selection: selectedValues,
      onSelectionChange: handleChangeSelection,
      values: values,
      loading: loading,
      emptyMessage: emptyMessage,
      fields: tableFields,
      paginatorCount: paginatorCount,
      showMode: showMode,
      hideRowActions: hideRowActions,
      children: children
    })]
  });
};
var _default = ResourceTableContainer;
exports.default = _default;
//# sourceMappingURL=resourceTableContainer.js.map