import React from 'react';
import { storiesOf } from '@storybook/react';
import { Menu } from 'semantic-ui-react';
// import { text } from '@storybook/addon-knobs';
import App from './App';
import Header from './Header';
import Footer from './Footer';

const menuItems = [<Menu.Item as="a">Articles</Menu.Item>];

storiesOf('UI/Layout', module)
  .add('App', () => (
    <App menuItems={menuItems}>
      <div>This is the main content</div>
    </App>
  ))
  .add('Header', () => <Header menuItems={menuItems} />)
  .add('Footer', () => <Footer />);
