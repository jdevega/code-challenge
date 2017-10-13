import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="header">
    <div className="author">{props.author}</div>
    <div className="icon" />
  </div>
);

Header.defaultProps = {
  author: 'Author name',
};

Header.propTypes = {
  author: PropTypes.string.isRequired,
};

export default Header;
