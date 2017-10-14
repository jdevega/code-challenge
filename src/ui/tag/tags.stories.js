import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { COLORS, TEXT_ALIGN } from '../constants';
import Tag from './Tag';
import TagList from './List';

storiesOf('UI/Tag', module)
  .add('Tag', () => <Tag color={select('color', ['', ...COLORS])} />)
  .add('List', () => (
    <TagList textAlign={select('textAlign', TEXT_ALIGN)}>
      <Tag text="Tag 1" />
      <Tag text="Tag 2" />
    </TagList>
  ));
