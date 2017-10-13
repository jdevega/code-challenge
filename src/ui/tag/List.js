import React from 'react';
import PropTypes from 'prop-types';

const List = props => <div className="tag-list">{props.children}</div>;

List.propTypes = {
  children: PropTypes.oneOfType[(PropTypes.element, PropTypes.array)],
};

export default List;
