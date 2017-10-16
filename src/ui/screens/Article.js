import React from 'react';
import PropTypes from 'prop-types';
import { Header, Grid } from 'semantic-ui-react';
import PublishedLabel from '../common/PublishedLabel';
import TagList from '../tag/List';
import Tag from '../tag/Tag';

const Article = props => (
  <Grid divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column>
        <Header as="h2">{props.title}</Header>
      </Grid.Column>
      <Grid.Column textAlign="right">
        <Header as="h3" floated="right">
          {props.author}
        </Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column>{props.content}</Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column>
        <TagList>{props.tags.map(tag => <Tag key={tag} text={tag} />)}</TagList>
      </Grid.Column>
      <Grid.Column textAlign="right">
        <PublishedLabel published={props.published} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Article.defaultProps = {
  author: 'Author of the article',
  title: 'Article title',
  tags: [],
  content:
    'Curabitur sit amet diam in ex condimentum tincidunt quis ac justo. Nam posuere velit non urna efficitur, eget placerat neque varius. Suspendisse aliquam diam quis egestas rhoncus. Praesent tempor leo id tellus molestie finibus. Cras pretium volutpat metus et malesuada. Aliquam a ullamcorper leo, ut malesuada dolor. Pellentesque hendrerit imperdiet blandit. Duis neque erat, gravida eu lacus a, vulputate viverra ipsum. Integer arcu eros, pulvinar sit amet mi a, fermentum placerat nibh. Quisque at risus vulputate, aliquam dui sed, scelerisque libero. Donec eget ultricies velit. Proin ullamcorper consectetur sapien, non finibus augue facilisis eu.',
  published: false,
};

Article.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  published: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
