"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const core_1 = require("@material-ui/core");
const lodash_1 = require("lodash");
const FieldError_1 = require("~shared/components/atoms/FieldError");
const FieldLabel_1 = require("~shared/components/atoms/FieldLabel");
const index_1 = require("~shared/styles/index");
const utils_1 = require("~shared/styles/utils");
const objectifyOptions_1 = require("~shared/utils/objectifyOptions");
const selectFontStyle = {
    fontFamily: index_1.typography.sans,
    fontSize: utils_1.pxToRem(16),
    lineHeight: 1.1,
    letterSpacing: utils_1.pxToRem(0.6),
    textTransform: 'inherit',
    fontWeight: 'normal',
};
/* need to type as any because textTransform and fontWeight arent typed
 * correctly on material-ui */
const menuItemStyles = {
    root: Object.assign({}, selectFontStyle, { color: index_1.colors.grayBoulder, '&:hover': {
            color: index_1.colors.black,
            background: 'none',
        } }),
    selected: {
        background: `${index_1.colors.white} !important`,
        color: index_1.colors.black,
    },
};
const BaseMenuItem = (props) => react_1.default.createElement(core_1.MenuItem, Object.assign({}, props));
const MenuItem = core_1.withStyles(menuItemStyles)(BaseMenuItem);
const FormControl = styled_components_1.default(core_1.FormControl) `
  ${index_1.sizeStyles};
  ${index_1.spaceStyles};
  && > div,
  && input {
    ${utils_1.styleObjectToTemplate(selectFontStyle)};
  }
`;
const PlaceholderValue = styled_components_1.default.div `
  color: ${index_1.colors.silver};
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Checkbox = styled_components_1.default.div `
  width: 16px;
  height: 16px;
  border: 1px solid currentColor;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  margin-right: ${utils_1.pxToRem(8)};
  ${(props) => props.checked ? 'background: currentColor' : `background: ${index_1.colors.white}`};
`;
const PLACEHOLDER_VALUE = 'PLACEHOLDER';
const selectValue = (options) => (v) => {
    const option = options.find(({ value }) => value === v);
    if (option) {
        return option.label;
    }
    return undefined;
};
const renderSelectedValue = (options, placeholder) => selected => {
    if (!selected) {
        return undefined;
    }
    if (typeof selected === 'string' || typeof selected === 'number') {
        if (selected === PLACEHOLDER_VALUE && placeholder) {
            return react_1.default.createElement(PlaceholderValue, null, placeholder);
        }
        return selectValue(options)(selected);
    }
    if (!lodash_1.isArray(selected)) {
        return '';
    }
    // selected values that are not options get thrown out
    selected = selected.filter(i => lodash_1.find(options, o => (typeof o === 'string' ? o === i : o.value === i)));
    if (selected.length === 0 && placeholder) {
        return react_1.default.createElement(PlaceholderValue, null, placeholder);
    }
    return selected
        .map(selectValue(options))
        .filter(v => v)
        .join(', ');
};
const setInitialValue = (value) => {
    if (typeof value === 'string') {
        return value === '' ? PLACEHOLDER_VALUE : value;
    }
    return value.length === 0 ? [PLACEHOLDER_VALUE] : value;
};
const filterSinglePlaceholderOnChange = (onChange) => (event) => {
    if (event.target.value === PLACEHOLDER_VALUE) {
        event.target.value = '';
    }
    onChange(event);
};
const filterMultiPlaceholderOnChange = (onChange) => (event) => {
    if (lodash_1.isArray(event.target.value)) {
        event.target.value = event.target.value.filter(v => v !== PLACEHOLDER_VALUE);
    }
    onChange(event);
};
const StyledSelect = styled_components_1.default((_a) => {
    var { tallLabel: _tallLabel } = _a, props = __rest(_a, ["tallLabel"]);
    return react_1.default.createElement(core_1.Select, Object.assign({}, props));
}) `
  && {
    > div > div {
      border-bottom: 1px solid ${index_1.colors.black};
    }
    [role='button'] {
      text-transform: none;
    }
    label + & {
      margin-top: ${({ tallLabel }) => tallLabel ? utils_1.pxToRem(36) : ''};
    }
  }
`;
const SelectField = (_a) => {
    var { label, className, onChange, value, id, disabled, error, multiple, options, name, placeholder, tallLabel, fullWidth, onBlur: _onBlur } = _a, styleProps = __rest(_a, ["label", "className", "onChange", "value", "id", "disabled", "error", "multiple", "options", "name", "placeholder", "tallLabel", "fullWidth", "onBlur"]);
    const objectOptions = objectifyOptions_1.default(options);
    const filterPlaceholder = multiple
        ? filterMultiPlaceholderOnChange
        : filterSinglePlaceholderOnChange;
    return (react_1.default.createElement(FormControl, Object.assign({ id: `form-control-${id}` }, styleProps, { disabled: disabled, fullWidth: fullWidth, error: !!error, className: className }),
        label && react_1.default.createElement(FieldLabel_1.default, { htmlFor: id }, label),
        react_1.default.createElement(StyledSelect, { id: id, error: !!error, disabled: disabled, disableUnderline: true, multiple: multiple, renderValue: renderSelectedValue(objectOptions, placeholder), name: name, inputProps: {
                onChange: filterPlaceholder(onChange),
            }, value: setInitialValue(value), tallLabel: tallLabel }, objectOptions.map(option => (react_1.default.createElement(MenuItem, { key: option.value, value: option.value },
            multiple && react_1.default.createElement(Checkbox, { checked: value.includes(option.value) }),
            option.label)))),
        error && react_1.default.createElement(FieldError_1.default, null, error)));
};
exports.default = SelectField;
//# sourceMappingURL=SelectField.js.map