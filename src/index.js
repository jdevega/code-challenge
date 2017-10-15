import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import 'semantic-ui-css/semantic.min.css';

import store, { history } from './store';
import AppLayout from './ui/layout/App';
import Articles from './ui/screens/Articles';
import ViewArticle from './ui/screens/ViewArticle';
import EditArticle from './ui/screens/EditArticle';
import withLoader from './articles/withLoader';

const ArticlesWithLoader = withLoader(Articles);

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppLayout>
        <Route exact path="/" component={ArticlesWithLoader} />
        <Switch>
          <Route exact path="/article/edit/:id" component={EditArticle} />
          <Route exact path="/article/:id" component={ViewArticle} />
        </Switch>
      </AppLayout>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);
