import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const List = props => <Label.Group tag color="blue" >
  {props.children}
</Label.Group>;

List.defaultProps = {
  textAlign: 'left',
};

List.propTypes = {
  children: PropTypes.oneOfType[(PropTypes.element, PropTypes.array)],
};

export default List;
