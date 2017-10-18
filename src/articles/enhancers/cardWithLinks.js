import { withHandlers, compose } from 'recompose';
import { withRouter } from 'react-router';

export default compose(
  withRouter,
  withHandlers({
    onEditClick: props => () => props.history.push(`/edit/${props.id}`),
    onViewClick: props => () => props.history.push(`/${props.id}`),
  }),
);
