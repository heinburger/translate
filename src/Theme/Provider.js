import React from 'react';
import { inject, observer } from 'mobx-react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const Provider = ({ theme, children }) => (
  <MuiThemeProvider theme={theme.currentTheme}>
    {children}
  </MuiThemeProvider>
);

Provider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default inject('theme')(observer(Provider));
