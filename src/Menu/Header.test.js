import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import createBrowserHistory from 'history/createBrowserHistory';

it('renders without crashing', () => {
  mount(<Header history={createBrowserHistory()} />);
});
