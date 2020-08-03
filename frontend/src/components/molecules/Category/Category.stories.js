import React from 'react';
import { storiesOf } from '@storybook/react';

import { moduleName } from '../-info';
import Category from './';

storiesOf(`${moduleName}/Category`, module).add('Default', () => (
  <Category categories={['Celulares', 'Iphone', '32GB']} />
));
