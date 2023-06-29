import GlobalStyles from "./global/globalStyles";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
