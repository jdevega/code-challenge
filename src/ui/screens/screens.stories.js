import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';
import Articles from './Articles';
import Article from './Article';
import Card from '../card/Card';
import ArticleFormScreen from './ArticleForm';

const excerpt =
  'Ut pharetra, nulla vitae lobortis venenatis, justo dui congue arcu, ut iaculis est dui id leo. Vivamus eu tortor vel massa efficitur fermentum. Nunc justo justo, molestie at vulputate quis, lacinia id nisl. Mauris quis quam et dolor fringilla ullamcorper. Morbi accumsan velit a turpis vulputate, non mollis nisi tincidunt';
const articles = [
  { id: 1, author: 'Author 1', excerpt },
  { id: 2, author: 'Author 2', excerpt },
  { id: 3, author: 'Author 3', excerpt },
  { id: 4, author: 'Author 4', excerpt },
  { id: 5, author: 'Author 5', excerpt },
  { id: 6, author: 'Author 6', excerpt },
];

const cards = articles.map(article => <Card key={article.id} {...article} />);

storiesOf('UI/Screens', module)
  .add('Articles', () => <Articles articles={cards} />)
  .add('Article', () => <Article tags={array('tags', ['tag 1', 'tag 2'])} />)
  .add('Article Form', () => <ArticleFormScreen />)
  ;
