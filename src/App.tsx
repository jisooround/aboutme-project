import GlobalStyles from "./global/globalStyles";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

export default App;
