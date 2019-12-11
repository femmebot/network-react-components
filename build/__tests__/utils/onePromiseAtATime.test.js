"use strict";

var _onePromiseAtAtTime = _interopRequireDefault(require("../../utils/onePromiseAtAtTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it('only caches a promise that is currently beign executed', function _callee() {
  var count, myPromise;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          count = 0;
          myPromise = (0, _onePromiseAtAtTime["default"])(function () {
            return new Promise(function (resolve) {
              count += 1;
              setTimeout(resolve, 5);
            });
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(Promise.all([myPromise(), myPromise(), function () {
            expect(count).toEqual(1);
          }]));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(myPromise());

        case 6:
          expect(count).toEqual(2);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
it('forwards arguments and returns values', function _callee2() {
  var myPromise, result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          myPromise = (0, _onePromiseAtAtTime["default"])(function (v) {
            return Promise.resolve(v);
          });
          _context2.next = 3;
          return regeneratorRuntime.awrap(myPromise('value'));

        case 3:
          result = _context2.sent;
          expect(result).toEqual('value');

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
it('persists rejected promises', function _callee3() {
  var rejectedCount, rejectedPromise;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          rejectedCount = 0;
          rejectedPromise = (0, _onePromiseAtAtTime["default"])(function () {
            return new Promise(function (_resolve, reject) {
              rejectedCount += 1;
              setTimeout(function () {
                return reject('Something happened');
              }, 5);
            });
          });
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(rejectedPromise());

        case 5:
          _context3.next = 9;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](2);

        case 9:
          _context3.prev = 9;
          _context3.next = 12;
          return regeneratorRuntime.awrap(rejectedPromise());

        case 12:
          _context3.next = 16;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t1 = _context3["catch"](9);

        case 16:
          expect(rejectedCount).toEqual(2);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 7], [9, 14]]);
});