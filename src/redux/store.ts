import { applyMiddleware, createStore, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import { rootReducer, rootSaga } from "./root";

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
