import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import { success, error } from 'react-notification-system-redux';
import ArticleForm from '../form/ArticleForm';
import withForm from '../../forms/withForm';
import { createArticle, goToArticles } from '../actions';

const CreateArticleForm = withForm({
  options: {
    initialValues: {
      published: false,
    },
  },
  actions: { createArticle, success, error, goToArticles },
  onSubmit: (values, dispatch, props) => {
    props
      .createArticle(values)
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
})(ArticleForm);

const CreateArticle = () => (
  <div>
    <Header as="h2">Create Article</Header>
    <Divider />
    <CreateArticleForm submitText="save" />
  </div>
);

export default CreateArticle;
