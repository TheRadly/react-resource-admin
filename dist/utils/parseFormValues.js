"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const parseFormValues = values => Object.keys(values).map(field => ({
  field,
  value: values[field]
}));
var _default = parseFormValues;
exports.default = _default;
//# sourceMappingURL=parseFormValues.js.map