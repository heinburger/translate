import React from 'react';

import DevTools from 'mobx-react-devtools';
import StoreProvider from './StoreProvider'
import Root from './Root';

const App = ({ store }) => (
  <StoreProvider store={store}>
    <React.Fragment>
      <DevTools />
      <Root history={store.history} />
    </React.Fragment>
  </StoreProvider>
);

export default App;
