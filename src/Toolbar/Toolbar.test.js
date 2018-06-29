import React from 'react';
import { mount } from 'enzyme';
import Toolbar from './Toolbar';
import StoreProvider from '../App/StoreProvider';
import AppStore from '../App/store';

it('renders without crashing', () => {
  mount(
    <StoreProvider store={ new AppStore() }>
      <Toolbar />
    </StoreProvider>
  );
});
