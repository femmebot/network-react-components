"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gotham_Book_otf_1 = require("~shared/fonts/Gotham-Book.otf");
const Gotham_Medium_otf_1 = require("~shared/fonts/Gotham-Medium.otf");
const Sentinel_Book_otf_1 = require("~shared/fonts/Sentinel-Book.otf");
const Sentinel_Medium_otf_1 = require("~shared/fonts/Sentinel-Medium.otf");
const Sentinel_MediumItal_otf_1 = require("~shared/fonts/Sentinel-MediumItal.otf");
const fontUrl = (url) => `url('${url}')`;
exports.sentinelFontFace = [
    {
        fontFamily: 'Sentinel',
        src: fontUrl(Sentinel_Medium_otf_1.default),
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    {
        fontFamily: 'Sentinel',
        src: fontUrl(Sentinel_MediumItal_otf_1.default),
        fontWeight: 'normal',
        fontStyle: 'italic',
    },
    {
        fontFamily: 'Sentinel',
        src: fontUrl(Sentinel_Book_otf_1.default),
        fontWeight: 400,
        fontStyle: 'normal',
    },
];
exports.gothamFontFace = [
    {
        fontFamily: 'Gotham',
        src: fontUrl(Gotham_Medium_otf_1.default),
        fontWeight: 500,
        fontStyle: 'normal',
    },
    {
        fontFamily: 'Gotham',
        src: fontUrl(Gotham_Book_otf_1.default),
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
];
exports.sans = '"Gotham", sans-serif';
exports.serif = '"Sentinel", serif';
// TODO: Remove me
exports.gothamBookUrl = Gotham_Book_otf_1.default;
//# sourceMappingURL=typography.js.map