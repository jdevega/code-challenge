import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import AnimatedButton from './AnimatedButton';
import Loading from './Loading';
import { COLORS } from '../constants';

storiesOf('UI/Common', module)
.add('Animated Button', () =>
  <AnimatedButton color={select('color', ['', ...COLORS])} />,
).add('Loading', () => <Loading />);
