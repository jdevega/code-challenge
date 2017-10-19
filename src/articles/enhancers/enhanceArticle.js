import {
  compose,
  // lifecycle,
  branch,
  renderComponent,
  withStateHandlers,
  withHandlers,
} from 'recompose';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { success } from 'react-notification-system-redux';
import { deleteArticle, goToArticles } from '../';
import Loading from '../../ui/common/Loading';
import { editArticlePath } from '../constants';
import { ARTICLE_QUERY } from '../queries';

const enhanceArticle = compose(
  withRouter,
  graphql(ARTICLE_QUERY, {
    options: props => ({
      fetchPolicy: 'cache-and-network',
      variables: {
        id: props.match.params.id,
      },
    }),
    props: ({ data }) => ({ ...data.article }),
  }),
  withStateHandlers(
    { modalOpen: false },
    {
      openModal: () => () => ({ modalOpen: true }),
      closeModal: () => () => ({ modalOpen: false }),
    },
  ),
  connect(null, { deleteArticle, success, goToArticles }),
  // lifecycle({
  //   componentWillMount() {
  //     this.props.findOne(this.props.match.params.id);
  //   },
  // }),
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
