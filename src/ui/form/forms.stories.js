import React from 'react';
import { storiesOf } from '@storybook/react';
import ArticleFrom from './ArticleForm';
import SubmitButton from './SubmitButton';
import Input from './Input';

storiesOf('UI/From', module)
  .add('Submit button', () => <SubmitButton />)
  .add('Input', () => <Input />)
  .add('Article Form', () => <ArticleFrom />);
