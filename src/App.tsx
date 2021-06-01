import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

import ROUTES from "./const/routes";
import Pages from "./pages";
import SignUpPage from "./pages/SignUp";

const { TasksPage, LoginPage, PageNotFound } = Pages;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={ROUTES.TASKS_LIST}>
          <TasksPage />
        </Route>
        <Route exact path={ROUTES.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUpPage />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
