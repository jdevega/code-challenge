import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const SubmitButton = props => <Button color="green" onClick={props.onSubmit}>{props.submitText}</Button>;

SubmitButton.defaultProps = {
  onSubmit: e => e.preventDefault(),
  submitText: 'Submit',
};

SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
};

export default SubmitButton;
