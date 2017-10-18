import reducer from '../reducer';
import * as Actions from '../actions';

describe('Articles Actions', () => {
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

  it('setAll(articles) action add all the articles to the list key', () => {
    const articles = { data: { articles: [
      {
        title: 'Article 1',
      },
      {
        title: 'Article 2',
      },
    ] } };
    const action = Actions.setAll(articles);
    const state = reducer(initialState, action);
    expect(state.list.length).toBe(2);
    expect(state.list[0].title).toBe('Article 1');
  });

  it('setOne(article) Action set the article into the item key', () => {
    const article = { data: { article: {
      title: 'Article 1',
    } } };
    const action = Actions.setOne(article);
    const state = reducer(initialState, action);
    expect(state.item).toBeDefined();
    expect(state.item.title).toBe('Article 1');
  });

  it('addOne(article) Action add one article into the list', () => {
    const article = { data: { createArticle: {
      title: 'Article 1',
    } } };
    const action = Actions.addOne(article);
    const state = reducer(initialState, action);
    expect(state.list.length).toBe(1);
    const stateWithTwo = reducer(state, action);
    expect(stateWithTwo.list.length).toBe(2);
  });

  it('updateOne(article) Action update one article into the list by id', () => {
    const newTitle = 'Article 2 new title';
    const article = { data: { updateArticle: {
      id: '2',
      title: newTitle,
    } } };
    const action = Actions.updateOne(article);
    const state = reducer(initialStateWithList, action);
    expect(state.list.length).toBe(2);
    expect(state.list[1].title).toBe(newTitle);
  });

  it('deleteOne(article) Action delete one article into the list by id', () => {
    const response = {
      data: {
        deleteArticle: {
          id: '1',
        },
      },
    };
    const action = Actions.deleteOne(response);
    const state = reducer(initialStateWithList, action);
    expect(state.list.length).toBe(1);
    expect(state.list[0].title).toBe('Article 2');
  });
});
