import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { getAll, findAll } from './';
import Loading from '../ui/common/Loading';

const withLoader = compose(
  connect(getAll, { findAll }),
  lifecycle({
    componentWillMount() {
      this.props.findAll();
    },
  }),
  branch(props => props.articles.length === 0, renderComponent(Loading)),
);


export default withLoader
;
