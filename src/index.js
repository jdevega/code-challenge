import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import 'semantic-ui-css/semantic.min.css';

import store, { history } from './store';
import AppLayout from './ui/layout/App';
import Articles from './ui/screens/Articles';
import Article from './ui/screens/Article';
import EditArticle from './ui/screens/EditArticle';
import withEnhancedCards from './articles/withEnhancedCards';

const ArticlesWithLoader = withEnhancedCards(Articles);

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppLayout>
        <Route exact path="/" component={ArticlesWithLoader} />
        <Switch>
          <Route exact path="/article/edit/:id" component={EditArticle} />
          <Route exact path="/article/:id" component={Article} />
        </Switch>
      </AppLayout>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
