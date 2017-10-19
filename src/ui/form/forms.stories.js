import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SubmitButton from './SubmitButton';
import Input from './Input';
import Checkbox from './Checkbox';
import TextArea from './TextArea';

storiesOf('UI/From', module)
  .add('Submit button', () => <SubmitButton />)
  .add('Input', () => <Input />)
  .add('Checkbox', () => {
    const onChange = action('Checkbox: onChange');
    const input = {
      value: boolean('value', false),
      name: 'name',
      onChange,
    };
    const meta = { error: text('error'), touched: boolean('touched', false) };

    return <Checkbox input={input} meta={meta} label={text('label', 'Field label')} />;
  })
  .add('TextArea', () => <TextArea />);
