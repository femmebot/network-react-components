"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-styled-components");
const forEach_1 = require("lodash/forEach");
const react_test_renderer_1 = require("react-test-renderer");
exports.expectSnapshotMatches = (node) => {
    const tree = react_test_renderer_1.default.create(node).toJSON();
    expect(tree).toMatchSnapshot();
};
const makeSpec = (title, example) => {
    it(title, () => {
        const tree = react_test_renderer_1.default.create(example()).toJSON();
        expect(tree).toMatchSnapshot();
    });
};
const itRenders = (examples) => {
    if (typeof examples === 'function') {
        makeSpec('renders', examples);
    }
    else {
        forEach_1.default(examples, (example, when) => makeSpec(`renders ${when}`, example));
    }
};
exports.default = itRenders;
//# sourceMappingURL=itRenders.js.map