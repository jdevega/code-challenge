import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider } from 'semantic-ui-react';
import { Group } from '../card';

const Articles = props => (
  <div>
    <Header as="h2">Articles</Header>
    <Header.Subheader>{props.articles.length} articles.</Header.Subheader>
    <Divider />
    <Group>{props.articles}</Group>
  </div>
);

Articles.defaultProps = {
  articles: [],
};
Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.element),
};

export default Articles;
