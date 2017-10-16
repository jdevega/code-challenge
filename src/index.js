import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import store, { history } from './store';
import AppLayout from './ui/layout/App';
import Articles from './ui/screens/Articles';
import Article from './ui/screens/Article';
import EditArticle from './ui/screens/EditArticle';
import enhanceArticles from './articles/enhanceArticles';
import enhanceArticle from './articles/enhanceArticle';
import withHomeLink from './links/withHomeLink';

const EnhancedArticles = enhanceArticles(Articles);
const EnhancedArticle = enhanceArticle(Article);
const HomeLink = withHomeLink(Menu.Item);
const menuItems = [
  <HomeLink as="a" key="Articles">Articles</HomeLink>,
];

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppLayout menuItems={menuItems}>
        <Route exact path="/" component={EnhancedArticles} />
        <Switch>
          <Route exact path="/edit/:id" component={EditArticle} />
          <Route exact path="/:id" component={EnhancedArticle} />
        </Switch>
      </AppLayout>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
