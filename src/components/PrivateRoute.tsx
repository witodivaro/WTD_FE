import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router";
import { selectIsAuthenticated } from "../redux/auth/selectors";

import { selectUserRole } from "../redux/user/selectors";

interface IProps extends RouteProps {
  role?: string | null;
  authenticated?: boolean;
  redirectTo: string;
  children: ReactNode;
}

const PrivateRoute = ({
  role,
  authenticated,
  redirectTo,
  children,
  ...props
}: IProps) => {
  const userRole = useSelector(selectUserRole);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  switch (true) {
    case authenticated && !isAuthenticated:
    case !authenticated && isAuthenticated:
    case role && userRole !== role:
    case !role && userRole:
      return <Redirect to={redirectTo} />;
  }

  return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;
