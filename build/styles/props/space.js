"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const margin_1 = require("~shared/styles/margin");
const padding_1 = require("~shared/styles/padding");
const REG = /^[mp][trblxy]?$/;
const properties = {
    m: margin_1.default,
    p: padding_1.default,
};
const directions = {
    t: 'top',
    r: 'right',
    b: 'bottom',
    l: 'left',
    x: 'x',
    y: 'y',
};
const getProperty = (key) => {
    const [a, b] = key.split('');
    const prop = properties[a];
    const dir = directions[b];
    const func = dir ? prop[dir] : prop;
    return func;
};
const space = (props) => {
    const keys = Object.keys(props)
        .filter(key => REG.test(key))
        .sort();
    return keys.map(key => {
        const value = props[key];
        if (lodash_1.isUndefined(value)) {
            return {};
        }
        const property = getProperty(key);
        return property(value);
    });
};
exports.default = space;
//# sourceMappingURL=space.js.map