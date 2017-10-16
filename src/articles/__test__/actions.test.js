import reducer from '../reducer';
import * as Actions from '../actions';

describe('Articles Actions', () => {
  const initialState = {
    list: [],
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
});
