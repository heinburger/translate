import React from 'react';
import { mount } from 'enzyme';
import Provider from './Provider';
import ThemeStore from './store';

it('renders without crashing', () => {
  mount(
    <Provider theme={ new ThemeStore() }>
      <div>themed</div>
    </Provider>
  );
});
