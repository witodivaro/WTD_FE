import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

import ROUTES from "./const/routes";
import PageNotFound from "./pages/PageNotFound";
import TasksPage from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={ROUTES.TASKS_LIST}>
          <TasksPage />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
