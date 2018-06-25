import React from 'react';
import { shallow } from 'enzyme';
import { Github, Pin } from './index';

it('renders without crashing', () => {
  shallow(
    <div>
      <Github /><Pin />
    </div>
  );
});
