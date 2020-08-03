import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { withKnobs } from '@storybook/addon-knobs/react';

addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>);
addDecorator(withKnobs);
