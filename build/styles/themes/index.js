"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createMuiTheme_1 = require("@material-ui/core/styles/createMuiTheme");
const withTheme_1 = require("@material-ui/core/styles/withTheme");
const styles_1 = require("~shared/styles");
const utils_1 = require("~shared/styles/utils");
exports.withTheme = (Component) => withTheme_1.default()(Component);
// export const withTheme = <P extends ConsistentWith<P, WithTheme>>(
//   Component: AnyComponent<P & WithTheme>
// ): React.ComponentType<Overwrite<P, Partial<WithTheme>>> =>
//   muiWithTheme()(Component)
const defaultTheme = createMuiTheme_1.default({
    typography: {
        fontFamily: styles_1.typography.sans,
        // default / no variant
        body1: {
            fontSize: '1rem',
        },
        // heading-1
        headline: {
            textTransform: 'uppercase',
            fontWeight: 500,
            fontSize: utils_1.pxToRem(32),
            letterSpacing: utils_1.pxToRem(1.2),
            color: styles_1.legacyColors.shark,
        },
        // heading-2
        subheading: {
            textTransform: 'uppercase',
            fontWeight: 500,
            fontSize: utils_1.pxToRem(20),
            letterSpacing: utils_1.pxToRem(0.5),
            color: styles_1.colors.black,
        },
        // heading-3
        title: {
            display: 'inline',
            fontSize: utils_1.pxToRem(14),
            fontWeight: 500,
            textTransform: 'uppercase',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 1.5,
            letterSpacing: utils_1.pxToRem(0.5),
        },
        // heading-4
        display1: {
            fontSize: utils_1.pxToRem(16),
            letterSpacing: utils_1.pxToRem(0.6),
            color: styles_1.colors.black,
            textTransform: 'none',
        },
        // instructional
        display2: {
            fontSize: utils_1.pxToRem(14),
            letterSpacing: 'normal',
            lineHeight: utils_1.pxToRem(18),
            color: styles_1.colors.grayBoulder,
        },
        // label
        display3: {
            fontSize: utils_1.pxToRem(12),
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: utils_1.pxToRem(0.5),
            color: styles_1.colors.grayBoulder,
        },
        // emphasis
        display4: {
            fontSize: utils_1.pxToRem(40),
            fontWeight: 300,
            color: styles_1.colors.black,
            fontFamily: styles_1.typography.serif,
            fontStyle: 'italic',
        },
        // paragraph
        body2: {
            fontFamily: styles_1.typography.serif,
            fontSize: utils_1.pxToRem(16),
            color: styles_1.colors.black,
        },
    },
    palette: {
        type: 'light',
        common: {
            black: styles_1.colors.black,
            white: styles_1.colors.white,
        },
        primary: {
            main: styles_1.colors.grayBoulder,
            dark: styles_1.colors.black,
            light: styles_1.colors.white,
        },
        secondary: {
            main: styles_1.colors.ctaSecondary,
        },
        error: {
            main: styles_1.colors.error,
        },
        background: {
            default: styles_1.colors.white,
        },
    },
});
exports.default = defaultTheme;
//# sourceMappingURL=index.js.map