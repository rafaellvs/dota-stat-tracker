import { createGlobalStyle } from 'styled-components'
import theme from 'app/helpers/theme'

const GlobalStyles = createGlobalStyle`
  * {
    font-family: monospace;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  span, p, h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.white};
    line-height: 1.2;
  }
`
export default GlobalStyles
