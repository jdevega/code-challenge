import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import { COLORS } from '../constants';

const AnimatedButton = props =>
  <Button animated="vertical" color={props.color} onClick={props.onClick}>
    <Button.Content hidden>{props.text}</Button.Content>
    <Button.Content visible>
      <Icon name={props.icon} />
    </Button.Content>
  </Button>;

AnimatedButton.defaultProps = {
  icon: 'search',
  text: 'Search',
};

AnimatedButton.propTypes = {
  color: PropTypes.oneOf(COLORS),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default AnimatedButton;
