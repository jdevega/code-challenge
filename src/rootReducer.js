import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as articles } from './articles';

const rootReducer = combineReducers({
  routing: routerReducer,
  articles,
  form: formReducer,
});

export default rootReducer;
