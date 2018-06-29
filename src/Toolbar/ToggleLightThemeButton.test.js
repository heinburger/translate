import React from 'react';
import { mount } from 'enzyme';
import ToggleLightThemeButton from './ToggleLightThemeButton';

it('renders without crashing', () => {
  mount(<ToggleLightThemeButton onClick={() => false}/>);
});
