import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Github from '../Icons/Github';
import { navigateTo } from '../utils'

const GithubLinkButton = () => (
  <IconButton
    color='inherit'
    aria-label='go to github'
    onClick={() => navigateTo('https://github.com/heinburger/translate')}
  >
    <Github />
  </IconButton>
);

export default GithubLinkButton;
