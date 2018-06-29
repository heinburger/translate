import React from 'react';
import { mount } from 'enzyme';
import StoreProvider from './StoreProvider';
import Root from './Root';
import AppStore from './store';

it('renders without crashing', () => {
  mount(
    <StoreProvider store={ new AppStore() }>
      <Root />
    </StoreProvider>
  );
});
