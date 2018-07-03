import { decorate, observable, action, computed } from 'mobx';
import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';
import deepPurple from '@material-ui/core/colors/deepPurple';
import cyan from '@material-ui/core/colors/cyan';

import defaults from './defaults'

class ThemeStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  iconColors = {
    learning: teal[500],
    star: amber[500],
    snoozed: deepPurple[300],
    pin: cyan[500],
  };

  routeColors = {
    default: teal,
    snoozed: deepPurple,
    stars: amber,
    all: grey,
  }

  // OBSERVABLES................................................................
  settings = defaults;

  // COMPUTEDS..................................................................
  get currentTheme() {
    return createMuiTheme(this.settings);
  }

  // ACTIONS....................................................................
  toggleLightTheme = () => {
    this.settings.palette.type = this.settings.palette.type === 'light'
      ? 'dark'
      : 'light';
  }
}

decorate(ThemeStore, {
  settings: observable,
  currentTheme: computed,
  toggleLightTheme: action,
});

export default ThemeStore;
