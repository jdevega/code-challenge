import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import { Label } from 'semantic-ui-react';

const enhanceLabelProps = withProps(props => ({
  true: {
    icon: 'checkmark',
    text: 'Published',
    color: 'green',
  },
  false: {
    icon: 'x',
    text: 'Not Published',
    color: 'red',
  },
}[props.published]));

const PublishedLabel = props =>
  <Label icon={props.icon} color={props.color} content={props.text} />;

PublishedLabel.defaultProps = {
  color: 'green',
  icon: 'checkmark',
  text: 'Published',
};

PublishedLabel.propTypes = {
  color: PropTypes.oneOf(['green', 'red']).isRequired,
  icon: PropTypes.oneOf(['checkmark', 'x']).isRequired,
  text: PropTypes.string.isRequired,
};

export default enhanceLabelProps(PublishedLabel);
