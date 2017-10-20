// import { findIndex, propEq, update, reject } from 'ramda';
// import * as ActionTypes from './actionTypes';
// import { buildReducer } from '../core/lib';

// export const updateOne = (article, state) => {
//   const index = findIndex(propEq('id', article.id))(state);
//   return update(index, article, state);
// };

// export const deleteOne = (id, state) => reject(propEq('id', id), state);

// const reducer = buildReducer(
//   {
//     list: [],
//     item: undefined,
//   },
//   {
//     [ActionTypes.SET_ALL]: (state, action) => {
//       const { articles } = action.payload.data;
//       return { ...state, list: articles };
//     },
//     [ActionTypes.SET_ONE]: (state, action) => {
//       const { article } = action.payload.data;
//       return { ...state, item: article };
//     },
//     [ActionTypes.ADD_ONE]: (state, action) => {
//       const { createArticle: article } = action.payload.data;
//       return { ...state, list: [...state.list, article] };
//     },
//     [ActionTypes.UPDATE_ONE]: (state, action) => {
//       const { updateArticle: article } = action.payload.data;
//       return { ...state, list: updateOne(article, state.list) };
//     },
//     [ActionTypes.DELETE_ONE]: (state, action) => {
//       const { id } = action.payload.data.deleteArticle;
//       return { ...state, list: deleteOne(id, state.list) };
//     },
//   },
// );

// export default reducer;
