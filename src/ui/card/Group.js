import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const CardGroup = props =>
  <Card.Group itemsPerRow={props.itemsPerRow}>{props.children}</Card.Group>;

CardGroup.defaultProps = {
  itemsPerRow: 3,
};

CardGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  itemsPerRow: PropTypes.number.isRequired,
};

export default CardGroup;
