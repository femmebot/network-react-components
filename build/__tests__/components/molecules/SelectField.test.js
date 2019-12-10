"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const SelectField_1 = require("~shared/components/molecules/SelectField");
const itRenders_1 = require("~shared/test-helpers/itRenders");
const options = [
    { value: 'option1', label: 'Option 1' },
    {
        value: 'option2',
        label: 'Option 2',
    },
    { value: 'option3', label: 'Option 3' },
    {
        value: 'option4',
        label: 'Option 4',
    },
];
describe('single select', () => {
    itRenders_1.default({
        unselected: () => (React.createElement(SelectField_1.default, { id: "id", options: options, value: "", onChange: jest.fn(), onBlur: jest.fn() })),
        disabled: () => (React.createElement(SelectField_1.default, { id: "id", options: options, disabled: true, value: "", onChange: jest.fn(), onBlur: jest.fn() })),
        'with value': () => (React.createElement(SelectField_1.default, { id: "id", options: options, error: "Some error", value: options[0].value, onChange: jest.fn(), onBlur: jest.fn() })),
        placeholder: () => (React.createElement(SelectField_1.default, { id: "id", options: options, placeholder: "Placeholder", value: "", onChange: jest.fn(), onBlur: jest.fn() })),
        'with label': () => (React.createElement(SelectField_1.default, { id: "id", options: options, label: "Label", value: "", onChange: jest.fn(), onBlur: jest.fn() })),
        'without underline': () => (React.createElement(SelectField_1.default, { id: "id", options: options, value: "", onChange: jest.fn(), onBlur: jest.fn() })),
        'with error': () => (React.createElement(SelectField_1.default, { id: "id", options: options, error: "Some error", value: "", onChange: jest.fn(), onBlur: jest.fn() })),
        'with tallLabel': () => (React.createElement(SelectField_1.default, { id: "id", options: options, error: "Some error", value: "", onChange: jest.fn(), onBlur: jest.fn(), tallLabel: true })),
    });
});
describe('multiselect', () => {
    itRenders_1.default({
        unselected: () => (React.createElement(SelectField_1.default, { id: "id", multiple: true, options: options, value: [], onChange: jest.fn(), onBlur: jest.fn() })),
        'with single value': () => (React.createElement(SelectField_1.default, { id: "id", multiple: true, options: options, error: "Some error", value: [options[0].value], onChange: jest.fn(), onBlur: jest.fn() })),
        'with multiple values': () => (React.createElement(SelectField_1.default, { id: "id", multiple: true, options: options, error: "Some error", value: options.map(o => o.value), onChange: jest.fn(), onBlur: jest.fn() })),
        'with label': () => (React.createElement(SelectField_1.default, { id: "id", multiple: true, options: options, label: "Label", value: [], onChange: jest.fn(), onBlur: jest.fn() })),
        'without underline': () => (React.createElement(SelectField_1.default, { id: "id", multiple: true, options: options, value: [], onChange: jest.fn(), onBlur: jest.fn() })),
        disabled: () => (React.createElement(SelectField_1.default, { id: "id", multiple: true, options: options, disabled: true, value: [], onChange: jest.fn(), onBlur: jest.fn() })),
        'with error': () => (React.createElement(SelectField_1.default, { id: "id", multiple: true, options: options, error: "Some error", value: [], onChange: jest.fn(), onBlur: jest.fn() })),
    });
});
//# sourceMappingURL=SelectField.test.js.map