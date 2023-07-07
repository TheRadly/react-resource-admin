"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolbar = require("primereact/toolbar");
var _ResourceTableTitle = _interopRequireDefault(require("../ResourceTableTitle"));
var _resourceTableActions = _interopRequireDefault(require("../ResourceTableActions/resourceTableActions"));
var _useResourceTableToolbar = _interopRequireDefault(require("./talons/useResourceTableToolbar"));
var _resourceTableSearch = _interopRequireDefault(require("../ResourceTableSearch/resourceTableSearch"));
var _resourceTableToolbarWrapper = _interopRequireDefault(require("./styled/resourceTableToolbarWrapper"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceTableToolbar = _ref => {
  let {
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
    hideMultiSelect
  } = _ref;
  const {
    handleChangeSearchMode,
    isDisplaySearch
  } = (0, _useResourceTableToolbar.default)();
  const start = !hideTitle ? (0, _jsxRuntime.jsx)(_ResourceTableTitle.default, {
    children: pageTitle
  }) : null;
  const end = !hideActions ? (0, _jsxRuntime.jsx)(_resourceTableActions.default, {
    hideCreate: hideCreate,
    createLabel: createLabel,
    deleteConfirmMessage: deleteConfirmMessage,
    disabledTooltipDeleteLabel: disabledTooltipDeleteLabel,
    selectedValues: selectedValues,
    isSelectable: isSelectable,
    isDisplaySearch: isDisplaySearch,
    hideSearch: hideSearch,
    handleChangeSelectMode: handleChangeSelectMode,
    handleCreateButton: onCreate,
    handleChangeSearchMode: handleChangeSearchMode,
    handleDeleteClick: handleDeleteClick,
    hideMultiSelect: hideMultiSelect
  }) : null;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_resourceTableToolbarWrapper.default, {
      children: (0, _jsxRuntime.jsx)(_toolbar.Toolbar, {
        start: start,
        end: end
      })
    }), !hideSearch && !isSelectable && isDisplaySearch ? (0, _jsxRuntime.jsx)(_resourceTableSearch.default, {
      dropdownPlaceholder: dropdownPlaceholder,
      searchPlaceholder: searchPlaceholder,
      excludedSearchFields: excludedSearchFields,
      getQueryMethod: getQueryMethod,
      handleChangeTableSearch: handleChangeTableSearch,
      fields: tableFields
    }) : null]
  });
};
var _default = ResourceTableToolbar;
exports.default = _default;
//# sourceMappingURL=resourceTableToolbar.js.map