import { applyMiddleware, createStore, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { rootReducer, rootSaga } from "./root";

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
