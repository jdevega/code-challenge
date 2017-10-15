import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer';

export const history = createHistory();
const router = routerMiddleware(history);
const middlewares = applyMiddleware(router, thunk);

const _middlewares =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(middlewares)
    : middlewares;

const defaultStore = {};
const store = createStore(rootReducer, defaultStore, _middlewares);

export default store;
