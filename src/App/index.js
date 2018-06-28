import React from 'react';

import Provider from './Provider'
import Root from './Root';

const App = ({ store }) => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
