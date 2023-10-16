"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _staticTexts = require("../../../staticTexts");
var _parseFormValues = _interopRequireDefault(require("../../../utils/parseFormValues"));
var _typenameIdFilter = _interopRequireDefault(require("../../../utils/typenameIdFilter"));
var _confirmpopup = require("primereact/confirmpopup");
var _pageActions = _interopRequireDefault(require("../../../resources/ResourceTableActions/styles/pageActions.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useInputField = _ref => {
  let {
    item,
    fieldsToExclude,
    extraFormCruds
  } = _ref;
  const {
    deleteQuery,
    deleteConfirmMessage
  } = extraFormCruds || {};
  const fields = (0, _parseFormValues.default)((0, _typenameIdFilter.default)(item, fieldsToExclude));
  const [handleDeleteValues] = deleteQuery();
  const onClickDelete = (0, _react.useCallback)(() => {
    handleDeleteValues({
      variables: {
        input: {
          ids: [item.id]
        }
      }
    });
  }, [handleDeleteValues, item]);
  const handleDeleteItem = (0, _react.useCallback)(event => {
    (0, _confirmpopup.confirmPopup)({
      target: event.target,
      message: deleteConfirmMessage,
      icon: _staticTexts.EXCLAMATION_TRIANGLE_ICON,
      accept: onClickDelete,
      acceptClassName: _pageActions.default.customAccept,
      rejectClassName: _pageActions.default.customReject
    });
  }, [deleteConfirmMessage, onClickDelete]);
  return {
    fields,
    handleDeleteItem
  };
};
var _default = useInputField;
exports.default = _default;
//# sourceMappingURL=useInputField.js.map