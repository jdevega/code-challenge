import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SubmitButton from './SubmitButton';
import Input from './Input';
import Checkbox from './Checkbox';
import TextArea from './TextArea';

storiesOf('UI/From', module)
  .add('Submit button', () => <SubmitButton />)
  .add('Input', () => <Input />)
  .add('Checkbox', () => <Checkbox
    input={
      object('input', {
        value: false,
        name: 'name',
        onChange: action('Checkbox: onChange'),
      })
    }
    meta={object('meta', { error: false, touched: false })}
    label={text('label', 'Field label')}
  />)
  .add('TextArea', () => <TextArea />);
