import React from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import PropTypes from 'prop-types';

// this component dictates which stores can be injected in app components
const Provider = ({ store, children }) => (
  <MobxProvider
    history={store.history}
    theme={store.theme}
    layout={store.layout}
  >
    {children}
  </MobxProvider>
);

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default Provider;
