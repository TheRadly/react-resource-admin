"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _config = require("../config");
var _lodash = require("lodash");
const NONE = "none";
const useResourceTableSearch = _ref => {
  let {
    handleChangeTableSearch,
    fields: propFields,
    getQueryMethod,
    excludedSearchFields
  } = _ref;
  const [isChecked, setChecked] = (0, _react.useState)(false);
  const [selectedField, setSelectedField] = (0, _react.useState)(null);
  const [savedFields, setSavedFields] = (0, _react.useState)(null);
  const fields = (0, _react.useMemo)(() => excludedSearchFields ? propFields.filter(item => !excludedSearchFields.includes(item)) : propFields, [excludedSearchFields, propFields]);
  const onChangeSearch = (0, _react.useCallback)(_ref2 => {
    let {
      target: {
        value
      }
    } = _ref2;
    if (handleChangeTableSearch && selectedField && selectedField.code !== NONE) {
      handleChangeTableSearch({
        search: value,
        byField: selectedField.code
      });
    }
  }, [selectedField, handleChangeTableSearch]);
  const onChangeSwitch = (0, _react.useCallback)(switchValue => {
    setChecked(switchValue);
    if (handleChangeTableSearch && selectedField) {
      handleChangeTableSearch({
        search: switchValue,
        byField: selectedField.code
      });
    }
  }, [selectedField, setChecked, handleChangeTableSearch]);
  const onSelectDropdownField = (0, _react.useCallback)(_ref3 => {
    let {
      value
    } = _ref3;
    setSelectedField(value);
    if (value.code === NONE && getQueryMethod) {
      getQueryMethod();
    }
    if (_config.BOOLEAN_VALUES.includes(value.code) && handleChangeTableSearch) {
      handleChangeTableSearch({
        search: false,
        byField: value.code
      });
    }
  }, [handleChangeTableSearch, getQueryMethod, setSelectedField]);
  const dropdownFields = (0, _react.useMemo)(() => [{
    name: "None",
    code: NONE
  }, ...fields.map(field => ({
    name: (0, _lodash.capitalize)(field),
    code: field
  }))], [fields]);
  (0, _react.useEffect)(() => {
    if (dropdownFields && dropdownFields.length > 1) {
      setSavedFields(dropdownFields);
    }
  }, [dropdownFields, setSavedFields]);
  (0, _react.useEffect)(() => {
    return () => getQueryMethod();
  }, []);
  return {
    isChecked,
    onChangeSwitch,
    onChangeSearch,
    onSelectDropdownField,
    selectedField,
    dropdownFields: dropdownFields.length > 1 ? dropdownFields : savedFields
  };
};
var _default = useResourceTableSearch;
exports.default = _default;
//# sourceMappingURL=useResourceTableSearch.js.map