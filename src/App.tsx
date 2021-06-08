import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LoginPage,
  TasksPage,
  SignUpPage,
  PageNotFound,
  ScorePage,
  LoadingPage,
} from "./pages";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

import { checkAuth } from "./redux/auth/actions";
import { selectIsCheckingAuth } from "./redux/auth/selectors";

import ROUTES from "./const/routes";
import EmailVerificationPage from "./pages/EmailVerification";

function App() {
  const dispatch = useDispatch();
  const isCheckingAuth = useSelector(selectIsCheckingAuth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isCheckingAuth) {
    return <LoadingPage />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoute
          authenticated
          redirectTo={ROUTES.LOGIN}
          exact
          path={ROUTES.TASKS_LIST}
        >
          <TasksPage />
        </PrivateRoute>

        <PrivateRoute
          redirectTo={ROUTES.TASKS_LIST}
          authenticated={false}
          exact
          path={ROUTES.LOGIN}
        >
          <LoginPage />
        </PrivateRoute>
        <PrivateRoute
          redirectTo={ROUTES.TASKS_LIST}
          authenticated={false}
          exact
          path={ROUTES.SIGN_UP}
        >
          <SignUpPage />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.SCORE} authenticated={true}>
          <ScorePage />
        </PrivateRoute>
        <Route exact path={ROUTES.EMAIL_VERIFICATION + "/:verificationHash"}>
          <EmailVerificationPage />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
