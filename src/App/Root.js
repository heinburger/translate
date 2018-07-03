import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';

import Theme from '../Theme';
import Routes from './Routes';

const Root = ({ history }) => (
  <Theme>
    <Router history={history}>
      <Routes />
    </Router>
  </Theme>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Root;
