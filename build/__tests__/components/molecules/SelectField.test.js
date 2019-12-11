"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _SelectField = _interopRequireDefault(require("../../../components/molecules/SelectField"));

var _itRenders = _interopRequireDefault(require("../../../test-helpers/itRenders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var options = [{
  value: 'option1',
  label: 'Option 1'
}, {
  value: 'option2',
  label: 'Option 2'
}, {
  value: 'option3',
  label: 'Option 3'
}, {
  value: 'option4',
  label: 'Option 4'
}];
describe('single select', function () {
  (0, _itRenders["default"])({
    unselected: function unselected() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        options: options,
        value: "",
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    disabled: function disabled() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        options: options,
        disabled: true,
        value: "",
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'with value': function withValue() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        options: options,
        error: "Some error",
        value: options[0].value,
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    placeholder: function placeholder() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        options: options,
        placeholder: "Placeholder",
        value: "",
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'with label': function withLabel() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        options: options,
        label: "Label",
        value: "",
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'without underline': function withoutUnderline() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        options: options,
        value: "",
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'with error': function withError() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        options: options,
        error: "Some error",
        value: "",
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'with tallLabel': function withTallLabel() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        options: options,
        error: "Some error",
        value: "",
        onChange: jest.fn(),
        onBlur: jest.fn(),
        tallLabel: true
      });
    }
  });
});
describe('multiselect', function () {
  (0, _itRenders["default"])({
    unselected: function unselected() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        multiple: true,
        options: options,
        value: [],
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'with single value': function withSingleValue() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        multiple: true,
        options: options,
        error: "Some error",
        value: [options[0].value],
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'with multiple values': function withMultipleValues() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        multiple: true,
        options: options,
        error: "Some error",
        value: options.map(function (o) {
          return o.value;
        }),
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'with label': function withLabel() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        multiple: true,
        options: options,
        label: "Label",
        value: [],
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'without underline': function withoutUnderline() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        multiple: true,
        options: options,
        value: [],
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    disabled: function disabled() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        multiple: true,
        options: options,
        disabled: true,
        value: [],
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    },
    'with error': function withError() {
      return React.createElement(_SelectField["default"], {
        id: "id",
        multiple: true,
        options: options,
        error: "Some error",
        value: [],
        onChange: jest.fn(),
        onBlur: jest.fn()
      });
    }
  });
});