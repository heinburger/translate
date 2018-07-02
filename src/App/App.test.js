import React from 'react';
import { mount } from 'enzyme';
import App from './App'
import AppStore from './store';

it('renders without crashing', () => {
  mount(<App store={ new AppStore() } />);
});
