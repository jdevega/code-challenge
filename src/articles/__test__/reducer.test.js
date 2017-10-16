import reducer from '../reducer';
import * as ActionTypes from '../actionTypes';

describe('Articles module', () => {
  const initialState = {
    list: [],
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
});
