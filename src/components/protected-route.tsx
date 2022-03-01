import React, { ComponentType, FC } from "react";

interface ProtectedRouteProps {
  component: ComponentType;
}

const withAuthenticationRequired = (
  Component: ComponentType
): FC => {
  return function WithAuthenticationRequired(): JSX.Element {
    return <Component />;
  };
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component);

  return <Component />;
};
