import LayoutStore from '../Layout/store';

export default class AppStore {
  constructor() {
    this.layout = new LayoutStore(this);
  }
}
