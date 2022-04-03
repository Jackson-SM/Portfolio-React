import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }

  body,html {
    height: 100%;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: white;
    transition: background ease 200ms;
  }
`;