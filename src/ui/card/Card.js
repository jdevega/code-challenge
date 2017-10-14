import React from 'react';
import PropTypes from 'prop-types';
import { Card as UICard } from 'semantic-ui-react';
import AnimatedButton from '../common/AnimatedButton';

const Card = props => (
  <UICard>
    <UICard.Content>
      <UICard.Header>{props.author}</UICard.Header>
    </UICard.Content>
    <UICard.Content>
      <UICard.Description>{props.excerpt}</UICard.Description>
    </UICard.Content>
    <UICard.Content extra onClick={props.onEditClick}>
      <div className="ui two buttons">
        <AnimatedButton icon="eye" text="View" color="green" />
        <AnimatedButton icon="pencil" text="Edit" color="blue" />
      </div>
    </UICard.Content>
  </UICard>
);

Card.defaultProps = {
  author: 'Author name',
  excerpt: 'Excerpt',
};

Card.propTypes = {
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default Card;
