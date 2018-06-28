import createBrowserHistory from 'history/createBrowserHistory';

import LayoutStore from '../Layout/store';
import ThemeStore from '../Theme/store';

export default class AppStore {
  constructor() {
    this.history = createBrowserHistory();
    this.layout = new LayoutStore(this);
    this.theme = new ThemeStore(this);
  }
}
