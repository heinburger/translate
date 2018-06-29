import React from 'react';
import { mount } from 'enzyme';
import ToggleDrawerButton from './ToggleDrawerButton';

it('renders without crashing', () => {
  mount(<ToggleDrawerButton onClick={() => false}/>);
});
