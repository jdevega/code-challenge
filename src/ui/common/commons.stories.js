import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import CalendarDate from './CalendarDate';

storiesOf('UI/Common', module).add('Calendar Date', () => (
  <div style={{ background: 'rgba(45, 156, 219, 0.34)' }}>
    <CalendarDate dateText={text('dateText', '01/01/2017')} />
  </div>
));
