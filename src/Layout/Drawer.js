import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
// import MuiDivider from '@material-ui/core/Divider';

const styles = theme => ({
  drawerPaper: {
    width: theme.drawerWidth,
  },
})

const Drawer = ({ layout, classes, children }) => (
  <nav>
    <MuiDrawer
      variant={layout.showTempDrawer ? 'temporary' : 'permanent'}
      anchor='left'
      open={layout.showTempDrawer ? layout.tempDrawerOpen : true}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClose={layout.toggleTempDrawer}
      ModalProps={{
        keepMounted: true, // better open performance on mobile.
      }}
    >
      {children}
    </MuiDrawer>
  </nav>
)

Drawer.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
}

export default inject('layout')(observer(withStyles(styles, { withTheme: true })(Drawer)))
