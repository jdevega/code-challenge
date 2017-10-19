import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import { success, error } from 'react-notification-system-redux';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import ArticleForm from '../form/ArticleForm';
import withForm from '../../forms/withForm';
import { goToArticles, parseValues } from '../actions';
import { CREATE_ARTICLE_MUTATION } from '../queries';


const CreateArticleForm = compose(
  graphql(CREATE_ARTICLE_MUTATION),
  withForm({
    options: {
      initialValues: {
        published: false,
      },
    },
    actions: { success, error, goToArticles },
    onSubmit: (values, dispatch, props) => {
      props
      .mutate({ variables: { article: parseValues(values) } })
      .then(() =>
        props.success({
          message: `${values.title} created successfully`,
          position: 'tr',
          autoDismiss: 5,
        }),
      )
      .then(() => props.goToArticles())
      .catch(() =>
        props.error({
          message: `${values.title} cannot be created`,
          position: 'tr',
          autoDismiss: 5,
        }),
      );
    },
  }))(ArticleForm);

const CreateArticle = () => (
  <div>
    <Header as="h2">Create Article</Header>
    <Divider />
    <CreateArticleForm submitText="save" />
  </div>
);

export default CreateArticle;
