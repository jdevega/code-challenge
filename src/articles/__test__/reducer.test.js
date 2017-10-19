import reducer from '../reducer';
import * as ActionTypes from '../actionTypes';

describe('Articles module', () => {
  const initialState = {
    list: [],
    item: undefined,
  };
  const initialStateWithList = {
    list: [{
      id: '1',
      title: 'Article 1',
    }, {
      id: '2',
      title: 'Article 2',
    }],
    item: undefined,
  };

  it('reducer is a function', () => {
    expect(reducer).toBeInstanceOf(Function);
  });

  it('SET_ALL Action Type add all the articles to the list key', () => {
    const mockPayload = { data: { articles: [
      {
        title: 'Article 1',
      },
      {
        title: 'Article 2',
      },
    ] } };
    const action = {
      type: ActionTypes.SET_ALL,
      payload: mockPayload,
    };
    const state = reducer(initialState, action);
    expect(state.list.length).toBe(2);
    expect(state.list[0].title).toBe('Article 1');
  });

  it('SET_ONE Action Type set the article into the item key', () => {
    const mockPayload = { data: { article: {
      title: 'Article 1',
    } } };
    const action = {
      type: ActionTypes.SET_ONE,
      payload: mockPayload,
    };
    const state = reducer(initialState, action);
    expect(state.item).toBeDefined();
    expect(state.item.title).toBe('Article 1');
  });

  it('ADD_ONE Action add one article into the list', () => {
    const mockPayload = { data: { createArticle: {
      title: 'Article 1',
    } } };
    const action = {
      type: ActionTypes.ADD_ONE,
      payload: mockPayload,
    };
    const state = reducer(initialState, action);
    expect(state.list.length).toBe(1);
    const stateWithTwo = reducer(state, action);
    expect(stateWithTwo.list.length).toBe(2);
  });

  it('UPDATE_ONE Action update one article into the list by id', () => {
    const newTitle = 'Article 2 new title';
    const mockPayload = { data: { updateArticle: {
      id: '2',
      title: newTitle,
    } } };
    const action = {
      type: ActionTypes.UPDATE_ONE,
      payload: mockPayload,
    };
    const state = reducer(initialStateWithList, action);
    expect(state.list.length).toBe(2);
    expect(state.list[1].title).toBe(newTitle);
  });

  it('DELETE_ONE Action delete one article into the list by id', () => {
    const mockPayload = {
      data: {
        deleteArticle: {
          id: '1',
        },
      },
    };
    const action = {
      type: ActionTypes.DELETE_ONE,
      payload: mockPayload,
    };
    const state = reducer(initialStateWithList, action);
    expect(state.list.length).toBe(1);
    expect(state.list[0].title).toBe('Article 2');
  });
});
