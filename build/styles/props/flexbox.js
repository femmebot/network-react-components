"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const flexProperties = [
    'alignContent',
    'alignItems',
    'alignSelf',
    'display',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'justifyContent',
    'order',
];
const flexbox = (props) => lodash_1.pick(props, flexProperties);
exports.default = flexbox;
//# sourceMappingURL=flexbox.js.map