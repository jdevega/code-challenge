import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input as InputComponent } from 'semantic-ui-react';

const Input = ({ input, required, meta: { touched, error }, ...rest }) => (
  <Form.Field error={!!(touched && error)} required={required}>
    <InputComponent required={required} {...input} {...rest} />
    {touched && error ? <span style={{ color: '#9F3A38' }}>{error}</span> : null}
  </Form.Field>
);

Input.defaultProps = {
  input: {},
  meta: {},
  required: false,
  label: 'Field label',
  placeholder: 'Field placeholder',
};

Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
