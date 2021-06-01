import { BrowserRouter, Switch, Route } from "react-router-dom";

import Pages from "./pages";
import SignUpPage from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

import ROUTES from "./const/routes";

const { TasksPage, LoginPage, PageNotFound } = Pages;

function App() {
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
          authenticated={false}
          redirectTo={ROUTES.TASKS_LIST}
          exact
          path={ROUTES.LOGIN}
        >
          <LoginPage />
        </PrivateRoute>
        <PrivateRoute
          authenticated={false}
          redirectTo={ROUTES.TASKS_LIST}
          exact
          path={ROUTES.SIGN_UP}
        >
          <SignUpPage />
        </PrivateRoute>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
