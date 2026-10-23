import "./App.css";import { PublicRouter } from "./routers/PublicRouter.jsx";
import { NavContext } from "./contexts/NavContext";
import { NavContextProvider } from "./contexts/NavContext";

export const App = () => {
  return (
    <NavContextProvider>
      <PublicRouter />
    </NavContextProvider>
  );
};
