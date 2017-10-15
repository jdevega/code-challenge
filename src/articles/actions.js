import { ARTICLES_QUERY } from './queries';
import * as ActionTypes from './actionTypes';
import request from '../request';

export const setAll = articles => ({
  type: ActionTypes.SET_ALL,
  payload: articles,
})
;
export const findAll = () => dispatch => {
  request(ARTICLES_QUERY).then(response => dispatch(setAll(response)));
};
