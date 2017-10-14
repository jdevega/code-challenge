import React from 'react';
import { storiesOf } from '@storybook/react';
// import { text } from '@storybook/addon-knobs';
import App from './App';
import Header from './Header';
import Footer from './Footer';

storiesOf('UI/Layout', module).add('App', () => (
  <App />
)).add('Header', () => (
  <Header />
)).add('Footer', () => (
  <Footer />
));
