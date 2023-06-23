"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useResourceTableToolbar = () => {
  const [isDisplaySearch, setDisplaySearch] = (0, _react.useState)(false);
  const handleChangeSearchMode = (0, _react.useCallback)(() => {
    setDisplaySearch(prev => !prev);
  }, [setDisplaySearch]);
  return {
    isDisplaySearch,
    handleChangeSearchMode
  };
};
var _default = useResourceTableToolbar;
exports.default = _default;
//# sourceMappingURL=useResourceTableToolbar.js.map