"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useResourceTableList = _ref => {
  let {
    deleteQueryMethod,
    getQueryMethod,
    showMode,
    onRowClick
  } = _ref;
  const [paginatorFirst, setPaginatorFirst] = (0, _react.useState)(0);
  const handleChangePagination = (0, _react.useCallback)(event => {
    setPaginatorFirst(event.first);
    getQueryMethod({
      extraPaginationFields: {
        page: event.page + 1
      }
    });
  }, [setPaginatorFirst, getQueryMethod]);
  const handleRowClick = (0, _react.useCallback)(_ref2 => {
    let {
      data
    } = _ref2;
    if (showMode) {
      onRowClick(data.id);
    }
  }, [onRowClick, showMode]);
  const handleDeleteField = (0, _react.useCallback)(id => {
    deleteQueryMethod({
      variables: {
        ids: [id]
      }
    });
  }, [deleteQueryMethod]);
  return {
    handleRowClick,
    handleDeleteField,
    handleChangePagination,
    paginatorFirst
  };
};
var _default = useResourceTableList;
exports.default = _default;
//# sourceMappingURL=useResourceTableList.js.map