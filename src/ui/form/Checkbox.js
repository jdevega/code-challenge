import React from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import { Form, Checkbox } from 'semantic-ui-react';

const valueToBoolean = mapProps(props => ({
  ...props,
  input: { ...props.input, value: !!props.input.value },
}));

const CheckboxField = ({ input, meta, label }) => (
  <Form.Field>
    <Checkbox
      label={label}
      checked={!!input.value}
      onClick={(e, state) => input.onChange(state.checked)}
    />
    {meta.touched && meta.error ? <span style={{ color: '#9F3A38' }}>{meta.error}</span> : null}
  </Form.Field>
);

CheckboxField.defaultProps = {
  input: { value: false },
  meta: {},
  label: 'Field label',
};

CheckboxField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.bool,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

export default valueToBoolean(CheckboxField);
