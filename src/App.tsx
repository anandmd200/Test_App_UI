import { RouterProvider } from "react-router-dom";

// project imports
import ScrollTop from "./components/ScrollTop.js";
import router from "./routes/index.js";
import ThemeCustomization from "./themes/index.js";

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

const App = () => {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;
