import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import ToggleDrawerButton from './ToggleDrawerButton';

const Toolbar = ({ layout }) => (
  <React.Fragment>
    {layout.showTempDrawer
      ? <ToggleDrawerButton onClick={layout.toggleTempDrawer} />
      : <React.Fragment />}
  </React.Fragment>
);

Toolbar.propTypes = {
  layout: PropTypes.object.isRequired,
};

export default inject('layout')(observer(Toolbar));
