import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root";

const middlewares = [createSagaMiddleware()];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
