import { decorate, observable, action } from 'mobx';
import { getScreenWidth } from '../utils';

class LayoutStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  tempDrawerOpen = false;
  shouldHidePermDrawer = false;
  screenWidth = getScreenWidth();
  layoutRight = false;

  onScreenResize = () => {
    this.screenWidth = getScreenWidth();
  }
}

decorate(LayoutStore, {
  tempDrawerOpen: observable,
  shouldHidePermDrawer: observable,
  screenWidth: observable,
  layoutRight: observable,
  onScreenResize: action,
});

export default LayoutStore;
