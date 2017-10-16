import * as ActionTypes from './actionTypes';
import { buildReducer } from '../core/lib';

const reducer = buildReducer(
  {
    list: [],
    item: undefined,
  },
  {
    [ActionTypes.SET_ALL]: (state, action) => {
      const { articles } = action.payload.data;
      return { ...state, list: articles };
    },
    [ActionTypes.SET_ONE]: (state, action) => {
      const { article } = action.payload.data;
      return { ...state, item: article };
    },
  },
);

export default reducer;
