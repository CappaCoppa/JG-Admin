import React from "react";
import * as Realm from "realm-web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import ProtectedRoutes from "./components/protectedRoutes";
import CurrentChecks from "./pages/CurrentChecksPage";
import HistoryChecks from "./pages/HistoryChecksPage";
import SharedLayOut from "./pages/sharedLayOutPage";
import CheckPage from "./pages/CheckPage";
import LogInPage from "../src/pages/LogInPage";
import { useCookies } from "react-cookie";
import { CONFIG } from "../src/config/config";

const app = new Realm.App({ id: CONFIG.APP_ID });

function App() {
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  return (
    <AppContext.Provider value={{ app, cookie, setCookie, removeCookie }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route
            element={
              <ProtectedRoutes>
                <SharedLayOut />
              </ProtectedRoutes>
            }
          >
            <Route path="current" element={<CurrentChecks />} />
            <Route path="history" element={<HistoryChecks />} />
            <Route path=":pageDate" element={<CheckPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
