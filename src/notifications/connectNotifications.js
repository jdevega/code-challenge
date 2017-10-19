import { connect } from 'react-redux';
import * as Selectors from './selectors';

export default connect(Selectors.getAll);
