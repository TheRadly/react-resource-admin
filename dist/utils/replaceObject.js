"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const replaceObject = (object, fields, reverse) => {
  let filteredObject = {};
  Object.keys(object).forEach(key => {
    if (!reverse && !fields.includes(key)) {
      filteredObject = {
        ...filteredObject,
        [key]: object[key]
      };
    } else if (reverse && fields.includes(key)) {
      filteredObject = {
        ...filteredObject,
        [key]: object[key]
      };
    }
  });
  return filteredObject;
};
var _default = replaceObject;
exports.default = _default;
//# sourceMappingURL=replaceObject.js.map