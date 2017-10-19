/* eslint-disable no-debugger */
import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Header } from 'semantic-ui-react';
import { success, error } from 'react-notification-system-redux';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import ArticleForm from '../form/ArticleForm';
import withForm from '../../forms/withForm';
import { goToArticles, parseValues } from '../actions';
import { ARTICLE_QUERY, UPDATE_ARTICLE_MUTATION } from '../queries';

const EditArticleForm = compose(
  graphql(ARTICLE_QUERY, {
    options: props => ({
      fetchPolicy: 'cache-and-network',
      variables: {
        id: props.id,
      },
    }),
    props: ({ data }) => ({ initialValues: data.article }),
  }),
  graphql(UPDATE_ARTICLE_MUTATION),
  withForm({
    options: {
      enableReinitialize: true,
    },
    actions: { success, error, goToArticles },
    onSubmit: (values, dispatch, props) => {
      props
        .mutate({ variables: { article: parseValues(values) } })
        .then(() =>
          props.success({
            message: `${values.title} updated successfully`,
            position: 'tr',
            autoDismiss: 5,
          }),
        )
        .then(() => props.goToArticles())
        .catch(() =>
          props.error({
            message: `${values.title} cannot be updated`,
            position: 'tr',
            autoDismiss: 5,
          }),
        );
    },
  }),
)(ArticleForm);

const EditArticle = props => (
  <div>
    <Header as="h2">Edit Article</Header>
    <Divider />
    <EditArticleForm id={props.match.params.id} submitText="Update" />
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
