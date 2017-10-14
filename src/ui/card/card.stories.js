import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from './Card';
import Group from './Group';

const excerpt = 'Ut pharetra, nulla vitae lobortis venenatis, justo dui congue arcu, ut iaculis est dui id leo. Vivamus eu tortor vel massa efficitur fermentum. Nunc justo justo, molestie at vulputate quis, lacinia id nisl. Mauris quis quam et dolor fringilla ullamcorper. Morbi accumsan velit a turpis vulputate, non mollis nisi tincidunt';
const cards = [
  { author: 'Author 1', excerpt },
  { author: 'Author 2', excerpt },
  { author: 'Author 3', excerpt },
  { author: 'Author 4', excerpt },
  { author: 'Author 5', excerpt },
  { author: 'Author 6', excerpt },
];

storiesOf('UI/Card', module)
.add('Card', () => <Card onEditClick={action('Card: onEditClick')} />)
.add('Group', () => <Group>{cards.map(props => <Card key={props.author} {...props} />)}</Group>);
