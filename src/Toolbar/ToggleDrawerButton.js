import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const ToggleDrawerButton = ({ onClick }) => (
  <IconButton
    key='toggle-temp-drawer-button'
    color='inherit'
    aria-label='open drawer'
    onClick={onClick}
  >
    <MenuIcon />
  </IconButton>
);

ToggleDrawerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ToggleDrawerButton;
