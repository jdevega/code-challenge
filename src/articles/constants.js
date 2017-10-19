export const DOMAIN = ['apollo', 'data'];
export const ACTIONS_PREFIX = 'ARTICLES';
export const ARTICLES_PATH = '/';
export const ARTICLE_FIELDS = [
  'id',
  'author',
  'title',
  'content',
  'excerpt',
  'tags',
  'published',
];
export const editArticlePath = id => `/edit/${id}`;
export const viewArticlePath = id => `/${id}`;
