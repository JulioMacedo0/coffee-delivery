import { ThemeProvider } from "styled-components";
import { Coffees } from "./Components/Coffees";
import { Header } from "./Components/Header";
import { Presentation } from "./Components/Presentation";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Presentation />
      <Coffees />
    </ThemeProvider>
  );
}
