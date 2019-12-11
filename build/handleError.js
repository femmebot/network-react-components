"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var _console;

  // tbd, should probably report to an error reporting service, and
  // show some kind of global "Something went wrong!  Reload and try
  // again" message
  // tslint:disable-next-line no-console
  (_console = console).error.apply(_console, arguments);

  if (window.trackEror) {
    var _window;

    (_window = window).trackError.apply(_window, arguments);
  }
};

exports["default"] = _default;