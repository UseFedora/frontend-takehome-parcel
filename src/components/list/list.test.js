import React from 'react';
import { shallow } from 'enzyme';
import List from './';

describe('List', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
  });
});
