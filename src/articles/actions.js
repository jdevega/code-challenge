import { ARTICLES_QUERY, ARTICLE_QUERY } from './queries';
import * as ActionTypes from './actionTypes';
import request from '../request';

export const setAll = articles => ({
  type: ActionTypes.SET_ALL,
  payload: articles,
});

export const setOne = article => ({
  type: ActionTypes.SET_ONE,
  payload: article,
});

export const findAll = () => dispatch => {
  request(ARTICLES_QUERY).then(response => dispatch(setAll(response)));
};
export const findOne = id => dispatch => {
  request(ARTICLE_QUERY, { id }).then(response => dispatch(setOne(response)));
};
