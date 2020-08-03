import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs/react';

import { moduleName } from '../-info';
import Icons from '.';

storiesOf(`${moduleName}/Icons`, module).add('Default', () => (
  <Icons
    type={select('type', ['ArrowLeft', 'ArrowRight'], 'ArrowLeft')}
    fill={text('fill', 'red')}
    width={text('width', '1.125rem')}
    height={text('height', '1.125rem')}
  />
));
