import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './';

describe('SearchBar', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchBar />);
    expect(component).toMatchSnapshot();
  });
});
