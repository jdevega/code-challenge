import * as ActionTypes from './actionTypes';
import { buildReducer } from '../core/lib';

const reducer = buildReducer(
  {
    items: [],
  },
  {
    [ActionTypes.SET_ALL]: (state, action) => {
      const { articles } = action.payload.data;
      return { ...state, items: articles };
    },
  },
);

export default reducer
;
