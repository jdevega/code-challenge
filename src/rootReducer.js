import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';
// import { reducer as articles } from './articles';
import client from './core/apollo/client';

const rootReducer = combineReducers({
  routing: routerReducer,
  // articles,
  notifications,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
