/* eslint-disable no-debugger */
import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Header } from 'semantic-ui-react';
import { compose } from 'recompose';
import ArticleForm from '../form/ArticleForm';
import withForm from '../../forms/withForm';
import { editArticle, findOne } from '../actions';
import { getOne } from '../selectors';

const EditArticleForm = compose(
  withForm({
    selector: state => {
      const article = getOne(state);
      return { initialValues: article };
    },
    options: {
      enableReinitialize: true,
    },
    actions: { editArticle, loader: findOne },
    onSubmit: (values, dispatch, props) => props.editArticle(values),
  }),
)(ArticleForm);

const EditArticle = props => (
  <div>
    <Header as="h2">Edit Article</Header>
    <Divider />
    <EditArticleForm id={props.match.params.id} />
  </div>
);

EditArticle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditArticle;
