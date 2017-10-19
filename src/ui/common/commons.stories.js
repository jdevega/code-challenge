import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import AnimatedButton from './AnimatedButton';
import Loading from './Loading';
import PublishedLabel from './PublishedLabel';
import Modal from './Modal';
import { COLORS, MODAL_SIZES } from '../constants';

storiesOf('UI/Common', module)
  .add('Animated Button', () => <AnimatedButton color={select('color', ['', ...COLORS])} />)
  .add('Loading', () => <Loading />)
  .add('Published Label', () => <PublishedLabel />)
  .add('Modal', () => <Modal size={select('size', MODAL_SIZES)} />);
