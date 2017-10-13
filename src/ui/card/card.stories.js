import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, array } from '@storybook/addon-knobs';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

storiesOf('UI/Card', module)
  .add('Header', () => (
    <div className="card">
      <Header author={text('author', 'Author name')} />
    </div>
  ))
  .add('Footer', () => (
    <div className="card">
      <Footer tags={array('tags', ['tag 1', 'tag 2'])} dateText={text('dateText', '01/01/2017')} />
    </div>
  ))
  .add('Card', () => <Card />);
