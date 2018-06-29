import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import EventListener from 'react-event-listener';

const styles = theme => ({
  wrapper: {
    flexGrow: 1,
    zIndex: 1,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

const Wrapper = ({ classes, children, onScreenResize }) => (
  <div className={classes.wrapper}>
    {children}
    <EventListener target='window' onResize={onScreenResize} />
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  classes: PropTypes.object.isRequired,
  onScreenResize: PropTypes.func.isRequired,
};

const StyledWrapper = withStyles(styles)(Wrapper);

const InjectedWrapper = ({ layout, ...rest }) => (
  <StyledWrapper
    { ...rest }
    onScreenResize={layout.onScreenResize}
  />
);

export default inject('layout')(InjectedWrapper);
