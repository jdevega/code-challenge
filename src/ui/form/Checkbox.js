import React from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import { Form, Checkbox } from 'semantic-ui-react';
import { pathOr } from 'ramda';

const valueToBoolean = mapProps(props => ({
  ...props,
  input: { ...props.input, value: !!pathOr(false, ['input', 'value'], props) },
}));

const CheckboxField = props => {
  console.log(props);
  return (
    <Form.Field>
      <Checkbox
        label={props.label}
        checked={!!props.input.value}
        onClick={(e, state) => props.input.onChange(state.checked)}
      />
      {props.meta.touched && props.meta.error ? <span style={{ color: '#9F3A38' }}>{props.meta.error}</span> : null}
    </Form.Field>
  )
;
};

CheckboxField.defaultProps = {
  input: { value: false },
  meta: {},
  label: 'Field label',
};

CheckboxField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

export default valueToBoolean(CheckboxField);
