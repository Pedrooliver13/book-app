// Packages
import { createGlobalStyle } from 'styled-components';

// Styles
import { Container } from 'styles/container';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props): string => props.theme['yellow-500']}
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${(props): string => props.theme['white-800']};
    color: ${(props): string => props.theme['blue-800']};
    --webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    ${Container};
  }
`;
