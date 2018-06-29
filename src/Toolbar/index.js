import React from 'react';
import { inject, observer } from 'mobx-react';

import ToggleDrawerButton from './ToggleDrawerButton'

const Toolbar = ({ showTempDrawer, toggleTempDrawer }) => (
  <React.Fragment>
    {showTempDrawer
      ? <ToggleDrawerButton onClick={toggleTempDrawer} />
      : <React.Fragment />}
  </React.Fragment>
);

const InjectedToolbar = ({ layout, ...rest }) => (
  <Toolbar
    showTempDrawer={layout.showTempDrawer}
    toggleTempDrawer={layout.toggleTempDrawer}
    { ...rest }
  />
);

export default inject('layout')(observer(InjectedToolbar));
