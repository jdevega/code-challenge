import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const Input = props => (
  <Form.Field>
    <Form.Input
      error={!!(props.meta.touched && props.meta.error)}
      label={props.label}
      placeholder={props.placeholder}
      {...props.input}
    />
    {props.meta.touched && props.meta.error ? (
      <span style={{ color: '#9F3A38' }}>{props.meta.error}</span>
    ) : null}
  </Form.Field>
);

Input.defaultProps = {
  input: { value: '' },
  meta: {},
  label: 'Field label',
  placeholder: 'Field placeholder',
};

Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  placeholder: PropTypes.string,
};

export default Input;
