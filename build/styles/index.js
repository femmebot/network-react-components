"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("~shared/styles/utils");
const colors = require("./constants/colors");
exports.colors = colors;
const creativeQualityColors = require("./constants/creativeQualityColors");
exports.creativeQualityColors = creativeQualityColors;
const legacyColors = require("./constants/legacyColors");
exports.legacyColors = legacyColors;
const flexbox_1 = require("./props/flexbox");
exports.flexbox = flexbox_1.default;
const size_1 = require("./props/size");
exports.size = size_1.default;
const space_1 = require("./props/space");
exports.space = space_1.default;
const typography = require("./typography");
exports.typography = typography;
exports.sizeStyles = (props) => utils_1.styleObjectToTemplate(size_1.default(props));
exports.spaceStyles = (props) => space_1.default(props)
    .map(utils_1.styleObjectToTemplate)
    .join('\n');
exports.flexboxStyles = (props) => utils_1.styleObjectToTemplate(flexbox_1.default(props));
//# sourceMappingURL=index.js.map