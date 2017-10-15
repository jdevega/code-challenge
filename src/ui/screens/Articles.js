import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider } from 'semantic-ui-react';
import { Card, Group } from '../card';
import withLinks from '../../articles/withLinks';

const CardWithLinks = withLinks(Card);

const Articles = props =>
  <div>
    <Header as="h2">Articles</Header>
    <Header.Subheader>{props.articles.length} articles.</Header.Subheader>
    <Divider />
    <Group>
      {props.articles.map(article => <CardWithLinks key={article.id} {...article} />)}
    </Group>
  </div>;

Articles.defaultProps = {
  articles: [],
};
Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  })),
};

export default Articles;
