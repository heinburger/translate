import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { Router } from 'react-router-dom';

import ThemeProvider from '../Theme';
import { Wrapper, Drawer, Bar, Content } from '../Layout';
import Toolbar from '../Toolbar';
import Menu from '../Menu';

const Root = ({ history }) => (
  <Router history={history}>
    <ThemeProvider>
      <Wrapper>
        <Bar><Toolbar /></Bar>
        <Drawer><Menu /></Drawer>
        <Content>
          <div>content</div>
        </Content>
      </Wrapper>
    </ThemeProvider>
  </Router>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
};

export default inject('history')(Root);
