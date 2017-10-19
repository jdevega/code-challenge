import { gql } from 'react-apollo';

export const ARTICLES_QUERY = gql`
  {
    articles {
      author
      excerpt
      id
      title
    }
  }
`;

export const ARTICLE_QUERY = gql`
  query Article($id: String!) {
    article(id: $id) {
      id
      author
      content
      published
      tags
      title
    }
  }
`;

export const CREATE_ARTICLE_MUTATION = gql`
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

export const UPDATE_ARTICLE_MUTATION = gql`
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

export const DELETE_ARTICLE_MUTATION = gql`
mutation Delete($id:String!) {
  deleteArticle(id:$id) {
    id
  }
}
`;
