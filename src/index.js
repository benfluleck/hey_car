import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import BaseRoutes from '<pages>/';
import theme from '<styles>/theme';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*, :after, :before {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BaseRoutes />
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
