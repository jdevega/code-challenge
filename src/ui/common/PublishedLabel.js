import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const PublishedLabel = props => {
  const _props = {
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
  }[props.published];
  return (
    <Label icon={_props.icon} color={_props.color}>
      {_props.text}
    </Label>
  );
};

PublishedLabel.defaultProps = {
  published: false,
};

PublishedLabel.propTypes = {
  published: PropTypes.bool.isRequired,
};

export default PublishedLabel;
