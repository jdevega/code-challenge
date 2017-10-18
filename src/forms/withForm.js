import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
// import { is } from 'ramda';

const withForm = (params = {}) =>
  compose(
    connect(params.selector, params.actions),
    lifecycle({
      componentWillMount() {
        if (typeof this.props.loader === 'function') {
          this.props.loader(this.props.id);
        }
      },
    }),
    reduxForm({ form: 'article', ...params.options, onSubmit: params.onSubmit }),
  );

export default withForm;
