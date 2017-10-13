import React from 'react';
import PropTypes from 'prop-types';

const Tag = props => (
  <div className="tag">
    <div className="text">{props.text}</div>
  </div>
);

Tag.defaultProps = {
  text: 'tag name',
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
