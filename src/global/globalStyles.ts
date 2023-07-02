import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

body {
  width: 100%;
  background-color: var(--color-blue);
  color: var(--color-white);
  a {
    text-decoration: none;
    color: var(--color-white);
  }
  li {
    list-style-type: none;
  }
}

:root {
  // color
  --color-blue : #0085FF;
  --color-pink : #FF89C9;
  --color-black90: #262626;
  --color-black80: #3C3C3C;
  --color-black70: #515151;
  --color-black60: #676767;
  --color-black50: #7D7D7D;
  --color-black40: #A8A8A8;
  --color-black30: #BEBEBE;
  --color-black20: #D4D4D4;
  --color-black10: #E9E9E9;
  --color-gray: #F2F2F2;
  --color-white: #FFFFFF;
  // padding
  --padding-default: 1rem 2rem;
}
`;

export default GlobalStyles;
