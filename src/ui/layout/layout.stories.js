import React from 'react';
import { storiesOf } from '@storybook/react';
import { Menu } from 'semantic-ui-react';
import App from './App';
import Header from './Header';
import Footer from './Footer';

const menuItems = [<Menu.Item as="div" key="articles">Articles</Menu.Item>];

storiesOf('UI/Layout', module)
  .add('App', () => (
    <App menuItems={menuItems}>
      <div>This is the main content</div>
    </App>
  ))
  .add('Header', () => <Header menuItems={menuItems} />)
  .add('Footer', () => <Footer />);
