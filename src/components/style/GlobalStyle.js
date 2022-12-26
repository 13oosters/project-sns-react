import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const mainTheme = {
  primaryColor: "#C5985E",
  secondaryColor: "#EBC695",
  sideColor: "#FFFAEE",
  lightColor: "#DBDBDB",
  darkLightColor: "#767676",
  xSmallFontSize: "1rem",
  smallFontSize: "1.2rem",
  baseFontSize: "1.4rem",
  largeFontSize: "1.6rem",
  xLargeFontSize: "1.8rem",
  xxLargeFontSize: "2.4rem",
  normalFontWeight: 400,
  mediumFontWeight: 500,
  boldFontWeight: 700,
};

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');
  html{
    width:100%;
    height:100%;
    overflow-y:scroll;
    &::-webkit-scrollbar {
    width: 0.5rem;
  };
  &::-webkit-scrollbar-thumb {
    background-color: #DBDBDB;
    border-radius: 10px;
  };
    font-size: 62.5%;
  }
  *{
      box-sizing: border-box;
      font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  }
  button{
    border: none;
    background-color: inherit;
    cursor: pointer;
    padding: 0;
  }
  input {
    border: none;
    padding: 0;
    outline: inherit;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  h1, a{
    font-family: inherit;
  }
  .sr-only {
    position: absolute;
    width:1px;
    height:1px;
    border: 0;
    clip:rect(1px,1px,1px,1px);
    overflow: hidden;
    z-index: -1;
  }
`;

export { mainTheme, GlobalStyles };
