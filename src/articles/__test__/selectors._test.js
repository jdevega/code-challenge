// import * as Selectors from '../selectors';

// describe('Articles - Selectors', () => {
//   const articleItem = {
//     author: 'Mr. Judah Blanda',
//     excerpt: 'Sit fugit culpa.',
//     id: '59e5089a1187e9002970fc71',
//     title: 'Global Quality Technician',
//   };
//   const articlesList = [articleItem];
//   const mockState = {
//     articles: {
//       list: articlesList,
//       item: articleItem,
//     },
//   };

//   const initialMockState = {
//     articles: {},
//   };

//   it('getAll(state) returns all articles at list key as an object', () => {
//     const articles = Selectors.getAll(mockState);
//     expect(articles).toEqual({ articles: mockState.articles.list });
//   });
//   it('getAll(state) returns empty array if the key list is not set', () => {
//     const articles = Selectors.getAll(initialMockState);
//     expect(articles).toEqual({ articles: [] });
//   });

//   it('getOne(state) returns the article at item key', () => {
//     const article = Selectors.getOne(mockState);
//     expect(article).toEqual(mockState.articles.item);
//   });
//   it('getOne(state) returns an empty object if key item is not set', () => {
//     const article = Selectors.getOne(initialMockState);
//     expect(article).toEqual({});
//   });
// });
