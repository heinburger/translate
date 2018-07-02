import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const Items = ({ layout }) => (
  <div>
    Items
    <div onClick={() => layout.toggleTest()}>toggle</div>
    {layout.test && <div>t d o</div>}
  </div>
);

Items.propTypes = {
  layout: PropTypes.object.isRequired,
}

export default inject('layout')(observer(Items));
