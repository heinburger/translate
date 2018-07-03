import React from 'react';
import { Route } from 'react-router-dom';
import { Wrapper, Drawer, Bar, Content } from '../Layout';
import Toolbar from '../Toolbar';
import Menu from '../Menu';

const Routes = () => (
  <Wrapper>
    <Route path='/' render={props => (
      <React.Fragment>
        <Bar><Toolbar /></Bar>
        <Drawer><Menu /></Drawer>
      </React.Fragment>
    )} />
    <Route exact path='/list' render={props => (
      <Content><div>content</div></Content>
    )} />
  </Wrapper>
);

export default Routes;
