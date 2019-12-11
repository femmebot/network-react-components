"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var onePromiseAtATime = function onePromiseAtATime(f) {
  var promise;
  return function () {
    if (promise) {
      return promise;
    }

    return promise = f.apply(void 0, arguments).then(function (r) {
      promise = null;
      return r;
    })["catch"](function (e) {
      promise = null;
      return Promise.reject(e);
    });
  };
};

var _default = onePromiseAtATime;
exports["default"] = _default;