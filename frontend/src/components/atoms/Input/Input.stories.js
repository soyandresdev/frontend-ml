import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import { moduleName } from '../-info';
import Input from './';

export const actions = {
  onChange: action('onChange'),
};

storiesOf(`${moduleName}/Input`, module).add('Default', () => (
  <Input
    type={text('type', 'text')}
    value={text('value', 'text')}
    placeholder={text('placeholder', 'placeholder')}
  />
));
