export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_QUERY = `
  query Article($id:String!){
    article(id:$id) {
      id
      author
      content
      published
      tags
      title
    }
  }`;

export const CREATE_ARTICLE_MUTATION = `
  mutation Create($article:ArticleInput!) {
    createArticle(article:$article) {
      id
      author
      title
      content
      excerpt
      tags
      published
    }
  }
`;

export const UPDATE_ARTICLE_MUTATION = `
mutation Update($article:ArticleInput!) {
  updateArticle(article:$article) {
    id
    author
    title
    content
    excerpt
    tags
    published
  }
}
`;

export const DELETE_ARTICLE_MUTATION = `
mutation Delete($id:String!) {
  deleleteArticle(id:$article) {
    id
  }
}
`;
