import { AuthProvider } from "./store/AuthContext";
import { MyRouters } from "./Routers/routes";
import { useLocation } from "react-router-dom";
import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useTheme } from "./hooks/useTheme";
import Nav from "./components/nav/nav";
import {ModalTwo} from "./components/modal/ModalTwo";

function App() {
  const { pathname } = useLocation();
  const { theme, toggleTheme, themeObject } = useTheme();

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyles />
      <AuthProvider>
        {pathname !== "/login" ? (
          <div>
            <Nav toggleTheme={toggleTheme}/>
            <main>
              <MyRouters />
            </main>
          </div>
        ) : (
          <Login />
        )}
        <ModalTwo />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
