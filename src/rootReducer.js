import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as articles } from './articles';

const rootReducer = combineReducers({ routing: routerReducer, articles });

export default rootReducer;
