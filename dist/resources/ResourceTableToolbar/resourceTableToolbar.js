"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _toolbar = require("primereact/toolbar");
var _ResourceTableTitle = _interopRequireDefault(require("../ResourceTableTitle"));
var _resourceTableActions = _interopRequireDefault(require("../ResourceTableActions/resourceTableActions"));
var _useResourceTableToolbar = _interopRequireDefault(require("./talons/useResourceTableToolbar"));
var _resourceTableSearch = _interopRequireDefault(require("../ResourceTableSearch/resourceTableSearch"));
var _resourceTableToolbarWrapper = _interopRequireDefault(require("./styled/resourceTableToolbarWrapper"));
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
    dropdownPlaceholder
  } = _ref;
  const {
    handleChangeSearchMode,
    isDisplaySearch
  } = (0, _useResourceTableToolbar.default)();
  const start = !hideTitle ? _react.default.createElement(_ResourceTableTitle.default, null, pageTitle) : null;
  const end = !hideActions ? _react.default.createElement(_resourceTableActions.default, {
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
    handleDeleteClick: handleDeleteClick
  }) : null;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_resourceTableToolbarWrapper.default, null, _react.default.createElement(_toolbar.Toolbar, {
    start: start,
    end: end
  })), !hideSearch && !isSelectable && isDisplaySearch ? _react.default.createElement(_resourceTableSearch.default, {
    dropdownPlaceholder: dropdownPlaceholder,
    searchPlaceholder: searchPlaceholder,
    excludedSearchFields: excludedSearchFields,
    getQueryMethod: getQueryMethod,
    handleChangeTableSearch: handleChangeTableSearch,
    fields: tableFields
  }) : null);
};
var _default = ResourceTableToolbar;
exports.default = _default;
//# sourceMappingURL=resourceTableToolbar.js.map