import { decorate, observable, action, computed } from 'mobx';
import { createMuiTheme } from '@material-ui/core/styles'

import defaults from './defaults'

class ThemeStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  // OBSERVABLES................................................................
  settings = defaults;

  // COMPUTEDS..................................................................
  get currentTheme() {
    return createMuiTheme(this.settings);
  }

  // ACTIONS....................................................................
  toggleLightDark = () => {
    this.settings.palette.type = this.settings.palette.type === 'light'
      ? 'dark'
      : 'light';
  }
}

decorate(ThemeStore, {
  settings: observable,
  currentTheme: computed,
  toggleLightDark: action,
});

export default ThemeStore;
