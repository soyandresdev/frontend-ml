import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { moduleName } from '../-info';
import ResposiveImage from './';

const small =
  'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg';
const medium =
  'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_768.jpg';
const large =
  'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_1280.jpg';

storiesOf(`${moduleName}/ResposiveImage`, module).add('Default', () => (
  <ResposiveImage
    alt={text('alt', 'text')}
    small={text('small', small)}
    medium={text('medium', medium)}
    large={text('large', large)}
  />
));
