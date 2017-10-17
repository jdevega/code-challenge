import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

const withForm = (params = {}) => compose(
  connect(undefined, params.actions),
  reduxForm({ form: 'article', ...params.options, onSubmit: params.onSubmit }),
  withProps({
    title: params.title,
  }),
);

export default withForm;
