import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import store, { history } from './store';
import AppLayout from './ui/layout/App';
import Articles from './ui/screens/Articles';
import Article from './ui/screens/Article';
import enhanceArticles from './articles/enhancers/enhanceArticles';
import enhanceArticle from './articles/enhancers/enhanceArticle';
import EditArticle from './articles/views/EditArticle';
import CreateArticle from './articles/views/CreateArticle';
import Notifications from './notifications/Notifications';

const EnhancedArticles = enhanceArticles(Articles);
const EnhancedArticle = enhanceArticle(Article);
const menuItems = [
  <Menu.Item key="Articles">
    <Link to="/">Articles</Link>
  </Menu.Item>,
  <Menu.Item key="CreateArticle">
    <Link to="/create">New Article</Link>
  </Menu.Item>,
];

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppLayout menuItems={menuItems}>
        <Notifications />
        <Route exact path="/" component={EnhancedArticles} />
        <Switch>
          <Route exact path="/create" component={CreateArticle} />
          <Route exact path="/edit/:id" component={EditArticle} />
          <Route exact path="/:id" component={EnhancedArticle} />
        </Switch>
      </AppLayout>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
