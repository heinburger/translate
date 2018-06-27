import createBrowserHistory from 'history/createBrowserHistory';
import { createMuiTheme } from '@material-ui/core/styles'

import LayoutStore from '../Layout/store';

export default class AppStore {
  constructor() {
    this.history = createBrowserHistory();
    this.theme = createMuiTheme();
    this.layout = new LayoutStore(this);
  }
}
