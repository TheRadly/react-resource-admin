"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _column = require("primereact/column");
var _datatable = require("primereact/datatable");
var _editDeleteColumnTemplate = _interopRequireDefault(require("./editDeleteColumnTemplate"));
var _staticTexts = require("../../staticTexts");
var _paginator = require("primereact/paginator");
var _paginatorWrapper = _interopRequireDefault(require("./styled/paginatorWrapper"));
var _resourceTableListWrapper = _interopRequireDefault(require("./styled/resourceTableListWrapper"));
var _useResourceTableList = _interopRequireDefault(require("./talons/useResourceTableList"));
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceTableList = _ref => {
  let {
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
    isCustomFields = false,
    getQueryMethod,
    paginatorCount,
    handleSortField,
    showMode = false,
    deleteQueryMethod,
    confirmDeleteMessage,
    onRowClick
  } = _ref;
  const {
    handleChangePagination,
    paginatorFirst,
    handleRowClick,
    handleDeleteField
  } = (0, _useResourceTableList.default)({
    getQueryMethod,
    showMode,
    deleteQueryMethod,
    onRowClick
  });
  const paginatorTemplate = {
    layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
    CurrentPageReport: options => "".concat(options.first, " / ").concat(options.last, " of ").concat(options.totalRecords)
  };
  return _react.default.createElement(_resourceTableListWrapper.default, null, _react.default.createElement(_datatable.DataTable, {
    selection: selection,
    onSelectionChange: onSelectionChange,
    selectionMode: isSelectable ? "checkbox" : showMode ? "single" : undefined,
    value: values,
    rows: 10,
    dataKey: "id",
    loading: loading,
    onSort: handleSortField,
    sortMode: "single",
    emptyMessage: emptyMessage,
    onRowClick: e => !isSelectable && handleRowClick(e)
  }, isSelectable && _react.default.createElement(_column.Column, {
    selectionMode: "multiple"
  }), isCustomFields ? children : fields && fields.length && fields.map(field => _react.default.createElement(_column.Column, {
    field: field,
    header: (0, _lodash.capitalize)(field),
    sortable: true
  })), !isSelectable && _react.default.createElement(_column.Column, {
    field: _staticTexts.ID,
    body: row => _react.default.createElement(_editDeleteColumnTemplate.default, {
      confirmDeleteMessage: confirmDeleteMessage,
      onClickEdit: () => onClickEditField && onClickEditField(row.id),
      onClickDelete: () => handleDeleteField(row.id)
    })
  })), isPaginator && !loading && _react.default.createElement(_paginatorWrapper.default, null, _react.default.createElement(_paginator.Paginator, {
    template: paginatorTemplate,
    first: paginatorFirst,
    rows: _staticTexts.DEFAULT_LIMIT,
    totalRecords: paginatorCount || 0,
    onPageChange: handleChangePagination
  })));
};
var _default = ResourceTableList;
exports.default = _default;
//# sourceMappingURL=resourceTableList.js.map