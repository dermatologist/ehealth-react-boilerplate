import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import configureStore from "./store";
import Routes from "./routes";
import "./styles/global-styles";
import registerServiceWorker from "./utils/registerServiceWorker";

render(
  <MuiThemeProvider>
    <Provider store={configureStore()}>
      <Routes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
