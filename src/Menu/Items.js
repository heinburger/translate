import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const Items = ({ layout }) => (
  <div>
    Items
    {layout.test && <div>t d o</div>}
  </div>
);

Items.propTypes = {
  layout: PropTypes.object.isRequired,
}

export default inject('layout')(observer(Items));
