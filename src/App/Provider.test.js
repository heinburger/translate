import React from 'react';
import { mount } from 'enzyme';
import Provider from './Provider';
import AppStore from './store';

it('renders without crashing', () => {
  mount(
    <Provider store={ new AppStore() }>
      <div>withStore</div>
    </Provider>
  );
});
