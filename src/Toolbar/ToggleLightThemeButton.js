import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import LightbulbOutline from '@material-ui/icons/LightbulbOutline';

const ToggleDrawerButton = ({ onClick }) => (
  <IconButton
    color='inherit'
    aria-label='toggle light theme'
    onClick={onClick}
  >
    <LightbulbOutline />
  </IconButton>
);

ToggleDrawerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ToggleDrawerButton;
