import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { Auth0ProviderWithConfig } from "./auth0-provider-with-config";
import ApplicationContext from "./ApplicationContext";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <ApplicationContext>
      <Auth0ProviderWithConfig>
        <App />
      </Auth0ProviderWithConfig>
    </ApplicationContext>
  </React.StrictMode>,
  document.getElementById("root")
);
