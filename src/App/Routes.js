import React from 'react';
import { observer } from 'mobx-react';

import { Wrapper, Drawer, Bar, Content } from '../Layout';
import Toolbar from '../Toolbar';
import Menu from '../Menu';

const Routes = () => (
  <Wrapper>
    <Bar><Toolbar /></Bar>
    <Drawer><Menu /></Drawer>
    <Content>
      <div>content</div>
    </Content>
  </Wrapper>
);

export default observer(Routes);
