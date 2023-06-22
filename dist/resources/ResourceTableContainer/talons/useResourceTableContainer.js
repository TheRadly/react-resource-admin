"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _lodash = _interopRequireDefault(require("lodash"));
var _staticTexts = require("../../../staticTexts");
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useResourceTableContainer = _ref => {
  let {
    getQueryMethod,
    deleteQueryMethod
  } = _ref;
  const [order, setOrder] = (0, _react.useState)(_staticTexts.ASC_SORT);
  const [selectedValues, setSelectedValues] = (0, _react.useState)([]);
  const [isSelectable, setSelectable] = (0, _react.useState)(false);
  const [isEditable, setEditable] = (0, _react.useState)(false);
  const [isDeleteClicked, setDeleteClicked] = (0, _react.useState)(false);
  const debouncedGetSearchValue = _lodash.default.debounce(_ref2 => {
    let {
      search,
      byField
    } = _ref2;
    getQueryMethod({
      extraSortFields: {
        filter: {
          [byField]: search
        }
      }
    });
  }, 1000);
  const handleDeleteClick = (0, _react.useCallback)(() => {
    setDeleteClicked(true);
  }, [setDeleteClicked]);
  const handleChangeEditable = (0, _react.useCallback)(() => {
    setEditable(prev => !prev);
  }, [setEditable]);
  const handleChangeSelection = (0, _react.useCallback)(event => {
    setSelectedValues(event.value);
  }, [setSelectedValues]);
  const handleChangeSelectMode = (0, _react.useCallback)(() => {
    setSelectable(prev => {
      if (prev) {
        setSelectedValues([]);
      }
      return !prev;
    });
  }, [setSelectedValues, setSelectable]);
  const handleSortField = (0, _react.useCallback)(_ref3 => {
    let {
      sortField
    } = _ref3;
    setOrder(prev => prev === _staticTexts.ASC_SORT ? _staticTexts.DESC_SORT : _staticTexts.ASC_SORT);
    if (order) {
      getQueryMethod({
        extraSortFields: {
          sort: {
            by: sortField,
            order
          }
        }
      });
    }
  }, [order, setOrder, getQueryMethod]);
  const handleChangeTableSearch = (0, _react.useCallback)(_ref4 => {
    let {
      search,
      byField
    } = _ref4;
    debouncedGetSearchValue({
      search,
      byField
    });
  }, [debouncedGetSearchValue]);
  (0, _react.useEffect)(() => {
    if (isDeleteClicked && selectedValues.length) {
      const parsedIds = selectedValues.map(_ref5 => {
        let {
          id
        } = _ref5;
        return id;
      });
      deleteQueryMethod({
        variables: {
          ids: parsedIds
        }
      });
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
    selectedValues
  };
};
var _default = useResourceTableContainer;
exports.default = _default;
//# sourceMappingURL=useResourceTableContainer.js.map