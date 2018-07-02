import React from 'react';

import StoreProvider from './StoreProvider'
import Root from './Root';

const App = ({ store }) => (
  <StoreProvider store={store}>
    <Root />
  </StoreProvider>
);

export default App;
