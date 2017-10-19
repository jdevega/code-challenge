import React from 'react';
import { Field } from 'redux-form';
import { compose, withPropsOnChange } from 'recompose';
import { equals, not } from 'ramda';
import createValidator from './validations';

const withReduxFieldComponent = FieldComponent => props =>
  <Field component={FieldComponent} {...props} />;

const withReduxField = InputField => {
  const field = InputField;
  return compose(
    withPropsOnChange(
      (props, nextProps) => not(equals(props.validate, nextProps.validate)),
      props => {
        const { validate, name, ...rest } = props;
        return { ...rest, props: { name }, validate: createValidator(validate) };
      },
    ),
    withReduxFieldComponent,
  )(field);
};

export default withReduxField;
