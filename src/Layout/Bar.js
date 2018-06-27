import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  appBar: {
    top: 0,
  },
})

const Bar = ({ layout, classes, theme, children }) => (
  <AppBar
    className={classes.appBar}
    style={{
      right: 0,
      left: 'auto',
      width: layout.showTempDrawer ? '100%' : `calc(100% - ${theme.drawerWidth}px)`,
    }}
  >
    {children}
  </AppBar>
)

Bar.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
}

export default inject('layout')(withStyles(styles, { withTheme: true })(observer(Bar)))
