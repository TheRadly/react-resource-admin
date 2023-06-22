"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _staticTexts = require("../staticTexts");
const typenameIdFilter = (obj, extraValues) => {
  let newObject = {};
  const objectEntries = Object.entries(obj);
  for (let [key, value] of objectEntries) {
    if (key !== _staticTexts.ID && key !== _staticTexts.TYPENAME && !(extraValues !== null && extraValues !== void 0 && extraValues.includes(key))) {
      newObject = {
        ...newObject,
        [key]: value
      };
    }
  }
  return newObject;
};
var _default = typenameIdFilter;
exports.default = _default;
//# sourceMappingURL=typenameIdFilter.js.map