import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import { moduleName } from '../-info';
import Button from '.';

export const actions = {
  onClick: action('onClick'),
};

const children = text('text', 'Comprar');

storiesOf(`${moduleName}/Button`, module).add('Default', () => (
  <Button {...actions}>{children}</Button>
));
