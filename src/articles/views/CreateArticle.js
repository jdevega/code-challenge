import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ArticleForm from '../form/ArticleForm';
import withForm from '../../forms/withForm';
import { editArticle } from '../actions';

const CreateArticleForm = withForm({
  title: 'Create Article',
  actions: { editArticle },
  onSubmit: (values, dispatch, props) => props.createArticle(values),
})(ArticleForm);

const CreateArticle = () => (
  <div>
    <Header as="h2">Create Article</Header>
    <Divider />
    <CreateArticleForm />
  </div>
);

export default CreateArticle;