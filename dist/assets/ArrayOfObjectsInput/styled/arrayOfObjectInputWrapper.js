"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayOfObjectsItems = exports.ArrayOfObjectsItemDataFields = exports.ArrayOfObjectsItemData = exports.ArrayOfObjectsItem = exports.ArrayOfObjectsInputsBox = exports.ArrayOfObjectsInputWrapper = exports.ArrayOfObjectsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const ArrayOfObjectsInputWrapper = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: ", " !important;\n\n  & > label {\n    font-size: 12px;\n    line-height: 12px;\n    color: var(--surface-600);\n    font-weight: 400;\n    font-family: var(--font-family);\n    text-transform: capitalize;\n  }\n\n  & > div {\n    width: 100%;\n  }\n"])), props => props.fullWidth ? "100%" : "50%");
exports.ArrayOfObjectsInputWrapper = ArrayOfObjectsInputWrapper;
const ArrayOfObjectsItems = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: var(--surface-100);\n  padding: 10px;\n  border-radius: 6px;\n\n  span {\n    font-family: var(--font-family);\n    font-size: 14px;\n    color: var(--surface-800);\n  }\n"])));
exports.ArrayOfObjectsItems = ArrayOfObjectsItems;
const ArrayOfObjectsContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n"])));
exports.ArrayOfObjectsContainer = ArrayOfObjectsContainer;
const ArrayOfObjectsInputsBox = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-radius: 6px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border: 1.5px solid var(--surface-300);\n"])));
exports.ArrayOfObjectsInputsBox = ArrayOfObjectsInputsBox;
const ArrayOfObjectsItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"])));
exports.ArrayOfObjectsItem = ArrayOfObjectsItem;
const ArrayOfObjectsItemData = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 10px;\n"])));
exports.ArrayOfObjectsItemData = ArrayOfObjectsItemData;
const ArrayOfObjectsItemDataFields = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n\n  &:first-child {\n    &::after {\n      content: \":\";\n    }\n  }\n"])));
exports.ArrayOfObjectsItemDataFields = ArrayOfObjectsItemDataFields;
//# sourceMappingURL=arrayOfObjectInputWrapper.js.map