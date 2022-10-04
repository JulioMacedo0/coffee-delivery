import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./Components/Header";
import { ChartItemsContextProvider } from "./context/ChartItemsContext";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ChartItemsContextProvider>
          <Header />
          <Router />
        </ChartItemsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
