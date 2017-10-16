import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getOne, findOne } from './';
import Loading from '../ui/common/Loading';


const enhanceArticle = compose(
  withRouter,
  connect(getOne, { findOne }),
  lifecycle({
    componentWillMount() {
      this.props.findOne(this.props.match.params.id);
    },
  }),
  branch(props => !props.title, renderComponent(Loading)),
);

export default enhanceArticle;
