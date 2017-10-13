import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from './Tag';
import TagList from './List';

storiesOf('UI/Tag', module)
  .add('Tag', () => <Tag />)
  .add('List', () => (
    <TagList>
      <Tag text="Tag 1" />
      <Tag text="Tag 2" />
    </TagList>
  ));
