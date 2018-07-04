import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import StarBorder from '@material-ui/icons/StarBorder';
import ColorLens from '@material-ui/icons/ColorLens';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import Rowing from '@material-ui/icons/Rowing';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import BubbleChart from '@material-ui/icons/BubbleChart';
import Gesture from '@material-ui/icons/Gesture';
import Inbox from '@material-ui/icons/Inbox';

import MenuItem from './Item';

const styles = theme => ({
  root: {
    width: '100%',
    paddingBottom: `${theme.spacing.unit * 8}px`,
  },
  divider: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Items extends React.Component {
  onMenuItemClick = (path) => {
    const { history, layout } = this.props;
    history.push(path);
    layout.closeTempDrawer();
  }
  render() {
    const { classes, theme, location } = this.props;
    return (
      <List className={classes.root}>
        <MenuItem
          disabled
          onClick={() => this.onMenuItemClick('/learning')}
          selected={location.pathname === '/learning'}
          icon={<Inbox style={{color: theme.iconColors.learning}} />}
          title={'Learning'}
        />
        <MenuItem
          disabled
          onClick={() => this.onMenuItemClick('/snoozed')}
          selected={location.pathname === '/snoozed'}
          icon={<QueryBuilder style={{color: theme.iconColors.snoozed}} />}
          title={'Snoozed'}
        />
        <Divider className={classes.divider} />
        <MenuItem
          onClick={() => this.onMenuItemClick('/list/all')}
          selected={location.pathname === '/list/all'}
          icon={<FormatListBulleted />}
          title={'All'}
        />
        <MenuItem
          onClick={() => this.onMenuItemClick('/list/stars')}
          selected={location.pathname === '/list/stars'}
          icon={<StarBorder style={{color: theme.iconColors.star}} />}
          title={'Stars'}
        />
        <MenuItem
          onClick={() => this.onMenuItemClick('/list/verbs')}
          selected={location.pathname === '/list/verbs'}
          icon={<DirectionsRun />}
          title={'Verbs'}
        />
        <MenuItem
          onClick={() => this.onMenuItemClick('/list/nouns')}
          selected={location.pathname === '/list/nouns'}
          icon={<BubbleChart />}
          title={'Nouns'}
        />
        <MenuItem
          onClick={() => this.onMenuItemClick('/list/adjectives')}
          selected={location.pathname === '/list/adjectives'}
          icon={<ColorLens />}
          title={'Adjectives'}
        />
        <MenuItem
          onClick={() => this.onMenuItemClick('/list/others')}
          selected={location.pathname === '/list/others'}
          icon={<Gesture />}
          title={'Others'}
        />
        <MenuItem
          disabled
          onClick={() => this.onMenuItemClick('/practice')}
          selected={location.pathname === '/practice'}
          icon={<Rowing />}
          title={'Practice'}
        />
      </List>
    );
  }
}

Items.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(
  inject('theme', 'layout')(Items)
));
