"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const React = require("react");
const styled_components_1 = require("styled-components");
const index_1 = require("~shared/styles/index");
const themes_1 = require("~shared/styles/themes");
const StyledFieldError = themes_1.withTheme(styled_components_1.default(core_1.FormHelperText) `
  ${index_1.sizeStyles};
  ${index_1.spaceStyles};
  ${(_props) => ''};
`);
const FieldError = props => (React.createElement(StyledFieldError, Object.assign({ error: true }, props)));
exports.default = FieldError;
//# sourceMappingURL=FieldError.js.map