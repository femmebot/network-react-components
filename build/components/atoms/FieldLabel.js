"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const React = require("react");
const styled_components_1 = require("styled-components");
const utils_1 = require("~shared/styles/utils");
const FieldLabel = styled_components_1.default(core_1.InputLabel) `
  && {
    width: 100%;
    font-weight: 500;
    font-size: ${utils_1.pxToRem(12)};
    text-transform: uppercase;
    transform: translate(0, 1.5px) scale(1);
    line-height: 1.3;
  }
`;
exports.default = (props => React.createElement(FieldLabel, Object.assign({}, props, { shrink: true })));
//# sourceMappingURL=FieldLabel.js.map