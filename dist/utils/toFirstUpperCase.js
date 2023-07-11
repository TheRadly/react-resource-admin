"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.string.replace.js");
const toFirstUpperCase = function (str) {
  let withSpacing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);
  return withSpacing ? capitalizedString.replace(/([A-Z])/g, " $1").trim() : capitalizedString;
};
var _default = toFirstUpperCase;
exports.default = _default;
//# sourceMappingURL=toFirstUpperCase.js.map