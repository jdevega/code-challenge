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

const arrayToCSV = values => (values ? values.map(value => value.trim()).join(',') : undefined);

export const createArticle = values => () => {
  const article = {
    ...values,
    tags: arrayToCSV(values.tags),
  };

  console.log(article);
};

export const editArticle = values => () => {
  const article = {
    ...values,
    tags: arrayToCSV(values.tags),
  };

  console.log(article);
};
