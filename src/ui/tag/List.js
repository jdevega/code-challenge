import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { TEXT_ALIGN } from '../constants';

const List = props => <Container textAlign={props.textAlign}>
  {props.children}
</Container>;

List.defaultProps = {
  textAlign: 'left',
};

List.propTypes = {
  children: PropTypes.oneOfType[(PropTypes.element, PropTypes.array)],
  textAlign: PropTypes.oneOf(TEXT_ALIGN),
};

export default List;
