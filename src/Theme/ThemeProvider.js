import React from 'react';
import { inject, observer } from 'mobx-react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const ThemeProvider = ({ theme, children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

const InjectedThemeProvider = ({ theme, ...rest }) => (
  <ThemeProvider
    theme={theme.currentTheme}
    { ...rest }
  />
);

export default inject('theme')(observer(InjectedThemeProvider));
