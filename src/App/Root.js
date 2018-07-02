import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Router } from 'react-router-dom';

import Theme from '../Theme';
import Routes from './Routes';

const Root = ({ history }) => (
  <Router history={history}>
    <Theme>
      <Routes />
    </Theme>
  </Router>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
};

export default inject('history')(observer(Root));
