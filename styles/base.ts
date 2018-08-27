import { Theme } from "@material-ui/core";
import { FontFace } from "csstype";
import { injectGlobal } from "styled-components";

import { styleObjectToTemplate } from "~shared/styles/utils";

const defineFontFace = (fontFace: FontFace) =>
  `
@font-face {
  ${styleObjectToTemplate(fontFace)}
`;

const setBaseStyles = (theme: Theme, fontFaces: FontFace[]) => {
  // tslint:disable-next-line:no-unused-expression
  injectGlobal`
    ${fontFaces.map(defineFontFace).join("\n")}
`;

  // tslint:disable-next-line:no-unused-expression
  injectGlobal`
      html {
        font-family: ${theme.typography.fontFamily};
      }
  `;
};

export default setBaseStyles;
