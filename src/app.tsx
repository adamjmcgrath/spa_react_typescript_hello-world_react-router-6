import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Loader } from "./components/loader";
import { MobileNavBar } from "./components/mobile-nav-bar";
import { NavBar } from "./components/nav-bar";
import { ProtectedRoute } from "./components/protected-route";
import { AdminPage } from "./pages/admin";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Profile } from "./pages/profile";
import { ProtectedPage } from "./pages/protected";
import { PublicPage } from "./pages/public";
import { AppContext } from "./ApplicationContext";

export const App: React.FC = () => {
  const { isLoading } = useAuth0();
  const { toggle } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="page-layout">
        <NavBar />
        <MobileNavBar />
        <div className="page-layout__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<ProtectedRoute component={Profile} />}
            />
            <Route path="/public" element={<PublicPage />} />
            <Route
              path="/protected"
              element={<ProtectedRoute component={ProtectedPage} />}
            />
            <Route
              path="/admin"
              element={<ProtectedRoute component={AdminPage} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
