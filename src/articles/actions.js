import { push } from 'react-router-redux';
import * as Queries from './queries';
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

export const addOne = article => ({
  type: ActionTypes.ADD_ONE,
  payload: article,
});

export const updateOne = article => ({
  type: ActionTypes.UPDATE_ONE,
  payload: article,
});

export const deleteOne = id => ({
  type: ActionTypes.DELETE_ONE,
  payload: id,
});

const goToArticles = () => push('/');

export const findAll = () => dispatch => {
  request(Queries.ARTICLES_QUERY).then(response => dispatch(setAll(response)));
};
export const findOne = id => dispatch => {
  request(Queries.ARTICLE_QUERY, { id }).then(response => dispatch(setOne(response)));
};

const trimElements = values => (values ? values.map(value => value.trim()) : undefined);
const parseValues = values => ({
  ...values,
  excerpt: values.content.slice(0, 350),
  tags: trimElements(values.tags),
});

export const createArticle = values => dispatch => {
  const article = parseValues(values);
  request(Queries.CREATE_ARTICLE_MUTATION, { article })
    .then(response => dispatch(addOne(response)))
    .then(() => dispatch(goToArticles()));
};

export const editArticle = values => dispatch => {
  const article = parseValues(values);
  request(Queries.UPDATE_ARTICLE_MUTATION, { article })
    .then(response => dispatch(updateOne(response)))
    .then(() => dispatch(goToArticles()));
};

export const deleteArticle = id => dispatch => {
  request(Queries.DELETE_ARTICLE_MUTATION, { id })
    .then(() => dispatch(deleteOne(id)))
    .then(() => dispatch(goToArticles()));
};
