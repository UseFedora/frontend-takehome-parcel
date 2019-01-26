import React from 'react';
import { shallow } from 'enzyme';
import SearchScreen from './';

describe('SearchScreen', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchScreen />);
    expect(component).toMatchSnapshot();
  });
});
