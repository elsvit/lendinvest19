import {connectRouter, routerMiddleware, RouterState} from "connected-react-router";
import {createBrowserHistory, History} from "history";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
// import { initApiServices } from '../services/api';
import loans, {LoansStateT} from "./loans";
import sagas from "./sagas";

export interface IAppState {
  loans: LoansStateT;
}

// export const api = initApiServices();

const envPublicUrl = process.env.PUBLIC_URL || "";
const basename = envPublicUrl.endsWith("/") ? envPublicUrl : `${envPublicUrl}/`;
const history = createBrowserHistory({ basename }) as History;

const reducers = combineReducers<IAppState & { router: RouterState }>({
  loans,
  router: connectRouter(history)
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
);

sagas.forEach((saga: any) => sagaMiddleware.run(saga));

export { store, history };
