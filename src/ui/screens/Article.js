import React from 'react';
import PropTypes from 'prop-types';
import { map, uniq } from 'ramda';
import { Header, Grid, Button, Divider } from 'semantic-ui-react';
import PublishedLabel from '../common/PublishedLabel';
import TagList from '../tag/List';
import Tag from '../tag/Tag';
import Modal from '../common/Modal';

const Article = props => (
  <div>
    <Grid>
      <Grid.Row columns={2} style={{ paddingBottom: 0 }}>
        <Grid.Column verticalAlign="middle">
          <PublishedLabel published={props.published} />
        </Grid.Column>
        <Grid.Column textAlign="right" verticalAlign="middle">
          <Button.Group>
            <Button icon="pencil" color="blue" onClick={props.onEditClick} />
            <Button icon="trash" color="red" onClick={props.onDeleteClick} />
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
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
      <Divider style={{ margin: 0 }} />
      <Grid.Row columns={1}>
        <Grid.Column>{props.content}</Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column width={11}>
          <TagList>{map(tag => <Tag key={tag} text={tag} />, uniq(props.tags))}</TagList>
        </Grid.Column>
        <Grid.Column width={5} textAlign="right" />
      </Grid.Row>
    </Grid>
    <Modal
      header="Delete Article"
      open={props.modalOpen}
      content="Are you sure ?"
      onClose={props.closeModal}
      onConfirmClick={props.onConfirmDeleteClick}
      onCancelClick={props.onCancelDeleteClick}
    />
  </div>
);

Article.defaultProps = {
  author: 'Author of the article',
  title: 'Article title',
  tags: [],
  content:
    'Curabitur sit amet diam in ex condimentum tincidunt quis ac justo. Nam posuere velit non urna efficitur, eget placerat neque varius. Suspendisse aliquam diam quis egestas rhoncus. Praesent tempor leo id tellus molestie finibus. Cras pretium volutpat metus et malesuada. Aliquam a ullamcorper leo, ut malesuada dolor. Pellentesque hendrerit imperdiet blandit. Duis neque erat, gravida eu lacus a, vulputate viverra ipsum. Integer arcu eros, pulvinar sit amet mi a, fermentum placerat nibh. Quisque at risus vulputate, aliquam dui sed, scelerisque libero. Donec eget ultricies velit. Proin ullamcorper consectetur sapien, non finibus augue facilisis eu.',
  published: false,
  modalOpen: false,
};

Article.propTypes = {
  author: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool,
  onCancelDeleteClick: PropTypes.func.isRequired,
  onConfirmDeleteClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  published: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
