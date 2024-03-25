import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}


body {
  width: 100%;
  font-family: "Pretendard Variable", "Pretendard", -apple-system, "BlinkMacSystemFont", system-ui, "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",  "Segoe UI Symbol", sans-serif;
  background-color: var(--color-white);
  color: var(--color-black90);
  a {
    text-decoration: none;
    color: var(--color-black90);
  }
  li {
    list-style-type: none;
  }
  ::selection {
    color: var(--color-black90);
    background-color: var(--color-black10);
}
  button{
    background: inherit ; 
    border:none; 
    box-shadow:none; 
    border-radius:0; 
    padding:0; 
    overflow:visible; 
    cursor:pointer
  }
.pointer {
  cursor:pointer;
}

}

:root {
  // color
  --color-blue : #0085FF;
  --color-skyblue: #87ceeb;
  --color-pink : #FF89C9;
  --color-red :rgb(255, 42, 0);
  --color-point :rgb(255, 85, 0);
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
  --padding-default: 1.5rem 4rem;
}
`;

export default GlobalStyles;
