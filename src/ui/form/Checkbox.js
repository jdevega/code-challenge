import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'semantic-ui-react';

const Input = ({ input, meta, label }) => (
  <Form.Field>
    <Checkbox
      error={!!(meta.touched && meta.error)}
      label={label}
      checked={!!input.value}
      onClick={(e, state) => input.onChange(state.checked)}
    />
    {meta.touched && meta.error ? <span style={{ color: '#9F3A38' }}>{meta.error}</span> : null}
  </Form.Field>
);

Input.defaultProps = {
  input: {},
  meta: {},
  label: 'Field label',
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
};

export default Input;
