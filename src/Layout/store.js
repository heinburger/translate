import { decorate, observable, action, computed } from 'mobx';
import { getScreenWidth } from '../utils';

class LayoutStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  // OBSERVABLES................................................................
  tempDrawerOpen = false;
  shouldHidePermDrawer = false;
  screenWidth = getScreenWidth();

  // COMPUTEDS..................................................................
  get showTempDrawer() {
    return this.screenWidth <= 960 || this.shouldHidePermDrawer;
  }

  // ACTIONS....................................................................
  onScreenResize = () => {
    this.screenWidth = getScreenWidth();
  }

  toggleTempDrawer = () => {
    this.tempDrawerOpen = !this.tempDrawerOpen;
  }
}

decorate(LayoutStore, {
  tempDrawerOpen: observable,
  shouldHidePermDrawer: observable,
  test: observable,
  screenWidth: observable,
  showTempDrawer: computed,
  onScreenResize: action,
  toggleTest: action,
  toggleTempDrawer: action,
});

export default LayoutStore;
