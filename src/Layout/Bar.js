import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  appBar: {
    right: 0,
    left: 'auto',
    position: 'absolute',
    marginLeft: theme.drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.drawerWidth}px)`,
    },
  },
});

const Bar = ({ showTempDrawer, classes, theme, children }) => (
  <MuiAppBar
    className={classes.appBar}
    style={{
      width: showTempDrawer ? '100%' : `calc(100% - ${theme.drawerWidth}px)`,
    }}
  >
    <MuiToolbar>
      {children}
    </MuiToolbar>
  </MuiAppBar>
);

Bar.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  showTempDrawer: PropTypes.bool.isRequired,
};

const StyledBar = withStyles(styles, { withTheme: true})(Bar)

const InjectedBar = ({ layout, ...rest }) => (
  <StyledBar
    showTempDrawer={layout.showTempDrawer}
    { ...rest }
  />
);

export default inject('layout')(observer(InjectedBar));
