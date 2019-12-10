"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const itRenders_1 = require("~shared/test-helpers/itRenders");
const Button_1 = require("~shared/components/atoms/Button");
itRenders_1.default({
    default: () => react_1.default.createElement(Button_1.default, { onClick: jest.fn() }, "Content"),
    disabled: () => (react_1.default.createElement(Button_1.default, { disabled: true, onClick: jest.fn() }, "Disabled")),
    'as a link': () => (react_1.default.createElement(Button_1.default, { disabled: true, href: "#" }, "Link")),
    'submit type': () => react_1.default.createElement(Button_1.default, { type: "submit" }, "Submit"),
    wide: () => (react_1.default.createElement(Button_1.default, { wide: true, href: "#" }, "Link")),
    'outline variant': () => (react_1.default.createElement(Button_1.default, { variant: "outline", href: "#" }, "Link")),
    'commit variant': () => react_1.default.createElement(Button_1.default, { variant: "commit" }, "Commit"),
});
//# sourceMappingURL=Button.test.js.map