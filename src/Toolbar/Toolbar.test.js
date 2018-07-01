import React from 'react';
import { mount } from 'enzyme';
import Toolbar from './Toolbar';
import StoreProvider from '../App/StoreProvider';
import LayoutStore from '../Layout/store';
import ThemeStore from '../Theme/store';

it('renders without crashing', () => {
  mount(<Toolbar layout={ new LayoutStore() } theme={ new ThemeStore() } />);
});
