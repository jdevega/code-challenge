import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import { COLORS } from '../constants';

const Tag = props => (
  <Label color={props.color}>{props.text}</Label>
);

Tag.defaultProps = {
  text: 'tag name',
  color: 'blue',
};

Tag.propTypes = {
  color: PropTypes.oneOf(COLORS),
  text: PropTypes.string.isRequired,
};

export default Tag;
