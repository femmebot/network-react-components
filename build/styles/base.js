"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _utils = require("./utils");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      html {\n        font-family: ", ";\n      }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defineFontFace = function defineFontFace(fontFace) {
  return "\n@font-face {\n  ".concat((0, _utils.styleObjectToTemplate)(fontFace), "\n");
};

var setBaseStyles = function setBaseStyles(theme, fontFaces) {
  // tslint:disable-next-line:no-unused-expression
  (0, _styledComponents.injectGlobal)(_templateObject(), fontFaces.map(defineFontFace).join('\n')); // tslint:disable-next-line:no-unused-expression

  (0, _styledComponents.injectGlobal)(_templateObject2(), theme.typography.fontFamily);
};

var _default = setBaseStyles;
exports["default"] = _default;