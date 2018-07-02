import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';
import createBrowserHistory from 'history/createBrowserHistory';

it('renders without crashing', () => {
  shallow(<Root history={createBrowserHistory()} />);
});
