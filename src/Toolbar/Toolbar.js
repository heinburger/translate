import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

import ToggleDrawerButton from './ToggleDrawerButton';
import ToggleLightThemeButton from './ToggleLightThemeButton';

const styles = theme => ({
  title: Object.assign({}, theme.mixins.gutters(), {
    flex: '1 1 auto',
  }),
});

const Toolbar = ({ layout, theme, classes }) => (
  <React.Fragment>
    {layout.showTempDrawer
      ? <ToggleDrawerButton onClick={layout.toggleTempDrawer} />
      : <React.Fragment />}
    <Typography
      className={classes.title}
      variant='title'
      color='inherit'
      noWrap
    >
      Whatup
    </Typography>
    <ToggleLightThemeButton onClick={theme.toggleLightTheme} />
  </React.Fragment>
);

Toolbar.propTypes = {
  layout: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  inject('layout', 'theme')(observer(Toolbar))
);
