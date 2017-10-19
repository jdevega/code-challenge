import {
  compose,
  lifecycle,
  branch,
  renderComponent,
  withStateHandlers,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { success } from 'react-notification-system-redux';
import { getOne, findOne, deleteArticle, goToArticles } from '../';
import Loading from '../../ui/common/Loading';
import { editArticlePath } from '../constants';

const enhanceArticle = compose(
  withStateHandlers(
    { modalOpen: false },
    {
      openModal: () => () => ({ modalOpen: true }),
      closeModal: () => () => ({ modalOpen: false }),
    },
  ),
  withRouter,
  connect(getOne, { findOne, deleteArticle, success, goToArticles }),
  lifecycle({
    componentWillMount() {
      this.props.findOne(this.props.match.params.id);
    },
  }),
  branch(props => !props.title, renderComponent(Loading)),
  withHandlers({
    onEditClick: props => () => props.history.push(editArticlePath(props.match.params.id)),
    onDeleteClick: props => () => props.openModal(),
    onConfirmDeleteClick: props => () =>
      props.deleteArticle(props.match.params.id).then(() => {
        props.closeModal();
        props.goToArticles();
        props.success({
          message: `${props.title} removed successfully`,
          position: 'tr',
          autoDismiss: 5,
        });
      }),
    onCancelDeleteClick: props => () => {
      props.closeModal();
    },
  }),
);

export default enhanceArticle;
