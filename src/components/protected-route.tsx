import React, {
  ComponentClass,
  ComponentType,
  FunctionComponent
} from "react";

interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
}) => {
  const Component = HOC(component);

  return <Component />;
};

const HOC = (Component: ComponentClass | FunctionComponent) => () => <Component/>;
