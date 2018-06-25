import React from 'react';
import PropTypes from 'prop-types';
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

const Wrapper = ({ classes, children, onResize }) => (
  <div className={classes.frame}>
    {children}
    <EventListener target='window' onResize={onResize} />
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  onResize: PropTypes.func,
};

Wrapper.defaultProps = {
  children: <div />,
  onResize: () => { console.warn('no onResize function was supplied to Wrapper') },
};

export default withStyles(styles)(Wrapper);
