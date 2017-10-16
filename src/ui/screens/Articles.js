import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider } from 'semantic-ui-react';
import { Group } from '../card';
// import withLinks from '../../articles/withLinks';

// const CardWithLinks = withLinks(Card);

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
