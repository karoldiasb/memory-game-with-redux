import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";

import gameReducer from "./reducers";
import gameSaga from "./sagas";

// saga trabalha com execuções assincronas
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  gameReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(gameSaga);

export default store;
