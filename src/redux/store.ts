import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { episodesReducer } from "./reducers/episodes";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const setupStore = () => {
  const store = createStore(episodesReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export type RootState = ReturnType<typeof episodesReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
