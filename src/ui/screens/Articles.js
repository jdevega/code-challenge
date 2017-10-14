import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider } from 'semantic-ui-react';
import { Card, Group } from '../card';

const Articles = props =>
  <div>
    <Header as="h2">Articles</Header>
    <Header.Subheader>{props.items.length} articles.</Header.Subheader>
    <Divider />
    <Group>
      {props.items.map(article => <Card key={article.id} {...article} />)}
    </Group>
  </div>;

Articles.defaultProps = {
  items: [],
};
Articles.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  })),
};

export default Articles;
