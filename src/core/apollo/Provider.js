import { ApolloProvider } from 'react-apollo';
import { withProps } from 'recompose';
import client from './client';

export default withProps({
  client,
})(ApolloProvider);
