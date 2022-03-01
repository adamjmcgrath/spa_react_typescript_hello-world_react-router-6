import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React, {PropsWithChildren, useCallback, useState} from "react";
import { Navigate } from "react-router-dom";

export const Auth0ProviderWithHistory = ({
  children,
}: PropsWithChildren<any>): JSX.Element | null => {
  const [navigateTo, setNavigateTo] = useState<string>('')

  const domain: string | undefined = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId: string | undefined = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience: string | undefined = process.env.REACT_APP_AUTH0_AUDIENCE;

  const onRedirectCallback = useCallback((appState: AppState) => {
    setNavigateTo(appState?.returnTo || window.location.pathname);
  }, [setNavigateTo]);

  if (!(domain && clientId && audience)) {
    return null;
  }

  if (navigateTo) {
    return <Navigate to={navigateTo}/>
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
