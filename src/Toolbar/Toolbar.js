import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

import ToggleDrawerButton from './ToggleDrawerButton';
import ToggleLightThemeButton from './ToggleLightThemeButton';
import GithubLinkButton from './GithubLinkButton';
import Search from '../Search'

const styles = theme => ({
  title: Object.assign({}, theme.mixins.gutters(), {
    flex: '1 1 auto',
  }),
});

const Toolbar = ({ layout, classes }) => (
  <React.Fragment>
    {layout.showTempDrawer
      ? <ToggleDrawerButton />
      : <React.Fragment />}
    <Typography
      className={classes.title}
      variant='title'
      color='inherit'
      noWrap
    >
      WhatupWhatupWhatupToolbarToolbar
    </Typography>
    <Search />
    <ToggleLightThemeButton />
    <GithubLinkButton />
  </React.Fragment>
);

Toolbar.propTypes = {
  layout: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  inject('layout')(observer(Toolbar))
);
