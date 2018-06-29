import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
// import MuiDivider from '@material-ui/core/Divider';

const styles = theme => ({
  drawerPaper: {
    width: theme.drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
});

const Drawer = ({ showTempDrawer, tempDrawerOpen, toggleTempDrawer, classes, children }) => (
  <MuiDrawer
    variant={showTempDrawer ? 'temporary' : 'permanent'}
    anchor='left'
    open={showTempDrawer ? tempDrawerOpen : true}
    onClose={toggleTempDrawer}
    classes={{
      paper: classes.drawerPaper,
    }}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
  >
    {children}
  </MuiDrawer>
)

Drawer.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  showTempDrawer: PropTypes.bool.isRequired,
  tempDrawerOpen: PropTypes.bool.isRequired,
  toggleTempDrawer: PropTypes.func.isRequired,
}

const StyledDrawer = withStyles(styles)(Drawer);

const InjectedDrawer = ({ layout, ...rest }) => (
  <StyledDrawer
    showTempDrawer={layout.showTempDrawer}
    tempDrawerOpen={layout.tempDrawerOpen}
    toggleTempDrawer={layout.toggleTempDrawer}
    { ...rest }
  />
);

export default inject('layout')(observer(InjectedDrawer));
