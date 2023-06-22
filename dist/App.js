"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ResourceTableContainer = _interopRequireDefault(require("./resources/ResourceTableContainer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const App = () => React.createElement(_ResourceTableContainer.default, {
  pageTitle: "Accounts",
  values: [],
  loading: false,
  tableFields: [],
  paginatorCount: 1,
  showMode: true,
  deleteQueryMethod: () => {},
  getQueryMethod: () => {},
  onEdit: () => {},
  emptyMessage: "Empty array",
  searchPlaceholder: "Search placeholder",
  dropdownPlaceholder: "Dropdown placeholder",
  createLabel: "Create",
  deleteConfirmMessage: "Are you sure to want to delete this item?",
  disabledTooltipDeleteLabel: "Select items for enable delete button",
  onCreate: () => {},
  confirmDeleteMessage: "Are you sure to want to delete this item?",
  onRowClick: () => {}
});
var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map