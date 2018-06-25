import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { Wrapper } from '../Layout';

class Root extends Component {
  render() {
    const { screenWidth } = this.props.layout
    return (
      <Wrapper>
        <div>{`whatup ${screenWidth}`}</div>
      </Wrapper>
    );
  }
}

export default inject('layout')(observer(Root));
