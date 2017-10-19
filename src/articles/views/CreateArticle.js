import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ArticleForm from '../form/ArticleForm';
import withForm from '../../forms/withForm';
import { createArticle } from '../actions';

const CreateArticleForm = withForm({
  options: {
    initialValues: {
      published: false,
    },
  },
  actions: { createArticle },
  onSubmit: (values, dispatch, props) => props.createArticle(values),
})(ArticleForm);

const CreateArticle = () => (
  <div>
    <Header as="h2">Create Article</Header>
    <Divider />
    <CreateArticleForm submitText="save" />
  </div>
);

export default CreateArticle;
