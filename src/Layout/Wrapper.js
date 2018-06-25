import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import EventListener from 'react-event-listener';

const styles = theme => ({
  frame: {
    width: '100%',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'stretch',
  },
});

const Wrapper = ({ classes, children }) => (
  <div className={classes.frame}>
    {children}
    <EventListener target='window' onResize={() => console.log('resize')} />
  </div>
);

export default withStyles(styles)(Wrapper);
