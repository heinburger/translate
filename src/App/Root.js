import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Router } from 'react-router-dom';

import ThemeProvider from '../Theme';
import { Wrapper, Drawer, Bar, Content } from '../Layout';
import Toolbar from '../Toolbar'

const Root = ({ history, toggleLightDark }) => (
  <Router history={history}>
    <ThemeProvider>
      <Wrapper>
        <Bar><Toolbar /></Bar>
        <Drawer><div>drawer</div></Drawer>
        <Content>
          <div>content</div>
        </Content>
      </Wrapper>
    </ThemeProvider>
  </Router>
);

Root.propTypes = {
  toggleLightDark: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const InjectedRoot = ({ history, theme, ...rest }) => (
  <Root
    toggleLightDark={theme.toggleLightDark}
    history={history}
    { ...rest }
  />
);

export default inject('theme', 'history')(InjectedRoot);
