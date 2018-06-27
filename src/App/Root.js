import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { inject, observer } from 'mobx-react';

import { Wrapper, Drawer, Bar } from '../Layout'

const Root = ({ history, theme, layout }) => (
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <Wrapper>
        <Bar><div>bar</div></Bar>
        <Drawer><div>drawer</div></Drawer>
        <div>content</div>
      </Wrapper>
    </MuiThemeProvider>
  </Router>
);

Root.propTypes = {
  layout: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default inject('layout', 'theme', 'history')(observer(Root));
