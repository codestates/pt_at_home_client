import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import DashboardContainers from './containers/page/DashboardContainers';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  html, body, #root {
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <DashboardContainers />
  </React.Fragment>
);

export default App;
