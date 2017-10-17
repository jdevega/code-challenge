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
import ArticleForm from './ui/screens/ArticleForm';
import enhanceArticles from './articles/enhancers/enhanceArticles';
import enhanceArticle from './articles/enhancers/enhanceArticle';
import withForm from './forms/withForm';

import { createArticle, editArticle } from './articles/actions';

const EnhancedArticles = enhanceArticles(Articles);
const EnhancedArticle = enhanceArticle(Article);
const menuItems = [
  <Menu.Item key="Articles"><Link to="/" >Articles</Link></Menu.Item>,
  <Menu.Item key="CreateArticle"><Link to="/create">New Article</Link></Menu.Item>,
];
const CreateArticle = withForm({
  title: 'Create Article',
  actions: { createArticle },
  onSubmit: (values, dispatch, props) => props.createArticle(values),
})(ArticleForm);

const EditArticle = withForm({
  title: 'Edit Article',
  actions: { editArticle },
  onSubmit: (values, dispatch, props) => props.editArticle(values),
})(ArticleForm);

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppLayout menuItems={menuItems}>
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
