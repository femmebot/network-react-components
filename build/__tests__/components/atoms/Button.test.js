"use strict";

var _react = _interopRequireDefault(require("react"));

var _itRenders = _interopRequireDefault(require("../../../test-helpers/itRenders"));

var _Button = _interopRequireDefault(require("../../../components/atoms/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _itRenders["default"])({
  "default": function _default() {
    return _react["default"].createElement(_Button["default"], {
      onClick: jest.fn()
    }, "Content");
  },
  disabled: function disabled() {
    return _react["default"].createElement(_Button["default"], {
      disabled: true,
      onClick: jest.fn()
    }, "Disabled");
  },
  'as a link': function asALink() {
    return _react["default"].createElement(_Button["default"], {
      disabled: true,
      href: "#"
    }, "Link");
  },
  'submit type': function submitType() {
    return _react["default"].createElement(_Button["default"], {
      type: "submit"
    }, "Submit");
  },
  wide: function wide() {
    return _react["default"].createElement(_Button["default"], {
      wide: true,
      href: "#"
    }, "Link");
  },
  'outline variant': function outlineVariant() {
    return _react["default"].createElement(_Button["default"], {
      variant: "outline",
      href: "#"
    }, "Link");
  },
  'commit variant': function commitVariant() {
    return _react["default"].createElement(_Button["default"], {
      variant: "commit"
    }, "Commit");
  }
});