import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const List = props => <Label.Group tag color="blue" >
  {props.children}
</Label.Group>;

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default List;
