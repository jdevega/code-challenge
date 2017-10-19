import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const Input = ({ input, meta, label, placeholder }) => (
  <Form.Field>
    <Form.TextArea
      error={!!(meta.touched && meta.error)}
      label={label}
      placeholder={placeholder}
      {...input}
    />
    {meta.touched && meta.error ? <span style={{ color: '#9F3A38' }}>{meta.error}</span> : null}
  </Form.Field>
);

Input.defaultProps = {
  input: {},
  meta: {},
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
};

export default Input;
