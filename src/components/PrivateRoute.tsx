import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps, useHistory } from "react-router";
import { selectIsAuthenticated } from "../redux/auth/selectors";

import { selectUserRole } from "../redux/user/selectors";

interface IProps extends RouteProps {
  role?: string | null;
  authenticated?: boolean;
  redirectTo?: string;
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
  const history = useHistory();

  switch (true) {
    case authenticated && !isAuthenticated:
    case !authenticated && isAuthenticated:
    case role && userRole !== role:
    case !role && userRole:
      if (redirectTo) {
        return <Redirect to={redirectTo} />;
      }

      history.goBack();
  }

  return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;
