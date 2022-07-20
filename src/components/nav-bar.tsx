import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { LoginButton } from "./buttons/login-button";
import { LogoutButton } from "./buttons/logout-button";
import { SignupButton } from "./buttons/signup-button";
import { NavBarBrand } from "./navigation/nav-bar-brand";
import { NavBarTab } from "./navigation/nav-bar-tab";
import { AppContext } from "../ApplicationContext";

export const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const { setToggle } = useContext(AppContext)

  const NavBarTabs = () => (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile" />
      <NavBarTab path="/public" label="Public" />
      {isAuthenticated && (
        <>
          <NavBarTab path="/protected" label="Protected" />
          <NavBarTab path="/admin" label="Admin" />
        </>
      )}
    </div>
  );

  const NavBarButtons = () => (
    <>
      <div className="nav-bar__buttons">
        {!isAuthenticated && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        {isAuthenticated && <LogoutButton />}
      </div>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
    </>
  );

  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
        <NavBarButtons />
      </nav>
    </div>
  );
};
