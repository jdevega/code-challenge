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
    <UICard.Content extra>
      <div className="ui two buttons">
        <AnimatedButton icon="eye" text="View" color="green" onClick={props.onViewClick} />
        <AnimatedButton icon="pencil" text="Edit" color="blue" onClick={props.onEditClick} />
      </div>
    </UICard.Content>
  </UICard>
);

Card.defaultProps = {
  author: 'Author name',
  excerpt: 'Excerpt',
  onEditClick: e => e.preventDefault(),
  onViewClick: e => e.preventDefault(),
};

Card.propTypes = {
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onViewClick: PropTypes.func.isRequired,
};

export default Card;
