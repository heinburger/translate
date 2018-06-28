import React from 'react';
import { mount } from 'enzyme';
import { Provider } from './Provider';
import Root from './Root';
import AppStore from './store';

it('renders without crashing', () => {
  mount(
    <Provider store={ new AppStore() }>
      <Root />
    </Provider>
  );
});
