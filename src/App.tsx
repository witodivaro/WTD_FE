import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

import Task from "./components/Task";

import ROUTES from "./const/routes";
import TasksPage from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={ROUTES.TASKS_LIST}>
          <TasksPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
