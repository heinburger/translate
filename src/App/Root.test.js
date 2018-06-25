import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';
import Root from './Root';
import LayoutStore from '../Layout/store';

it('renders without crashing (needs a provider)', () => {
  mount(
    <Provider layout={ new LayoutStore() }>
      <Root />
    </Provider>
  );
});
