import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from './Wrapper';

it('renders without crashing', () => {
  shallow(<Wrapper />);
});
