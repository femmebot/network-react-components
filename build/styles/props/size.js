"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const setSize = (dim) => (dim > 1 ? `${dim}px` : `${dim * 100}%`);
const sizeProperties = ['width', 'height'];
const size = (props) => {
    const sizeProps = lodash_1.pick(props, sizeProperties);
    return lodash_1.mapValues(sizeProps, value => (typeof value === 'number' ? setSize(value) : value));
};
exports.default = size;
//# sourceMappingURL=size.js.map