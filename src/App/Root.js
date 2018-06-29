import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Router } from 'react-router-dom';

import ThemeProvider from '../Theme'
import { Wrapper, Drawer, Bar, Content } from '../Layout'

const Root = ({ history, theme, layout }) => (
  <Router history={history}>
    <ThemeProvider>
      <Wrapper>
        <Bar><div onClick={theme.toggleLightDark}>bar</div></Bar>
        <Drawer><div>drawer</div></Drawer>
        <Content>
          <div>content</div>
        </Content>
      </Wrapper>
    </ThemeProvider>
  </Router>
);

Root.propTypes = {
  layout: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default inject('layout', 'theme', 'history')(Root);
