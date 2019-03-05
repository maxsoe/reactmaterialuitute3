import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { amber, blue, green, red } from "@material-ui/core/colors";

const rootElement = document.getElementById("root");
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: blue[200],
      dark: green[700]
    },
    type: "dark"
  },
  spacing: { unit: 10 }
});

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  rootElement
);
