import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header } from 'semantic-ui-react';
import ArticleForm from '../form/ArticleForm';

const ArticleFormScreen = props => (
  <Grid divided="vertically">
    <Grid.Row>
      <Grid.Column>
        <Header as="h2">{props.title}</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <ArticleForm />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );

ArticleFormScreen.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ArticleFormScreen;
