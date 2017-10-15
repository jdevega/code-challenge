import { withHandlers, compose } from 'recompose';
import { withRouter } from 'react-router';

export default compose(
  withRouter,
  withHandlers({
    onClick: props => () => props.history.push('/'),
  }),
)
;
