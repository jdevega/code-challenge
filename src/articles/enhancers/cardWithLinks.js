import { withHandlers, compose } from 'recompose';
import { withRouter } from 'react-router';
import { editArticlePath, viewArticlePath } from '../constants';

export default compose(
  withRouter,
  withHandlers({
    onEditClick: props => () => props.history.push(editArticlePath(props.id)),
    onViewClick: props => () => props.history.push(viewArticlePath(props.id)),
  }),
);
