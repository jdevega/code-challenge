import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const articleInputType = new GraphQLInputObjectType({
  name: 'ArticleInput',
  fields: () => ({
    author: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    excerpt: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    published: { type: GraphQLBoolean, default: false },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          description: 'Id of the Article',
          type: GraphQLString,
        },
      },
      resolve(root, filter) {
        return db.Article.findOne({ _id: filter.id });
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutations you can exec',
  fields: () => ({
    createArticle: {
      type: articleType,
      description: 'Create a new article',
      args: {
        article: { type: articleInputType },
      },
      resolve: (value, { article }) => db.Article.create(article),
    },
    updateArticle: {
      type: articleType,
      description: 'Update a new article',
      args: {
        article: { type: articleInputType },
      },
      resolve: (value, { article }) => db.Article.findOneAndUpdate(article),
    },
    deleteArticle: {
      type: articleType,
      description: 'Delete an article with id .',
      args: {
        id: { type: GraphQLString },
      },
      resolve: (value, { id }) => db.Article.remove({ id }),
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
