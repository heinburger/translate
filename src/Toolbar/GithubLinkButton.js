import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Github from '../Icons/Github';
import { navigateTo } from '../utils'

const GithubLinkButton = () => (
  <IconButton
    color='inherit'
    aria-label='open drawer'
    onClick={() => navigateTo('https://github.com/heinburger/translate')}
  >
    <Github />
  </IconButton>
);

export default GithubLinkButton;
