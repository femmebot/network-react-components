"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onCreate = exports.onUpdate = exports.getChangedValues = void 0;

var _reduce2 = _interopRequireDefault(require("lodash/reduce"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _stores = require("~stores");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getChangedValues = function getChangedValues(initialValues, values) {
  return (0, _reduce2["default"])(values, function (acc, v, k) {
    if (!(0, _isEqual2["default"])(initialValues[k], v)) {
      acc[k] = v;
    }

    return acc;
  }, {});
};

exports.getChangedValues = getChangedValues;

var onUpdate = function onUpdate(initialValues, save) {
  return function _callee(values, _ref) {
    var setSubmitting, setErrors, _updates;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setSubmitting = _ref.setSubmitting, setErrors = _ref.setErrors;
            _context.prev = 1;
            _updates = getChangedValues(initialValues, values);

            if ((0, _isEmpty2["default"])(_updates)) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return regeneratorRuntime.awrap(save(_updates));

          case 6:
            _stores.saveIndicatorStore.show();

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            setErrors(_context.t0.errors);
            throw _context.t0;

          case 13:
            _context.prev = 13;
            setSubmitting(false);
            return _context.finish(13);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9, 13, 16]]);
  };
};

exports.onUpdate = onUpdate;

var onCreate = function onCreate(create) {
  return function _callee2(values, _ref2) {
    var setSubmitting, setErrors;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setSubmitting = _ref2.setSubmitting, setErrors = _ref2.setErrors;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(create(values));

          case 4:
            _stores.saveIndicatorStore.show();

            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            setErrors(_context2.t0.errors);
            throw _context2.t0;

          case 11:
            _context2.prev = 11;
            setSubmitting(false);
            return _context2.finish(11);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 7, 11, 14]]);
  };
};

exports.onCreate = onCreate;