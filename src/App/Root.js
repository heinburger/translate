import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import { Wrapper } from '../Layout'

const Root = ({ layout }) => (
  <Router>
    <Wrapper>
      <div>
        hi
      </div>
    </Wrapper>
  </Router>
);

Root.propTypes = {
  layout: PropTypes.object.isRequired,
};

export default inject('layout')(observer(Root));
